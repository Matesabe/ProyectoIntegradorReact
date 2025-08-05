import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ProductPage.css';

const ProductPage = () => {
    const { id } = useParams(); // Obtener el ID del producto de la URL
    const navigate = useNavigate();
    const { mistralProducts } = useSelector(state => state.productsSlice);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Buscar el producto por ID
        const foundProduct = mistralProducts.find(p => p.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
        } else {
            // Si no se encuentra el producto, redirigir al catálogo
            navigate('/catalog');
        }
    }, [id, mistralProducts, navigate]);

    if (!product) {
        return <div>Cargando producto...</div>;
    }

    return (
        <div className="product-page">
            <header className="product-header">
                <button onClick={() => navigate('/catalog')} className="back-button">
                    ← Volver al catálogo
                </button>
            </header>
            
            <div className="product-details">
                <div className="product-image">
                    <img src={product.image || '/src/img/Catalog/placeholder.jpg'} alt={product.name} />
                </div>
                
                <div className="product-info">
                    <h1>{product.name}</h1>
                    <p className="product-price">${product.price}</p>
                    <p className="product-brand">Marca: {product.brand}</p>
                    <p className="product-category">Categoría: {product.type}</p>
                    <p className="product-gender">Género: {product.genre}</p>
                    
                    {product.description && (
                        <div className="product-description">
                            <h3>Descripción</h3>
                            <p>{product.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export { ProductPage };

