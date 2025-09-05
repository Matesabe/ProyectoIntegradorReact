import React, { useState, useEffect } from "react";
import "./CanjePage.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import sargaLogo from "/img/sargaLogo.png";
import userIcon from "/img/Home/user_icon.png";
import { onLogout } from "../../app/slices/userSlice";
import { getUserByCi, createRedemption } from "../../services/api";

const CanjePage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userData = useSelector((state) => state.userSlice.userData);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const userLoged = userData && userData.token;
  const userRol = userData ? userData.userData.rol : null;
  const userToken = userData ? userData.token : null;

  const [clientId, setClientId] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPoints, setClientPoints] = useState(0);

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

  const buscarCliente = async () => {
    const ci = document.getElementById("cliente-buscar").value;
    if (ci) {
      try {
        const response = await getUserByCi(ci, userToken);
        if (response.ci) {
          setClientId(response.id);

          // Extraer el value de response.name si tiene el formato "Name { Value = Cliente Sarga }"
          const extractValue = (str) => {
            const match = str.match(/Value\s*=\s*(.+?)\s*}/);
            return match ? match[1] : str;
          };

          setClientName(extractValue(response.name));
          setClientEmail(extractValue(response.email));
          setClientPoints(response.points);
        } else {
          alert("Cliente no encontrado");
        }
      } catch (error) {
        console.error("Error al buscar cliente:", error);
        alert("Error al buscar cliente");
      }
    } else {
      alert("Por favor, ingresa una Cédula válida.");
    }
  };

  const canjearPuntos = async () => {
    const puntos = document.getElementById("puntos-canjear").value;
    if (!window.confirm(`¿Confirmas el canje por ${puntos} puntos?`)) {
      return;
    }
    if (puntos) {
      try {
        const response = await createRedemption(
          {
            clientId: clientId,
            points: puntos,
          },
          userToken
        );
        if (response.id) {
          document.getElementById("mensaje-canjeo").innerText =
            "Canjeo realizado con éxito";
          // Actualizar puntos en la ficha del cliente
          setClientPoints((prevPoints) => prevPoints - puntos);
          // Mostrar mensaje de canje creado
          canjeCreado(response);
        } else {
          document.getElementById("mensaje-canjeo").innerText =
            "Error en el canjeo";
        }
      } catch (error) {
        console.error("Error al canjear puntos:", error);
        document.getElementById("mensaje-canjeo").innerText =
          "Error al canjear puntos";
      }
    } else {
      document.getElementById("mensaje-canjeo").innerText =
        "Por favor, ingresa una cantidad válida de puntos.";
    }
  };

  const canjeCreado = (canjeData) => {
    return <div className="mensaje-exito">
      <p>Canje realizado con éxito:</p>
      <ul>
        <li>ID: {canjeData.id}</li>
        <li>Cliente: {canjeData.clientId}</li>
        <li>Puntos Canjeados: {canjeData.pointsUsed}</li>
      </ul>
    </div>;
  };

  return (
    <div className="canje-container">
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
      <div className="canje-titulo">
        <h1>Canje de Puntos</h1>
        <p>
          Bienvenido a la página de Canje de Puntos. Aquí podrás realizar canjes
          para clientes.
        </p>
      </div>
      <div className="canje-contenido">
        <div className="buscar-cliente">
          <label htmlFor="cliente-buscar">Buscar Cliente por Cédula:</label>
          <input
            type="text"
            id="cliente-buscar"
            placeholder="Ingresa la CI del cliente, sin puntos ni guiones"
          />
        </div>
        <button onClick={buscarCliente}>Buscar Cliente</button>
        <p id="mensaje-cliente"></p>
      </div>
      <div className="ficha-cliente">
        <h2>Ficha del Cliente</h2>
        <p>ID: {clientId}</p>
        <p>Nombre: {clientName}</p>
        <p>Correo: {clientEmail}</p>
        <p>Puntos Disponibles: {clientPoints}</p>
      </div>
      <div className="canje-acciones">
        <div className="cantidad-puntos">
          <label htmlFor="puntos-canjear">Cantidad de Puntos a Canjear:</label>
          <input type="number" id="puntos-canjear" min="1" />
        </div>
        <button onClick={canjearPuntos}>Canjear Puntos</button>
        <p id="mensaje-canjeo"></p>
      </div>
    </div>
  );
};

export { CanjePage };
