import React, { useState, useEffect } from "react";
import "./RedemptionsReports.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import sargaLogo from "/img/sargaLogo.png";
import userIcon from "/img/Home/user_icon.png";
import { onLogout } from "../../../../app/slices/userSlice";
import { getRedemptions, getUserById } from "../../../../services/api";

const RedemptionsReports = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const userData = useSelector((state) => state.userSlice.userData);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const userLoged = userData && userData.token;
  const userRol = userData ? userData.userData.rol : null;
  const userToken = userData ? userData.token : null;

  const [redemptions, setRedemptions] = useState([]);
  const [users, setUsers] = useState({}); 
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


  const fetchUserData = async (userId) => {
    if (users[userId]) {
      return users[userId]; // Retornar del cache si ya existe
    }

    try {
      const user = await getUserById(userId, userToken);
      setUsers((prev) => ({
        ...prev,
        [userId]: user,
      }));
      return user;
    } catch (error) {
      console.error(`Error al obtener el usuario ${userId}:`, error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Obtener redemptions
        const redemptionsData = await getRedemptions(userToken);
        setRedemptions(redemptionsData);
        console.log("Redenciones obtenidas:", redemptionsData);

        // Obtener usuarios únicos
        const uniqueUserIds = [...new Set(redemptionsData.map((r) => r.clientId))];
        const usersData = {};

        await Promise.all(
          uniqueUserIds.map(async (userId) => {
            try {
              const user = await getUserById(userId, userToken);
              usersData[userId] = user;
            } catch (error) {
              console.error(`Error al obtener usuario ${userId}:`, error);
              usersData[userId] = null;
            }
          })
        );

        setUsers(usersData);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener datos:", error);
        setLoading(false);
      }
    };

    if (userToken) {
      fetchData();
    }
  }, [userToken]);

  const renderRedemptions = () => {
    if (loading) {
      return <div className="loading">Cargando reportes...</div>;
    }

    if (redemptions.length === 0) {
      return <div className="no-data">No hay redenciones para mostrar.</div>;
    }

    return redemptions.map((redemption) => {
      const user = users[redemption.clientId];

      return (
        <div key={redemption.id} className="redemption-card">
          <div className="redemption-header">
            <h3>Redención #{redemption.id}</h3>
            <span className="points-used">{redemption.pointsUsed} puntos</span>
          </div>

          <div className="client-info">
            <h4>Información del Cliente</h4>
            {user ? (
              <>
                <p>
                  <strong>ID:</strong> {redemption.clientId}
                </p>
                <p>
                  <strong>Nombre:</strong> {user.name}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Teléfono:</strong> {user.phone}
                </p>
                <p>
                  <strong>Cédula:</strong> {user.ci}
                </p>
              </>
            ) : (
              <p>Error al cargar información del cliente</p>
            )}
          </div>

          <div className="redemption-details">
            <p>
              <strong>Fecha:</strong> {new Date(redemption.date).toLocaleDateString()}
            </p>
            <p>
              <strong>Puntos Utilizados:</strong> {redemption.pointsUsed}
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="redemptions-reports-container">
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
          <h1>Reportes de Redenciones</h1>
          <p>Visualiza los reportes de redenciones realizadas por los usuarios.</p>
        </div>

        <div className="redemptions-reports">{renderRedemptions()}</div>
      </div>
    </div>
  );
};

export default RedemptionsReports;
