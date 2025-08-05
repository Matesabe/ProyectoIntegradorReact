import React, { useState, useEffect } from 'react';
import './CatalogPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import sargaLogo from '../../img/sargaLogo.png';
import userIcon from '../../img/Home/user_icon.png';
import { onLogout } from '../../app/slices/userSlice';
import { fetchMistralProducts } from '../../app/slices/productsSlice';
import placeholder from '../../img/Catalog/placeholder.jpg';

const CatalogPage = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const userData = useSelector((state) => state.userSlice.userData);
    const { mistralProducts, loading, error, lastFetch } = useSelector(state => state.productsSlice);
    const navigateTo = useNavigate();
    const dispatch = useDispatch();

    

    //filtros de busqueda
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(mistralProducts);

    useEffect(() => {
        // Filtrar productos cuando cambie el término de búsqueda o los productos
        const filtered = mistralProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategory ? product.type?.toLowerCase().includes(selectedCategory.toLowerCase()) : true) &&
            (selectedGender ? product.genre?.toLowerCase().includes(selectedGender.toLowerCase()) : true) &&
            (selectedBrand ? product.brand?.toLowerCase().includes(selectedBrand.toLowerCase()) : true)
        );
        setFilteredProducts(filtered);
    }, [searchTerm, mistralProducts, selectedCategory, selectedGender, selectedBrand]);

    //categorias
    // Crear categorías a partir de la primera palabra del atributo 'type' de cada producto
    const categories = Array.from(
        new Set(
            mistralProducts
                .map(product => product.type?.split(' ')[0]?.toLowerCase())
                .filter(Boolean)
        )
    );

    const loadCategoriesOptions = () => {
        return categories.map((category, index) => (
            <option key={index} value={category}>
                {firstLetterUppercase(category)}
            </option>
        ));
    };

    const brands = Array.from(
        new Set(
            mistralProducts
                .map(product => product.brand?.toLowerCase())
                .filter(Boolean)
        )
    );

    const loadBrandsOptions = () => {
        return brands.map((brand, index) => (
            <option key={index} value={brand}>
                {firstLetterUppercase(brand)}
            </option>
        ));
    };

    const firstLetterUppercase = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    // Función para navegar a la página del producto
    const goToProductPage = (productId) => {
        navigateTo(`/product/${productId}`);
    };

    const generateProductDivs = () => {
        return filteredProducts.map(product => (
            <div 
                key={product.id} 
                className="product-card"
                onClick={() => goToProductPage(product.id)}
                style={{ cursor: 'pointer' }} // Indicar que es clickeable
            >
                <img src={placeholder} alt={product.name} />
                <h3>{product.name}</h3>
                <span>${product.price}</span>
            </div>
        ));
    };

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
            <div className='catalog-filter'>
                <div className='filter-container'>
                <div className='filter'>
                    <label htmlFor="buscar">Buscar:</label>
                    <input type="text" id="buscar" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Buscar productos..." />
                </div>
                <div className='filter'>
                    <label htmlFor="genero">Género:</label>
                    <select value={selectedGender} id="genero" onChange={(e) => setSelectedGender(e.target.value)}>
                        <option value="">Todos</option>
                        <option value="hombre">Masculino</option>
                        <option value="dama">Femenino</option>
                    </select>
                </div>
                <div className='filter'>
                    <label htmlFor="categoria">Categoría:</label>
                    <select value={selectedCategory} id="categoria" onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value="">Todas</option>
                        {loadCategoriesOptions()}
                    </select>
                </div>
                <div className='filter'>
                    <label htmlFor="marca">Marca:</label>
                    <select value={selectedBrand} id="marca" onChange={(e) => setSelectedBrand(e.target.value)}>
                        <option value="">Todas</option>
                        {loadBrandsOptions()}
                    </select>
                </div>
                </div>
            </div>
            <div className="product-grid">
                {generateProductDivs()}
            </div>
        </div>
        </div>
    );
};
               
export { CatalogPage };