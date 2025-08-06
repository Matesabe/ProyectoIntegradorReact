import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import sargaLogo from "../../img/sargaLogo.png";
import userIcon from "../../img/Home/user_icon.png";
import placeholder from "../../img/Catalog/placeholder.jpg";
import { getSubProducts, getWarehouses } from "../../services/api";
import { fetchWarehouses } from "../../app/slices/warehousesSlice";
import { onLogout } from "../../app/slices/userSlice";
import "./ProductPage.css";

const ProductPage = () => {
  const { id } = useParams(); // Obtener el ID del producto de la URL
  const navigate = useNavigate();

  const { mistralProducts } = useSelector((state) => state.productsSlice);
  const [product, setProduct] = useState(null);
  const [subProducts, setSubProducts] = useState([]);
  const [filteredSubProducts, setFilteredSubProducts] = useState([]);
  const [colores, setColores] = useState([]);
  const [tallas, setTallas] = useState([]);

  const { warehouses, loading, error, lastFetch } = useSelector(
    (state) => state.warehousesSlice
  );

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userSlice.userData);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const userLoged = userData && userData.token;

  useEffect(() => {
    // Buscar el producto por ID
    const foundProduct = mistralProducts.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // Si no se encuentra el producto, redirigir al catálogo
      navigate("/catalog");
    }
  }, [id, mistralProducts, navigate]);

  const fetchSubProducts = async (productCode) => {
    try {
      const response = await getSubProducts(productCode);
      return response;
    } catch (error) {
      console.error("Error al obtener subproductos:", error);
      return Promise.reject("Error al obtener subproductos");
    }
  };

  useEffect(() => {
    if (product && product.productCode) {
      fetchSubProducts(product.productCode)
        .then((data) => {
          setSubProducts(data);
          setFilteredSubProducts(data); // Inicializar con todos los subproductos
        })
        .catch((error) => {
          console.error("Error al obtener subproductos:", error);
        });
    }
  }, [product]);

  useEffect(() => {
    if (subProducts.length > 0) {
      const uniqueColors = new Set();
      const uniqueSizes = new Set();

      // Usar filteredSubProducts si existe, sino usar todos los subProducts
      const productsToProcess =
        filteredSubProducts.length > 0 ? filteredSubProducts : subProducts;

      productsToProcess.forEach((sp) => {
        if (sp.color) uniqueColors.add(sp.color);
        if (sp.size) uniqueSizes.add(sp.size);
      });

      setColores(Array.from(uniqueColors));
      setTallas(Array.from(uniqueSizes));
    }
  }, [subProducts, filteredSubProducts]);

  //carga los almacenes
  useEffect(() => {
    // Solo cargar si no hay productos o si han pasado más de 10 minutos
    const shouldFetch =
      !warehouses.length || Date.now() - lastFetch > 10 * 60 * 1000;
    if (shouldFetch) {
      dispatch(fetchWarehouses());
    }
  }, [dispatch, warehouses.length, lastFetch]);

  const filterSubproductsByWarehouse = (warehouseId) => {
    if (warehouseId) {
      // Obtener los stocks del almacén seleccionado
      const selectedWarehouse = warehouses.find(
        (w) => w.id === parseInt(warehouseId)
      );

      if (selectedWarehouse && selectedWarehouse.stocks) {
        // Obtener los IDs de subproductos que tienen stock en este almacén
        const subProductIdsInWarehouse = selectedWarehouse.stocks
          .filter((stock) => stock.quantity > 0) // Solo productos con stock disponible
          .map((stock) => stock.subProductId);

        // Filtrar subproductos que están en este almacén
        const filtered = subProducts.filter((sp) =>
          subProductIdsInWarehouse.includes(sp.id)
        );

        setFilteredSubProducts(filtered);
      } else {
        setFilteredSubProducts([]);
      }
    } else {
      // Si no hay almacén seleccionado, mostrar todos los subproductos
      setFilteredSubProducts(subProducts);
    }
  };

  if (!product) {
    return <div>Cargando producto...</div>;
  }

  const renderNavLinks = () => {
    if (userLoged) {
      return (
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
    setIsDropdownOpen(false); // Cerrar dropdown después del logout
    navigateTo("/");
  };

  // Cerrar dropdown cuando se haga click fuera de él
  // useEffect(() => {
  //     const handleClickOutside = (event) => {
  //         if (isDropdownOpen && !event.target.closest('.user-icon')) {
  //             setIsDropdownOpen(false);
  //         }
  //     };
  //     document.addEventListener('click', handleClickOutside);
  //     return () => {
  //         document.removeEventListener('click', handleClickOutside);
  //     };
  // }, [isDropdownOpen]);

  return (
    <div className="product-page">
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
      <div className="product-header">
        <button onClick={() => navigate("/catalog")} className="back-button">
          ←
        </button>
          <div className="store-filters">
            <span className="store-filter-text">Tienda:</span>
            <select
              onChange={(e) => {
                const selectedWarehouse = e.target.value;
                filterSubproductsByWarehouse(selectedWarehouse);
              }}
              defaultValue=""
            >
              <option value="">Todas las Tiendas</option>
              {warehouses.map((warehouse) => (
                <option key={warehouse.id} value={warehouse.id}>
                  {warehouse.name}
                </option>
              ))}
            </select>
        </div>
      </div>

      <div className="product-details">
        <div className="product-image">
          <img
            src={product.image || "/src/img/Catalog/placeholder.jpg"}
            alt={product.name}
          />
        </div>

        <div className="product-info">
          <div className="product-info-main">
            <h1>{product.name}</h1>
            <p className="product-price">${product.price}</p>
            <p className="product-brand">Marca: {product.brand}</p>
            <p className="product-category">Categoría: {product.type}</p>
            <p className="product-gender">Género: {product.genre}</p>
            <p className="product-code">Código: {product.productCode}</p>

            {product.description && (
              <div className="product-description">
                <h3>Descripción</h3>
                <p>{product.description}</p>
              </div>
            )}
          </div>
          <div className="product-info-additional">
            <div className="product-colors">
              <h4>Colores Disponibles:</h4>
              <ul>
                {colores.length > 0 ? (
                  colores.map((color, index) => <li key={index}>{color}</li>)
                ) : (
                  <li>No hay colores disponibles</li>
                )}
              </ul>
            </div>
            <div className="product-sizes">
              <h4>Talles Disponibles:</h4>
              <ul>
                {tallas.length > 0 ? (
                  tallas.map((size, index) => <li key={index}>{size}</li>)
                ) : (
                  <li>No hay talles disponibles</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductPage };
