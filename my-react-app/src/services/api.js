const BASE_URL = "https://sargaapi-fjhdczeyhegge3fp.eastus2-01.azurewebsites.net";

const check = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/auth`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Max-Age": "3600",
      },
    });
    if (response.status == 200) {
      return response.json();
    } else {
      return Promise.reject("No autenticado");
    }
  } catch (error) {
    return Promise.reject("No autenticado");
  }
}

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

const registrarse = async (username, password, email, ci) => {
  try {
    const response = await fetch(`${BASE_URL}/api/prueba/users`, {
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
        id: 0, // Assuming the API expects an ID, but it might be auto-generated
        ci: ci,
        name: username,
        email: email,
        password: password,
        phone: phone, // Assuming the API expects a phone field
        rol: "usuario", // Assuming the API expects a roles array
      }),
    });
    if (response.status == 200) {
      return response.json();
    } else if (response.status == 400) {
      return Promise.reject("Error en los datos enviados");
    } else {
      return Promise.reject("Ha ocurrido un error");
    }
  } catch (error) {
    return Promise.reject("Ha ocurrido un error");
  }
};

export {login, check, registrarse};