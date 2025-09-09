import React, { useState, useEffect } from "react";
import "./StoresPage.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import sargaLogo from "/img/sargaLogo.png";
import userIcon from "/img/Home/user_icon.png";
import { onLogout } from "../../app/slices/userSlice";
import { getUserByCi, createRedemption } from "../../services/api";

const StoresPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userData = useSelector((state) => state.userSlice.userData);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const userLoged = userData && userData.token;
  const userRol = userData ? userData.userData.rol : null;
  const userToken = userData ? userData.token : null;

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
    setIsDropdownOpen(false); // Cerrar dropdown después del logout
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
    <div className="stores-container">
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
              <a href="/stores">Nuestras Tiendas</a>
            </li>
            {renderNavLinks()}
          </ul>
        </nav>
      </header>
      <div className="stores-content">
        <h1>¡Conocé nuestras Tiendas!</h1>
        <div className="stores-list">
            <div className="store-item">
                <h2>Punta del Este - Punta Shopping</h2>
                <p>Dirección: Av. Roosvelt, local 330</p>
                <p>Horario: Domingo a Jueves de 10:00 a 23:00</p>
            </div>
            <div className="store-item">
                <h2>Paysandú</h2>
                <p>Dirección: 18 de Julio 1099</p>
                <p>Horario: Lunes a Sábado de 09:00 a 19:00</p>
            </div>
            <div className="store-item">
                <h2>Salto</h2>
                <p>Dirección: Uruguay 746</p>
                <p>Horario: Lunes a Sábado de 09:00 a 19:00</p>
            </div>
            <div className="store-item">
                <h2>Colonia</h2>
                <p>Dirección: General Flores 407</p>
                <p>Horario: Lunes a Domingo de 10:00 a 19:00</p>
            </div>
            <div className="store-item">
                <h2>Maldonado</h2>
                <p>Dirección: Sarandí 869</p>
                <p>Horario: Lunes a Sábado de 10:00 a 19:30</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export { StoresPage };
