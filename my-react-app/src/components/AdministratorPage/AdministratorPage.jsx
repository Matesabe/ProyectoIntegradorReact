import React, { useState, useEffect } from "react";
import "./AdministratorPage.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import sargaLogo from "/img/sargaLogo.png";
import userIcon from "/img/Home/user_icon.png";
import { onLogout } from "../../app/slices/userSlice";
import { fetchPromotions, setPromotions } from "../../app/slices/promotionsSlice";
import { deletePromotion } from "../../services/api";

const AdministratorPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userData = useSelector((state) => state.userSlice.userData);
  const { promotions, loading, error } = useSelector((state) => state.promotionsSlice);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const userLoged = userData && userData.token;
  const userRol = userData ? userData.userData.rol : null;
  const userToken = userData ? userData.token : null;

  useEffect(() => {
    if (userToken) {
      // Usar el thunk para cargar promociones
      dispatch(fetchPromotions(userToken));
    }
  }, [userToken, dispatch]);

  const renderPromotions = () => {
    if (loading) {
      return <p>Cargando promociones...</p>;
    }

    if (error) {
      return <p>Error al cargar promociones: {error}</p>;
    }

    if (promotions.length > 0) {
      return (
        <ul>
          {promotions.map((promo) => (
            <div className="promotion-item" 
            key={promo.id}>
              <h4>{promo.description}</h4>
              <p>{promo.type}</p>
              <p>ID: {promo.id}</p>
              <button onClick={() => goToUpdatePromoPage(promo.id)}>Actualizar</button>
            </div>
          ))}
        </ul>
      );
    }
    return <p>No hay promociones disponibles.</p>;
  };

  const goToUpdatePromoPage = (promoId) => {
    navigateTo(`/admin/promotions/update/${promoId}`);
  };

  const handleDeletePromotion = async (promoId) => {
    if (!window.confirm("¿Está seguro que desea eliminar esta promoción? Esta acción no se puede deshacer.")) {
      return;
    }
    if (userToken) {
      try {
        await deletePromotion(promoId, userToken);
        dispatch(fetchPromotions(userToken));
      } catch (error) {
        console.error("Error al eliminar la promoción:", error);
      }
    }
  };

  // Función para actualizar promociones manualmente (opcional)
  const handleRefreshPromotions = () => {
    if (userToken) {
      dispatch(fetchPromotions(userToken));
    }
  };

  const renderNavLinks = () => {
    if (userLoged) {
      return (
        <>
          {userRol === "Administrator" || userRol === "Seller" ? (
            <li>
              <a href="/canje">Canje de Puntos</a>
            </li>
          ) : null}
          {userRol === "Administrator" ? (
            <li>
              <a href="/admin">Administración</a>
            </li>
          ) : null}
          <li className="user-icon">
            <div onClick={toggleUserDropdown} className="user-icon-container">
              <img
                src={userIcon}
                alt="Usuario"
                style={{ width: 32, height: 32, borderRadius: "50%" }}
              />
              <span className="user-name">{userData.userData.name}</span>
            </div>
            <ul className={`user-dropdown ${isDropdownOpen ? "show" : ""}`}>
              <li>
                <a href="/profile">Perfil</a>
              </li>
              <li>
                <a onClick={_onLogout} href="/">
                  Cerrar Sesión
                </a>
              </li>
            </ul>
          </li>
        </>
      );
    }
    return (
      <>
        <li>
          <a href="/register">Registrarse</a>
        </li>
        <li>
          <a href="/login">Iniciar Sesión</a>
        </li>
      </>
    );
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleUserDropdown = (e) => {
    console.log("Toggle user dropdown");
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const _onLogout = (e) => {
    e.preventDefault();
    dispatch(onLogout());
    setIsDropdownOpen(false);
    navigateTo("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest(".user-icon")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="admin-container">
      <header className={`home-header ${isNavOpen ? "nav-open" : ""}`}>
        <figure>
          <a href="/">
            <img src={sargaLogo} alt="Sarga Logo" />
          </a>
        </figure>

        {/* Botón hamburguesa para móvil */}
        <button
          className="mobile-menu-btn"
          onClick={toggleNav}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav>
          <ul>
            <li>
              <a href="/catalog">Catálogo</a>
            </li>
            <li>
              <a href="/">Puntos Sarga</a>
            </li>
            {renderNavLinks()}
          </ul>
        </nav>
      </header>
      <div className="acciones-admin">
        <div className="promociones">
          <h2>Promociones</h2>
          <div className="crear-promociones">
            <h3>Crear Nueva Promoción</h3>
            <p>Acceder para crear una nueva promoción de puntos Sarga</p>
            <button>
              <a href="/admin/promotions/crear-promocion">Crear Promoción</a>
            </button>
          </div>
          <div className="gestionar-promociones">
            <h3>Gestionar Promociones</h3>
            <p>Acceder para ver y gestionar las promociones existentes</p>
            <button className="actualizar-promos-btn" onClick={handleRefreshPromotions} type="button">
              Actualizar Lista
            </button>
            {renderPromotions()}
          </div>
        </div>
        <div className="reportes">
          <h2>Reportes</h2>
          <div className="reportes-ventas">
            <h3>Reportes Importación Compras</h3>
            <button>Ver Reportes</button>
          </div>
          <div className="reportes-productos">
            <h3>Reportes Importación Productos</h3>
            <button>Ver Reportes</button>
          </div>
          <div className="reporte-canjes">
            <h3>Reporte Canjes</h3>
            <button>Ver Reporte</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdministratorPage;
