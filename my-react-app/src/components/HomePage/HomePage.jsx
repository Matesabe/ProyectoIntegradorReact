import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import sargaLogo from '/img/sargaLogo.png';
import userIcon from '/img/Home/user_icon.png';
import { onLogout } from '../../app/slices/userSlice';

import imagenCatalogo from '/img/Home/MISTRAL_AGUS_2_12857.jpg';
import imagenCatalogo1 from '/img/Home/mistral.jpg';
import imagenCatalogo2 from '/img/Home/mistral2.jpg';
import imagenCatalogo3 from '/img/Home/mistral3.jpg';
import instagramIcon from '/img/Home/Instagram_icon.png';


const HomePage = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const userData = useSelector((state) => state.userSlice.userData);
    const navigateTo = useNavigate();
    const dispatch = useDispatch();

    const userLoged = userData && userData.token;
    const userRol = userData ? userData.userData.rol : null;

    const renderNavLinks = () => {
        if (userLoged) {
            return (
                <>
                    {userRol === 'Administrator' || userRol === 'Seller' ? (
                        <li>
                            <a href="/canje">Canje de Puntos</a>
                        </li>
                    ) : null}
                    {userRol === 'Administrator' ? (
                        <li>
                            <a href="/admin">Administración</a>
                        </li>
                    ) : null}
                <li className="user-icon">
                    <div onClick={toggleUserDropdown} className="user-icon-container">
                        <img src={userIcon} alt="Usuario" style={{ width: 32, height: 32, borderRadius: '50%' }} />
                        <span className="user-name">{userData.userData.name}</span>
                    </div>
                    <ul className={`user-dropdown ${isDropdownOpen ? 'show' : ''}`}>
                        <li><a href="/profile">Perfil</a></li>
                        <li><a onClick={_onLogout} href="/">Cerrar Sesión</a></li>
                    </ul>
                </li>
                </>
            );
        }
        return (
            <>
                <li><a href="/register">Registrarse</a></li>
                <li><a href="/login">Iniciar Sesión</a></li>
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
            if (isDropdownOpen && !event.target.closest('.user-icon')) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isDropdownOpen]);

    return (
        <div className="home-container">
                <header className={`home-header ${isNavOpen ? 'nav-open' : ''}`}>
                    <figure>
                        <a href="/"><img src={sargaLogo} alt="Sarga Logo" /></a>
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
                            <li><a href="/catalog">Catálogo</a></li>
                            <li><a href="/">Puntos Sarga</a></li>
                            {renderNavLinks()}
                        </ul>
                    </nav>
                </header>
  
                <div className="home-content">
                    <h1 className='home-title'>Bienvenido a Sarga</h1>
                    <p className='home-description'>Combinamos las mejores marcas con las últimas tendencias para que armes ese outfit que te haga sentir vos!</p>
                    <p className='home-description'>Te esperamos en Sarga #sargadrop.</p>
                </div>

            <div id='catalogo' className='catalogo-section'>
                <div className='catalogo-text'>
                    <h2>Conocé las últimas novedades.</h2>
                    <a id="ver-catalogo" href="/catalog">Ver Catálogo</a>
                </div>
                <div className='catalogo-image'>
                    <img src={imagenCatalogo} alt="Catálogo" />
                </div>
            </div>
            <div className='productos-section'>
                <div className='productos-image' data-label="Remeras Hombre" id='remeras-hombre'>
                    <a href="/">
                    <img src={imagenCatalogo1} alt="Remeras Hombre" />
                    </a>
                </div>
                <div className='productos-image' data-label="Remeras Mujer" id='remeras-mujer'>
                    <a href="/">
                    <img src={imagenCatalogo2} alt="Remeras Mujer" />
                    </a>
                </div>
                <div className='productos-image' data-label="Jeans Hombre" id='jeans-hombre'>
                    <a href="/">
                    <img src={imagenCatalogo3} alt="Jeans Hombre" />
                    </a>
                </div>
            </div>
            <div className='puntos-section'>
                <div className='puntos-text'>
                    <h2>Puntos Sarga.</h2>
                    <p>Sumá puntos con tus compras y canjealos por productos en los locales Sarga.</p>
                </div>
                <div className='puntos-image'>
                    <img src={imagenCatalogo} alt="Puntos" />
                </div>
            </div>
            <div className='footer'>
                <div className='footer-text'>
                <p>Contacto: info@sarga.com</p>
                </div>
                <div className='footer-links'>
                    <p>¡Seguinos en Instagram!</p>
                    <a href="https://www.instagram.com/sarga_uy" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram" id='instagram-icon' />
                    </a>
                </div>
            </div>
            <div className='footer-copyright'>
                <p>© 2025 Sarga. Todos los derechos reservados.</p>
            </div>
        </div>
    );
};
               
export { HomePage };