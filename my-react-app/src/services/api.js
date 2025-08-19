const BASE_URL = "https://sargaapi-fjhdczeyhegge3fp.eastus2-01.azurewebsites.net";

const login = async (email, password) => {
  try {
    console.log("Intentando iniciar sesión con:", email, password);
    const response = await fetch(`${BASE_URL}/api/auth`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Max-Age": "3600",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (response.status == 200) {
      return response.json();
    } if (response.status == 401) {
      return Promise.reject("Usuario y/o contraseña incorrecto");
    } else {
      return Promise.reject("Ha ocurrido un error");
    }
  } catch (error) {
    return Promise.reject("Ha ocurrido un error");
  }
};

const registrarse = async (username, password, email, ci, phone) => {
  try {
    const response = await fetch(`${BASE_URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: 0,
        ci: ci,
        name: username,
        email: email,
        password: password,
        phone: phone,
        rol: "Client"
      }),
    });

    if (response.ok) {
      console.log("Registro exitoso");
      return await response.json();
    } else if (response.status === 400) {
      const errorText = await response.text(); 
      return Promise.reject(`Error en los datos enviados: ${errorText}`);
    } else {
      return Promise.reject(`Error inesperado: ${response.status}`);
    }
  } catch (error) {
    return Promise.reject("Ha ocurrido un error en la conexión");
  }
};

const getComprasByUserId = async (userId, userToken) => {
  try {
    const response = await fetch(`${BASE_URL}/api/purchases/client/${userId}`, {
      method: "GET",
      headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${userToken}`
      }
    });

    if (response.ok) {
      console.log("Compras obtenidas exitosamente");
      return await response.json();
    } else if (response.status === 400) {
      const errorText = await response.text(); 
      return Promise.reject(`Error en los datos enviados: ${errorText}`);
    } else {
      return Promise.reject(`Error inesperado: ${response.status}`);
    }
  } catch (error) {
    return Promise.reject("Ha ocurrido un error en la conexión");
  }
}

const getMistralProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/products/brand/mistral`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Max-Age": "3600",
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      return Promise.reject("Error al obtener los productos");
    }
  } catch (error) {
    return Promise.reject("Ha ocurrido un error al obtener los productos");
  }
};

const getProductById = async (productId) => {
  try {
    const response = await fetch(`${BASE_URL}/api/products/${productId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Max-Age": "3600",
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      return Promise.reject("Error al obtener el producto");
    }
  } catch (error) {
    return Promise.reject("Ha ocurrido un error al obtener el producto");
  }
};

const getProductByCode = async (productCode) => {
  try {
    const response = await fetch(`${BASE_URL}/api/products/by-code/${productCode}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Max-Age": "3600",
      },
    });
    if (response.ok) {
      const body = await response.json();
      return body;
    } else {
      return Promise.reject("Error al obtener el producto");
    }
  } catch (error) {
    return Promise.reject("Ha ocurrido un error al obtener el producto");
  }
};

const getSubProducts = async (productCode) => {
  try {
    const response = await fetch(`${BASE_URL}/api/subproducts/by-productCode/${productCode}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Max-Age": "3600",
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      return Promise.reject("Error al obtener los subproductos");
    }
  } catch (error) {
    return Promise.reject("Ha ocurrido un error al obtener los subproductos");
  }
};

const getWarehouses = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/warehouses`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Max-Age": "3600",
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      return Promise.reject("Error al obtener los almacenes");
    }
  } catch (error) {
    return Promise.reject("Ha ocurrido un error al obtener los almacenes");
  }
};

const getUserByCi = async (ci, userToken) => {
  try {
    const response = await fetch(`${BASE_URL}/api/users/getByCi/${ci}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Max-Age": "3600",
        "Authorization": `Bearer ${userToken}`
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      return Promise.reject("Error al obtener el usuario");
    }
  } catch (error) {
    return Promise.reject("Ha ocurrido un error al obtener el usuario");
  }
};

const createRedemption = async (redemptionData, userToken) => {
  try {
    const response = await fetch(`${BASE_URL}/api/redemptions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Max-Age": "3600",
        "Authorization": `Bearer ${userToken}`
      },
      body: JSON.stringify({
        Id: 0,
        ClientId: redemptionData.clientId,
        PointsUsed: redemptionData.points
      })
    });
    if (response.ok) {
      return await response.json();
    } else {
      return Promise.reject("Error al crear el canje");
    }
  } catch (error) {
    return Promise.reject("Ha ocurrido un error al crear el canje");
  }
};

const getPromotions = async (userToken) => {
  try {
    const response = await fetch(`${BASE_URL}/api/promotions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Max-Age": "3600",
        "Authorization": `Bearer ${userToken}`
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      return Promise.reject("Error al obtener las promociones");
    }
  } catch (error) {
    return Promise.reject("Ha ocurrido un error al obtener las promociones");
  }
};

const postPromotion = async (promotionData, userToken) => {
  try {
    const response = await fetch(`${BASE_URL}/api/promotions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Max-Age": "3600",
        "Authorization": `Bearer ${userToken}`
      },
      body: JSON.stringify(promotionData)
    });
    if (response.ok) {
      return await response.json();
    } else {
      return Promise.reject("Error al crear la promoción");
    }
  } catch (error) {
    return Promise.reject("Ha ocurrido un error al crear la promoción");
  }
};

const updatePromotion = async ( promotionData, userToken) => {
  if (promotionData.type !== "Products") {
      promotionData.promotionProducts = promotionData.promotionProducts || [];
  }
  
  try {
    const response = await fetch(`${BASE_URL}/api/promotions/${promotionData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "PUT, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Max-Age": "3600",
        "Authorization": `Bearer ${userToken}`
      },
      body: JSON.stringify(promotionData)
    });
    if (response.ok) {
      return response;
    } else {
      console.error("Error al actualizar la promoción:", response.statusText);
      return Promise.reject("Error al actualizar la promoción");
    }
  } catch (error) {
    return Promise.reject("Ha ocurrido un error al actualizar la promoción");
  }
};

const getPromotionById = async (promotionId, userToken) => {
  try {
    const response = await fetch(`${BASE_URL}/api/promotions/${promotionId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Max-Age": "3600",
        "Authorization": `Bearer ${userToken}`
      }
    });
    if (response.ok) {
      return await response.json();
    } else {
      return Promise.reject("Error al obtener la promoción");
    }
  } catch (error) {
    return Promise.reject("Ha ocurrido un error al obtener la promoción");
  }
};

const deletePromotion = async (promotionId, userToken) => {
  try {
    const response = await fetch(`${BASE_URL}/api/promotions/${promotionId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Max-Age": "3600",
        "Authorization": `Bearer ${userToken}`
      }
    });
    if (response.ok) {
      return await response.json();
    } else {
      return Promise.reject("Error al eliminar la promoción");
    }
  } catch (error) {
    return Promise.reject("Ha ocurrido un error al eliminar la promoción");
  }
};

export {login, registrarse,
   getComprasByUserId, getMistralProducts, getProductById, getProductByCode, getSubProducts, getWarehouses,
   getUserByCi, createRedemption, getPromotions, postPromotion, updatePromotion, getPromotionById, deletePromotion};