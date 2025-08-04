import React, { useState, useEffect } from 'react';
import './CatalogPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import sargaLogo from '../../img/sargaLogo.png';
import userIcon from '../../img/Home/user_icon.png';
import { onLogout } from '../../app/slices/userSlice';
import { fetchMistralProducts } from '../../app/slices/productsSlice';

const CatalogPage = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const userData = useSelector((state) => state.userSlice.userData);
    const { mistralProducts, loading, error, lastFetch } = useSelector(state => state.productsSlice);
    const navigateTo = useNavigate();
    const dispatch = useDispatch();

    const userLoged = userData && userData.token;

    const renderNavLinks = () => {
        if (userLoged) {
            return (
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
        console.log("Toggle user dropdown");
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

    useEffect(() => {
        // Solo cargar si no hay productos o si han pasado más de 5 minutos
        const shouldFetch = !mistralProducts.length || 
                           (Date.now() - lastFetch > 5 * 60 * 1000);
        
        if (shouldFetch) {
            dispatch(fetchMistralProducts());
        }
    }, [dispatch, mistralProducts.length, lastFetch]);

    if (loading) return <div>Cargando productos...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="catalog-container">
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
                            <li><a href="/">Catálogo</a></li>
                            <li><a href="/">Puntos Sarga</a></li>
                            {renderNavLinks()}
                        </ul>
                    </nav>
                </header>
                <div>
            {mistralProducts.map(product => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
        </div>
    );
};
               
export { CatalogPage };