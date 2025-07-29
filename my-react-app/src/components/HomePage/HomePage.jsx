import React, { useState } from 'react';
import './HomePage.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import sargaLogo from '../../img/sargaLogo.png';
import imagenCatalogo from '../../img/Home/MISTRAL_AGUS_2_12857.jpg';

const HomePage = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

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
                            <li><a href="/login">Iniciar Sesión</a></li>
                            <li><a href="/register">Registrarse</a></li>
                            <li><a href="/">Catálogo</a></li>
                            <li><a href="/">Puntos</a></li>
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
                    <a id="ver-catalogo" href="/">Ver Catálogo</a>
                </div>
                <div className='catalogo-image'>
                    <img src={imagenCatalogo} alt="Catálogo" />
                </div>
            </div>
        </div>
    );
};
               
export { HomePage };