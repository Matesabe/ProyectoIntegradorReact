import React, { useState, useEffect } from "react";
import "./PromotionUpdate.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import sargaLogo from "/img/sargaLogo.png";
import userIcon from "/img/Home/user_icon.png";
import { onLogout } from "../../../../app/slices/userSlice";
import { renderAmountForm, renderDateForm, renderProductsForm, renderRecurrenceForm } from "../PromotionRenders/PromotionRenders";
import {
  fetchPromotions,
  setPromotions,
} from "../../../../app/slices/promotionsSlice";

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

  const handleUpdatePromotion = (e, promotion) => {
  e.preventDefault();
  console.log("Actualizando promoción:", promotion);
};

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
        return renderAmountForm(promotion, setPromotion, handleUpdatePromotion);
      case "Date":
        return renderDateForm(promotion, setPromotion, handleUpdatePromotion);
        break;
      case "Products":
        return renderProductsForm(promotion, setPromotion, handleUpdatePromotion);
      case "Recurrence":
        return renderRecurrenceForm(promotion, setPromotion, handleUpdatePromotion);
      default:
        break;
    }
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
