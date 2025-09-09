import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getComprasByUserId, getRedemptionsByUserId } from "../../services/api";
import "./ProfilePage.css";
import sargaLogo from "/img/sargaLogo.png";
import userIcon from "/img/Home/user_icon.png";
import { onLogout } from "../../app/slices/userSlice";

const ProfilePage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userData = useSelector((state) => state.userSlice.userData);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const userLoged = userData && userData.token;
  const userToken = userData ? userData.token : null;
  const isAdmin =
    userData && userData.userData && userData.userData.Role === "Administrator";
  const [comprasCliente, setComprasCliente] = useState([]);
  const [redemptionsCliente, setRedemptionsCliente] = useState([]);
  const [loadingCompras, setLoadingCompras] = useState(true);
  const [loadingRedemptions, setLoadingRedemptions] = useState(true);

  useEffect(() => {
    const fetchCompras = async () => {
      if (userLoged && userData.userData?.id) {
        try {
          setLoadingCompras(true);
          const compras = await getComprasByUserId(userData.userData.id, userToken);
          setComprasCliente(compras || []);
          console.log("Compras obtenidas:", compras);
        } catch (error) {
          console.error("Error al obtener las compras:", error);
          setComprasCliente([]);
        } finally {
          setLoadingCompras(false);
        }
      }
    };

    fetchCompras();
  }, [userLoged, userData.userData?.id, userToken]);

  useEffect(() => {
    const fetchRedemptions = async () => {
      if (userLoged && userData.userData?.id) {
        try {
          setLoadingRedemptions(true);
          const redemptions = await getRedemptionsByUserId(userData.userData.id, userToken);
          setRedemptionsCliente(redemptions || []);
          console.log("Redemptions obtenidas:", redemptions);
        } catch (error) {
          console.error("Error al obtener los canjes:", error);
          setRedemptionsCliente([]);
        } finally {
          setLoadingRedemptions(false);
        }
      }
    };

    fetchRedemptions();
  }, [userLoged, userData.userData?.id, userToken]);

  const formatClientName = (nameObj) => {
    if (typeof nameObj === 'string') return nameObj;
    if (nameObj && nameObj.Value) return nameObj.Value;
    return 'N/A';
  };

  const formatClientEmail = (emailObj) => {
    if (typeof emailObj === 'string') return emailObj;
    if (emailObj && emailObj.Value) return emailObj.Value;
    return 'N/A';
  };

 
  const renderCompras = () => {
    if (loadingCompras) {
      return <div className="loading-message">Cargando compras...</div>;
    }

    if (!comprasCliente || comprasCliente.length === 0) {
      return <div className="no-data-message">No tienes compras registradas.</div>;
    }

    return comprasCliente.map((compra) => (
      <div key={compra.id} className="compra-item">
        <div className="compra-header">
          <h4>Compra #{compra.id}</h4>
          <span className="amount-badge">${compra.amount}</span>
        </div>
        
        <div className="compra-details">
          <p>
            <strong>Fecha:</strong> {new Date(compra.date).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          <p>
            <strong>Monto:</strong> ${compra.amount}
          </p>
          <p>
            <strong>Puntos Generados:</strong> {compra.pointsGenerated}
          </p>
        </div>

        {compra.purchaseProducts && compra.purchaseProducts.length > 0 && (
          <div className="productos-info">
            <strong>Productos:</strong>
            <div className="productos-list">
              {compra.purchaseProducts.map((producto, index) => (
                <div key={index} className="producto-item">
                  <span>Producto #{producto.productId}</span>
                  <span>Cantidad: {producto.quantity}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    ));
  };

  
  const renderRedemptions = () => {
    if (loadingRedemptions) {
      return <div className="loading-message">Cargando canjes...</div>;
    }
    if (!redemptionsCliente || redemptionsCliente.length === 0) {
      return <div className="no-data-message">No tienes canjes registrados.</div>;
    }

    return redemptionsCliente.map((redemption) => (
      <div key={redemption.id} className="redemption-item">
        <div className="redemption-header">
          <h4>Canje #{redemption.id}</h4>
          <span className="points-badge">{redemption.pointsUsed} pts</span>
        </div>
        
        <div className="redemption-details">
          <p>
            <strong>Fecha:</strong> {new Date(redemption.date).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          <p>
            <strong>Puntos Usados:</strong> {redemption.pointsUsed}
          </p>
        </div>
      </div>
    ));
  };

  const userRol = userData ? userData.userData.rol : null;

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
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const _onLogout = (e) => {
    e.preventDefault();
    dispatch(onLogout());
    setIsDropdownOpen(false);
    alert("Logout exitoso");
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

  return (
    <div className="profile-page">
      <header className={`home-header ${isNavOpen ? "nav-open" : ""}`}>
        <figure>
          <a id="sarga-logo" href="/">
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
              <a href="/">Catálogo</a>
            </li>
            <li>
              <a href="/">Puntos Sarga</a>
            </li>
            {renderNavLinks()}
          </ul>
        </nav>
      </header>
      <div className="profile-info">
        <h1>{userData.userData.name}</h1>
        <p>Puntos Sarga: {userData.userData.points}</p>
        <p>Email: {userData.userData.email}</p>
        <p>Teléfono: {userData.userData.phone}</p>
      </div>
      <div className="purchase-history">
        <div className="purchase-history-content">
          <h2>Mis Compras</h2>
          <p>Aquí puedes ver tus compras recientes.</p>
        </div>
        <div className="purchase-history-list">
          {renderCompras()}
        </div>
      </div>
      <div className="redemption-history">
        <div className="redemption-history-content">
          <h2>Mis Canjes</h2>
          <p>Aquí puedes ver tus canjes recientes.</p>
        </div>
        <div className="redemption-history-list">
          {renderRedemptions()}
        </div>
      </div>
    </div>
  );
};

export { ProfilePage };
