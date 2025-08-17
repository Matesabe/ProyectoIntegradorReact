import React, { useState, useEffect } from "react";
import "./PromotionUpdate.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import sargaLogo from "/img/sargaLogo.png";
import userIcon from "/img/Home/user_icon.png";
import { onLogout } from "../../../app/slices/userSlice";
import {
  fetchPromotions,
  setPromotions,
} from "../../../app/slices/promotionsSlice";

const PromotionUpdatePage = () => {
  const { id } = useParams(); // Obtener el ID de la promoción de la URL

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [promotion, setPromotion] = useState(null); // Estado para la promoción

  const userData = useSelector((state) => state.userSlice.userData);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const userLoged = userData && userData.token;
  const userRol = userData ? userData.userData.rol : null;
  const userToken = userData ? userData.token : null;

  const promotions = useSelector((state) => state.promotionsSlice.promotions);

  // Buscar la promoción cuando se carguen las promociones o cambie el ID
  useEffect(() => {
    const foundPromotion = promotions.find(
      (promo) => promo.id === parseInt(id)
    );
    if (foundPromotion) {
      setPromotion(foundPromotion);
    }
  }, [promotions, id]);

  // Cargar promociones si no están cargadas
  useEffect(() => {
    if (userToken && promotions.length === 0) {
      dispatch(fetchPromotions(userToken));
    }
  }, [userToken, promotions.length, dispatch]);

  const handleUpdatePromotion = (e) => {
    e.preventDefault();
    // Aquí implementarías la lógica para actualizar la promoción
    console.log("Actualizando promoción:", promotion);
    // TODO: Implementar la actualización de la promoción
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

  // Cerrar dropdown cuando se haga click fuera de él
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

  const loadPromotionForm = () => {
    if (!promotion) return null;
    switch (promotion.type) {
      case "Amount":
        return renderAmountForm();
      case "Date":
        return renderDateForm();
        break;

      default:
        break;
    }
  };

  const renderAmountForm = () => {
    return (
      <form onSubmit={handleUpdatePromotion}>
        <div className="form-group">
          <label htmlFor="description">Descripción:</label>
          <input
            type="text"
            id="description"
            value={promotion.description || ""}
            onChange={(e) =>
              setPromotion({ ...promotion, description: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Monto por punto:</label>
          <input
            type="number"
            id="amount"
            value={promotion.amountPerPoint || ""}
            onChange={(e) =>
              setPromotion({ ...promotion, amountPerPoint: e.target.value })
            }
          />
        </div>
      </form>
    );
  };

  const renderDateForm = () => {
    return (
      <form onSubmit={handleUpdatePromotion}>
        <div className="form-group">
          <label htmlFor="description">Descripción:</label>
          <input
            type="text"
            id="description"
            value={promotion.description || ""}
            onChange={(e) =>
              setPromotion({ ...promotion, description: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Fecha de Inicio:</label>
          <input
            type="date"
            id="startDate"
            value={promotion.promotionDateStart || ""}
            onChange={(e) =>
              setPromotion({ ...promotion, promotionDateStart: e.target.value })
            }
          />
          <label htmlFor="endDate">Fecha de Fin:</label>
          <input
            type="date"
            id="endDate"
            value={promotion.promotionDateEnd || ""}
            onChange={(e) =>
              setPromotion({ ...promotion, promotionDateEnd: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="points">Puntos:</label>
          <input
            type="number"
            id="points"
            value={promotion.pointsPerDate || ""}
            onChange={(e) =>
              setPromotion({ ...promotion, pointsPerDate: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="isActive">Habilitada:</label>
          <input
            type="checkbox"
            id="isActive"
            checked={promotion.isActive || false}
            onChange={(e) =>
              setPromotion({ ...promotion, isActive: e.target.checked })
            }
          />
        </div>
        <button type="submit">Actualizar Promoción</button>
      </form>
    );
  };

  return (
    <div className="promo-container">
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

      <div className="promo-content">
        <button onClick={() => navigateTo("/admin")} className="back-button">
          ← Volver a Administración
        </button>

        <h2>Actualizar Promoción</h2>

        {promotion ? loadPromotionForm() : <p>Cargando promoción...</p>}
      </div>
    </div>
  );
};

export default PromotionUpdatePage;
