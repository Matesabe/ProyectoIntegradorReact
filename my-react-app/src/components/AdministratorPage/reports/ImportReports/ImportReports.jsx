import React, { useState, useEffect } from "react";
import "./ImportReports.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import sargaLogo from "/img/sargaLogo.png";
import userIcon from "/img/Home/user_icon.png";
import { onLogout } from "../../../../app/slices/userSlice";
import { getAllReports } from "../../../../services/api";

const ImportReports = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const userData = useSelector((state) => state.userSlice.userData);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const userLoged = userData && userData.token;
  const userRol = userData ? userData.userData.rol : null;
  const userToken = userData ? userData.token : null;

  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Datos hardcodeados temporalmente
  const MOCK_REPORTS = [
    {
      "id": 5,
      "date": "2025-07-27T13:14:02.3900293",
      "entries": [
        {
          "id": 17,
          "description": "Alta subproducto",
          "status": "Ok",
          "errorMessage": null,
          "reportId": 5
        },
        {
          "id": 18,
          "description": "Alta subproducto",
          "status": "Error",
          "errorMessage": "Error al dar de alta el producto: campo \"Color\" no puede ser null",
          "reportId": 5
        }
      ],
      "totalLines": 2,
      "procecedLines": 2,
      "type": "Products"
    },
    {
      "id": 6,
      "date": "2025-07-27T13:14:02.3900293",
      "entries": [
        {
          "id": 19,
          "description": "Alta subproducto",
          "status": "Ok",
          "errorMessage": null,
          "reportId": 6
        },
        {
          "id": 20,
          "description": "Alta subproducto",
          "status": "Ok",
          "errorMessage": null,
          "reportId": 6
        }
      ],
      "totalLines": 2,
      "procecedLines": 2,
      "type": "Products"
    }
  ];

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

  // ✅ Modificado para usar datos mock temporalmente
  useEffect(() => {
    const fetchReports = async () => {
      try {
        setLoading(true);

        // TODO: Cambiar por el fetch real cuando esté listo
        // const reportsData = await getAllReports(userToken);
        
        // ✅ Usando datos hardcodeados temporalmente
        const reportsData = MOCK_REPORTS;
        
        setReports(reportsData);
        console.log("Reportes obtenidos:", reportsData);

        // Simular delay de carga para testing
        setTimeout(() => {
          setLoading(false);
        }, 1000);

      } catch (error) {
        console.error("Error al obtener reportes:", error);
        setLoading(false);
      }
    };

    if (userToken) {
      fetchReports();
    } else {
      // ✅ Para testing sin token, cargar datos mock directamente
      setReports(MOCK_REPORTS);
      setLoading(false);
    }
  }, [userToken]);

  // ✅ Función auxiliar para obtener el color del badge según el tipo
  const getTypeBadgeColor = (type) => {
    switch (type?.toLowerCase()) {
      case 'products':
        return 'var(--success-green)';
      case 'users':
        return 'var(--primary-blue)';
      case 'purchases':
        return 'var(--warning-orange)';
      default:
        return 'var(--field-drab)';
    }
  };

  // ✅ Función auxiliar para obtener el color del estado
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'ok':
        return 'var(--success-green)';
      case 'error':
        return 'var(--error-red)';
      default:
        return '#666';
    }
  };

  // ✅ Función auxiliar para calcular estadísticas
  const getReportStats = (report) => {
    const okEntries = report.entries?.filter(entry => entry.status?.toLowerCase() === 'ok').length || 0;
    const errorEntries = report.entries?.filter(entry => entry.status?.toLowerCase() === 'error').length || 0;
    const successRate = report.totalLines > 0 ? ((okEntries / report.totalLines) * 100).toFixed(1) : 0;

    return { okEntries, errorEntries, successRate };
  };

  // ✅ Función corregida para renderizar reportes
  const renderReports = () => {
    if (loading) {
      return <div className="loading">Cargando reportes...</div>;
    }

    if (reports.length === 0) {
      return <div className="no-data">No hay reportes para mostrar.</div>;
    }

    return reports.map((report) => {
      const stats = getReportStats(report);

      return (
        <div key={report.id} className="report-card">
          <div className="report-header">
            <h3>Reporte #{report.id}</h3>
            <span 
              className="type-badge"
              style={{ backgroundColor: getTypeBadgeColor(report.type) }}
            >
              {report.type || 'N/A'}
            </span>
          </div>

          <div className="report-info">
            <h4>Información del Reporte</h4>
            <p>
              <strong>Fecha:</strong>{" "}
              {new Date(report.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p>
              <strong>Total de Líneas:</strong> {report.totalLines || 0}
            </p>
            <p>
              <strong>Líneas Procesadas:</strong> {report.procecedLines || 0}
            </p>
            <p>
              <strong>Tasa de Éxito:</strong> {stats.successRate}%
            </p>
          </div>

          <div className="report-summary">
            <h4>Resumen de Resultados</h4>
            <div className="summary-stats">
              <div className="stat-item success">
                <span className="stat-number">{stats.okEntries}</span>
                <span className="stat-label">Exitosos</span>
              </div>
              <div className="stat-item error">
                <span className="stat-number">{stats.errorEntries}</span>
                <span className="stat-label">Errores</span>
              </div>
            </div>
          </div>

          <div className="entries-info">
            <h4>Detalle de Entradas</h4>
            {report.entries && report.entries.length > 0 ? (
              <div className="entries-list">
                {report.entries.map((entry) => (
                  <div key={entry.id} className="entry-item">
                    <div className="entry-header">
                      <span className="entry-id">#{entry.id}</span>
                      <span 
                        className="entry-status"
                        style={{ color: getStatusColor(entry.status) }}
                      >
                        {entry.status === 'Ok' ? '✅' : '❌'} {entry.status}
                      </span>
                    </div>
                    <p className="entry-description">
                      <strong>Descripción:</strong> {entry.description || 'N/A'}
                    </p>
                    {entry.errorMessage && (
                      <p className="entry-error">
                        <strong>Error:</strong> {entry.errorMessage}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p>No hay entradas para mostrar</p>
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="import-reports-container">
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
          <h1>Reportes de Importación</h1>
          <p>Visualiza los reportes de importación de datos al sistema.</p>
        </div>

        <div className="import-reports">{renderReports()}</div>
      </div>
    </div>
  );
};

export default ImportReports;
