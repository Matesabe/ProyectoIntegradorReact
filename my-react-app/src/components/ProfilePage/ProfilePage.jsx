import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getComprasByUserId } from "../../services/api";
import "./ProfilePage.css";
import sargaLogo from "/img/sargaLogo.png";
import userIcon from "/img/Home/user_icon.png";
import { onLogout } from '../../app/slices/userSlice';

const ProfilePage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userData = useSelector((state) => state.userSlice.userData);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const userLoged = userData && userData.token;
  const userToken = userData ? userData.token : null;
  const isAdmin = userData && userData.userData && userData.userData.Role === "admin";
  const [comprasCliente, setComprasCliente] = useState([]);
  

  useEffect(() => {
    if (userLoged) {
      getComprasByUserId(userData.userData.id, userToken)
        .then((compras) => {
          setComprasCliente(compras);
          displayCompras(compras);
        })
        .catch((error) => {
          console.error("Error al obtener las compras:", error);
        });
    }
  }, [userLoged, userData.userData.id]);

  const displayCompras = (compras) => {
    const comprasList = document.querySelector(".purchase-history-list");
    if (!compras || compras.length === 0) {
      comprasList.innerHTML = "<p>No tienes compras registradas.</p>";
      return;
    }
    comprasList.innerHTML = ""; // Limpiar la lista antes de mostrar las nuevas compras
    compras.forEach((compra) => {
      const compraItem = document.createElement("div");
      compraItem.className = "compra-item";
      compraItem.innerHTML = `
        <p>ID: ${compra.id}</p>
        <p>Fecha: ${new Date(compra.fecha).toLocaleDateString()}</p>
        <p>Total: $${compra.total}</p>
      `;
      comprasList.appendChild(compraItem);
    });
  };

  const renderNavLinks = () => {
    if (userLoged) {
      return (
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
    setIsDropdownOpen(false); // Cerrar dropdown después del logout
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

        </div>
      </div>
    </div>
  );
};

export { ProfilePage };
