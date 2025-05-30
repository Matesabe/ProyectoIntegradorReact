import { login, check} from "../../services/api";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onLogin } from "../../app/slices/userSlice";
import sargaLogo from "../../img/sargaLogo.png";
import "./LoginPage.css";

const LoginPage = () => {
    const userData = useSelector((state) => state.userSlice.userData);
    const navigateTo = useNavigate();
    const dispatcher = useDispatch();

    const inputUserEmailRef = useRef();
    const inputUserPasswordRef = useRef();
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [mensajeError, setMensajeError] = useState(null);

    useEffect(() => {
        if (userData && userData.token) {
            navigateTo("/estas-logueado");
        }
    }, [userData, navigateTo]);

    const [mensajeCheck, setMensajeCheck] = useState(null);
    const _checkAPI = async () => {
        try{
            const response = await check();
            setMensajeCheck("API está funcionando correctamente");
        }catch (error) {
            setMensajeCheck("API no está funcionando correctamente: " + error.message);
        }
    };

    const _onHandleClick = async (event) => {
        event.preventDefault();
        const userEmail = inputUserEmailRef.current.value;
        const userPassword = inputUserPasswordRef.current.value;

        try {
            const response = await login(userEmail, userPassword);
            localStorage.setItem("userData", JSON.stringify(response));
            dispatcher(onLogin(response));
            alert("Login exitoso");
            navigateTo("/estas-logueado");
        } catch (error) {
            setMensajeError(error.message || "Error al iniciar sesión");
        }
    };

    const _onHandleChange = () => {
        if (
            inputUserEmailRef.current.value.length > 0 &&
            inputUserPasswordRef.current.value.length > 0
        ) {
            setBtnDisabled(false);
        } else {
            setBtnDisabled(true);
        }
    };

    return (
        <div className="login-container">
            <div className="text-center logo-container">
                <figure className="img-fluid">
                    <img src={sargaLogo} width="90" alt="Logo" />
                </figure>
            </div>
            <h1 className="text-center">Login</h1>
            <p className="text-center">
                Ingresá con tu mail y contraseña.
            </p>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="email@address.com"
                            ref={inputUserEmailRef}
                            onChange={_onHandleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fas fa-lock"></i>
                            </span>
                        </div>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            ref={inputUserPasswordRef}
                            onChange={_onHandleChange}
                        />
                        <div className="input-group-append">
                            <span className="input-group-text">
                                <i className="fas fa-eye"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className={`btn btn-primary btn-block`}
                    onClick={_onHandleClick}
                    disabled={btnDisabled}
                >
                    Login
                </button>
                {mensajeError ? <p className="alert alert-warning">{mensajeError}</p> : <p />}
            </form>
            <p className="text-center mt-4">
                ¿No tenés cuenta? <Link to="/register">¡Registrate!</Link>
            </p>
            <button
                type="submit"
                    className={`btn btn-primary btn-block`}
                    onClick={_checkAPI}
                
                >
                Comprobar API
            </button>
            {mensajeCheck ? <p className="alert alert-info">{mensajeCheck}</p> : <p />}
        </div>
    );
}

export default LoginPage;