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

  useEffect(() => {
    let isMounted = true;
    const fetchProducts = async () => {
      if (Array.isArray(promotion.promotionProducts) && promotion.promotionProducts.length > 0) {
        const fetchedProducts = await getProducts(promotion.promotionProducts);
        if (isMounted) {
          setProducts(fetchedProducts);
          setLoading(false);
        }
      } else {
        setProducts([]);
        setLoading(false);
      }
    };
    fetchProducts();
    return () => { isMounted = false; };
  }, [promotion.promotionProducts]);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

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
        <label htmlFor="productCodes">
          Productos (Códigos separados por coma):
        </label>
        <input
          type="text"
          id="productCodes"
          placeholder="Ej: ABC123,DEF456"
          value={
            Array.isArray(promotion.promotionProducts) &&
            promotion.promotionProducts.length > 0
              ? products.map((p) => p.productCode).join(",")
              : ""
          }
          onChange={(e) => {
            const ids = e.target.value
              .split(",")
              .map((id) => id.trim())
              .filter((id) => id !== "");
            setPromotion({
              ...promotion,
              promotionProducts: ids.map((id) => ({
                productId: Number(id),
                purchasePromotionProductsId: promotion.id,
              })),
            });
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
  return <ProductsForm promotion={promotion} setPromotion={setPromotion} action={action} />;
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
