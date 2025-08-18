import React, { useState, useEffect } from "react";
import "./PromotionCreate.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import sargaLogo from "/img/sargaLogo.png";
import userIcon from "/img/Home/user_icon.png";
import { onLogout } from "../../../../app/slices/userSlice";
import {
  renderAmountForm,
  renderDateForm,
  renderProductsForm,
  renderRecurrenceForm,
} from "../PromotionRenders/PromotionRenders";
import {
  fetchPromotions,
  setPromotions,
} from "../../../../app/slices/promotionsSlice";

const PromotionCreatePage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [promotion, setPromotion] = useState(null); // Estado para la promoción

  useEffect(() => {
    setPromotion({
      id: 0,
      description: "",
      type: "Amount",
      isActive: false,
      amountPerPoint: 0,
      promotionProducts: [],
      pointsPerProducts: 0,
      promotionDateStart: "",
      promotionDateEnd: "",
      pointsPerDate: 0,
      minimalAmount: 0,
      recurrenceValue: 0,
      pointsPerRecurrence: 0,
    });
  }, []);

  const userData = useSelector((state) => state.userSlice.userData);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const userLoged = userData && userData.token;
  const userRol = userData ? userData.userData.rol : null;
  const userToken = userData ? userData.token : null;

  const handleCreatePromotion = (e, promotion) => {
    e.preventDefault();
    console.log("Creando nueva promoción:", promotion);
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
        return renderAmountForm(promotion, setPromotion, handleCreatePromotion);
      case "Date":
        return renderDateForm(promotion, setPromotion, handleCreatePromotion);
        break;
      case "Products":
        return renderProductsForm(
          promotion,
          setPromotion,
          handleCreatePromotion
        );
      case "Recurrence":
        return renderRecurrenceForm(
          promotion,
          setPromotion,
          handleCreatePromotion
        );
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

        <h2>Crear Nueva Promoción</h2>
        <div className="tipo-promo">
          <label htmlFor="tipo">Tipo de Promoción:</label>
          <select
            id="tipo"
            value={promotion ? promotion.type : ""}
            onChange={(e) => {
              const newType = e.target.value;
              // Actualizar el estado con valores por defecto para cada tipo
              let updatedPromotion = promotion
                ? { ...promotion, type: newType }
                : { type: newType };
              switch (newType) {
                case "Amount":
                  updatedPromotion = {
                    ...updatedPromotion,
                    amountPerPoint: 0,
                    minimalAmount: 0,
                  };
                  break;
                case "Date":
                  updatedPromotion = {
                    ...updatedPromotion,
                    promotionDateStart: "",
                    promotionDateEnd: "",
                    pointsPerDate: 0,
                  };
                  break;
                case "Products":
                  updatedPromotion = {
                    ...updatedPromotion,
                    promotionProducts: [],
                    pointsPerProducts: 0,
                  };
                  break;
                case "Recurrence":
                  updatedPromotion = {
                    ...updatedPromotion,
                    recurrenceValue: 0,
                    pointsPerRecurrence: 0,
                  };
                  break;
                default:
                  break;
              }
              setPromotion(updatedPromotion);
            }}
          >
            <option value="">Seleccionar tipo</option>
            <option value="Amount">Monto por punto</option>
            <option value="Date">Fecha de promoción</option>
            <option value="Products">Productos</option>
            <option value="Recurrence">Recurrencia</option>
          </select>
        </div>

        {promotion && promotion.type ? (
          loadPromotionForm()
        ) : (
          <p>Cargando promoción...</p>
        )}
      </div>
    </div>
  );
};

export default PromotionCreatePage;
