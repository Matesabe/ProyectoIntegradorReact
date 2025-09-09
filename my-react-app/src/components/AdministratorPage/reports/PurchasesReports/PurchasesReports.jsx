import React, { useState, useEffect } from "react";
import "./PurchasesReports.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import sargaLogo from "/img/sargaLogo.png";
import userIcon from "/img/Home/user_icon.png";
import { onLogout } from "../../../../app/slices/userSlice";
import { getAllCompras, getUserById } from "../../../../services/api";

const PurchasesReports = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const userData = useSelector((state) => state.userSlice.userData);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const userLoged = userData && userData.token;
  const userRol = userData ? userData.userData.rol : null;
  const userToken = userData ? userData.token : null;

  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

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

  // ✅ Effect corregido para cargar compras
  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        setLoading(true);

        // Obtener todas las compras
        const purchasesData = await getAllCompras(userToken);
        setPurchases(purchasesData);
        console.log("Compras obtenidas:", purchasesData);

        setLoading(false);
      } catch (error) {
        console.error("Error al obtener compras:", error);
        setLoading(false);
      }
    };

    if (userToken) {
      fetchPurchases();
    }
  }, [userToken]);

  // ✅ Función auxiliar para formatear el nombre del cliente
  const formatClientName = (nameObj) => {
    if (typeof nameObj === "string") return nameObj;
    if (nameObj && nameObj.Value) return nameObj.Value;
    return "N/A";
  };

  // ✅ Función auxiliar para formatear el email del cliente
  const formatClientEmail = (emailObj) => {
    if (typeof emailObj === "string") return emailObj;
    if (emailObj && emailObj.Value) return emailObj.Value;
    return "N/A";
  };

  // ✅ Función corregida para renderizar compras
  const renderPurchases = () => {
    if (loading) {
      return <div className="loading">Cargando compras...</div>;
    }

    if (purchases.length === 0) {
      return <div className="no-data">No hay compras para mostrar.</div>;
    }

    return purchases.map((purchase) => {
      const client = purchase.client;

      return (
        <div key={purchase.id} className="purchase-card">
          <div className="purchase-header">
            <h3>Compra #{purchase.id}</h3>
            <span className="amount-badge">${purchase.amount}</span>
          </div>

          <div className="client-info">
            <h4>Información del Cliente</h4>
            <p>
              <strong>ID:</strong> {client.id}
            </p>
            <p>
              <strong>Nombre:</strong> {formatClientName(client.name)}
            </p>
            <p>
              <strong>Email:</strong> {formatClientEmail(client.email)}
            </p>
            <p>
              <strong>Teléfono:</strong> {client.phone || "N/A"}
            </p>
            <p>
              <strong>Cédula:</strong> {client.ci || "N/A"}
            </p>
            <p>
              <strong>Puntos Actuales:</strong> {client.points}
            </p>
          </div>

          <div className="purchase-details">
            <p>
              <strong>Fecha:</strong>{" "}
              {new Date(purchase.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p>
              <strong>Monto Total:</strong> ${purchase.amount}
            </p>
            <p>
              <strong>Puntos Generados:</strong> {purchase.pointsGenerated}
            </p>
          </div>

          <div className="products-info">
            <h4>Productos Comprados</h4>
            {purchase.purchaseProducts && purchase.purchaseProducts.length > 0 ? (
              <div className="products-list">
                {purchase.purchaseProducts.map((product, index) => (
                  <div key={index} className="product-item">
                    <p>
                      <strong>Producto ID:</strong> {product.productId}
                    </p>
                    <p>
                      <strong>Cantidad:</strong> {product.quantity}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No hay información de productos</p>
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="purchases-reports-container">
      <header className={`home-header ${isNavOpen ? "nav-open" : ""}`}>
        <figure>
          <a href="/">
            <img src={sargaLogo} alt="Sarga Logo" />
          </a>
        </figure>

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

      <div className="reports-content">
        <div className="reports-title">
          <h1>Reportes de Compras</h1>
          <p>Visualiza los reportes de compras realizadas por los usuarios.</p>
        </div>

        <div className="purchases-reports">{renderPurchases()}</div>
      </div>
    </div>
  );
};

export default PurchasesReports;
