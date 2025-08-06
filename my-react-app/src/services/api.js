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

export {login, registrarse, getComprasByUserId, getMistralProducts, getSubProducts, getWarehouses};