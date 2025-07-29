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

export {login, check, registrarse};