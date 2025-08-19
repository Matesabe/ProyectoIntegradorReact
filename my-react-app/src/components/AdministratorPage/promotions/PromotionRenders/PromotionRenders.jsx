import React, { useState, useEffect } from "react";
import { getProductByCode, getProductById } from "../../../../services/api";

const getProducts = async (promotionProducts) => {
  try {
    const products = await Promise.all(
      promotionProducts.map((p) => getProductById(p.productId))
    );
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const renderAmountForm = (promotion, setPromotion, action) => {
  return (
    <form onSubmit={(e) => action(e, promotion)}>
      <div className="form-group">
        <label htmlFor="description">Descripción:</label>
        <input
          type="text"
          id="description"
          value={promotion.description || ""}
          onChange={(e) =>
            setPromotion({ ...promotion, description: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Monto por punto:</label>
        <input
          type="number"
          id="amount"
          value={promotion.amountPerPoint || ""}
          onChange={(e) =>
            setPromotion({ ...promotion, amountPerPoint: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="isActive">Habilitada:</label>
        <input
          type="checkbox"
          id="isActive"
          checked={promotion.isActive || false}
          onChange={(e) =>
            setPromotion({ ...promotion, isActive: e.target.checked })
          }
        />
      </div>
      <button type="submit">Actualizar Promoción</button>
    </form>
  );
};

const renderDateForm = (promotion, setPromotion, action) => {
  return (
    <form onSubmit={(e) => action(e, promotion)}>
      <div className="form-group">
        <label htmlFor="description">Descripción:</label>
        <input
          type="text"
          id="description"
          value={promotion.description || ""}
          onChange={(e) =>
            setPromotion({ ...promotion, description: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="startDate">Fecha de Inicio:</label>
        <input
          type="date"
          id="startDate"
          value={promotion.promotionDateStart || ""}
          onChange={(e) =>
            setPromotion({ ...promotion, promotionDateStart: e.target.value })
          }
        />
        <label htmlFor="endDate">Fecha de Fin:</label>
        <input
          type="date"
          id="endDate"
          value={promotion.promotionDateEnd || ""}
          onChange={(e) =>
            setPromotion({ ...promotion, promotionDateEnd: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="points">Puntos:</label>
        <input
          type="number"
          id="points"
          value={promotion.pointsPerDate || ""}
          onChange={(e) =>
            setPromotion({ ...promotion, pointsPerDate: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="isActive">Habilitada:</label>
        <input
          type="checkbox"
          id="isActive"
          checked={promotion.isActive || false}
          onChange={(e) =>
            setPromotion({ ...promotion, isActive: e.target.checked })
          }
        />
      </div>
      <button type="submit">Actualizar Promoción</button>
    </form>
  );
};

const ProductsForm = ({ promotion, setPromotion, action }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productsCode, setProductsCode] = useState([]);

  //  Función asíncrona para generar productos de promoción
  const generatePromotionProducts = async () => {
    console.log("Generating promotion products for codes:", productsCode);

    try {
      const promotionProducts = await Promise.all(
        productsCode
          .filter((code) => code.trim() !== "") // Filtrar códigos vacíos
          .map(async (code) => {
            const product = await getProductByCode(code.trim());
            return {
              ProductId: product.id
            };
          })
      );

      return promotionProducts;
    } catch (error) {
      console.error("Error generando productos de promoción:", error);
      return [];
    }
  };

  //  Función asíncrona para ensamblar la promoción
  const assemblePromotion = async () => {
    const promotionProducts = await generatePromotionProducts();

    const updatedPromotion = {
      ...promotion,
      promotionProducts: promotionProducts,
    };

    setPromotion(updatedPromotion);
    return updatedPromotion;
  };

  //  Manejar el submit correctamente
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Esperar a que se actualice la promoción
      const updatedPromotion = await assemblePromotion();

      // Ejecutar la acción con la promoción actualizada
      action(e, updatedPromotion);
    } catch (error) {
      console.error("Error en el submit:", error);
    }
  };

  useEffect(() => {
    let isMounted = true;
    const fetchProducts = async () => {
      if (
        Array.isArray(promotion.promotionProducts) &&
        promotion.promotionProducts.length > 0
      ) {
        const fetchedProducts = await getProducts(promotion.promotionProducts);
        if (isMounted) {
          setProducts(fetchedProducts);
          setProductsCode(fetchedProducts.map((p) => p.productCode));
          setLoading(false);
        }
      } else {
        setProducts([]);
        setLoading(false);
      }
    };
    fetchProducts();
    return () => {
      isMounted = false;
    };
  }, [promotion.promotionProducts]);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="description">Descripción:</label>
        <input
          type="text"
          id="description"
          value={promotion.description || ""}
          onChange={(e) =>
            setPromotion({ ...promotion, description: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="productCodes">
          Productos (Códigos separados por coma):
        </label>
        <input
          type="text"
          id="productCodes"
          placeholder="Ej: ABC123,DEF456"
          value={productsCode.join(",") || ""}
          onChange={(e) => {
            const codes = e.target.value.split(",").map((code) => code.trim());
            setProductsCode(codes);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pointsPerProducts">Puntos:</label>
        <input
          type="number"
          id="pointsPerProducts"
          value={promotion.pointsPerProducts || ""}
          onChange={(e) =>
            setPromotion({ ...promotion, pointsPerProducts: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="isActive">Habilitada:</label>
        <input
          type="checkbox"
          id="isActive"
          checked={promotion.isActive || false}
          onChange={(e) =>
            setPromotion({ ...promotion, isActive: e.target.checked })
          }
        />
      </div>
      <button type="submit">Actualizar Promoción</button>
    </form>
  );
};

const renderProductsForm = (promotion, setPromotion, action) => {
  return (
    <ProductsForm
      promotion={promotion}
      setPromotion={setPromotion}
      action={action}
    />
  );
};

const renderRecurrenceForm = (promotion, setPromotion, action) => {
  return (
    <form onSubmit={(e) => action(e, promotion)}>
      <div className="form-group">
        <label htmlFor="description">Descripción:</label>
        <input
          type="text"
          id="description"
          value={promotion.description || ""}
          onChange={(e) =>
            setPromotion({ ...promotion, description: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="recurrenceValue">Tope de Recurrencia:</label>
        <input
          type="number"
          id="recurrenceValue"
          value={promotion.recurrenceValue || ""}
          onChange={(e) =>
            setPromotion({ ...promotion, recurrenceValue: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="pointsPerRecurrence">Puntos por Recurrencia:</label>
        <input
          type="number"
          id="pointsPerRecurrence"
          value={promotion.pointsPerRecurrence || ""}
          onChange={(e) =>
            setPromotion({ ...promotion, pointsPerRecurrence: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="isActive">Habilitada:</label>
        <input
          type="checkbox"
          id="isActive"
          checked={promotion.isActive || false}
          onChange={(e) =>
            setPromotion({ ...promotion, isActive: e.target.checked })
          }
        />
      </div>
      <button type="submit">Actualizar Promoción</button>
    </form>
  );
};

export {
  renderAmountForm,
  renderDateForm,
  renderProductsForm,
  renderRecurrenceForm,
};
