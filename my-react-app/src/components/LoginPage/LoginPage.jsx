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
            navigateTo("/");
        }
    }, [userData, navigateTo]);

    const [mensajeCheck, setMensajeCheck] = useState(null);

    const _onHandleClick = async (event) => {
        event.preventDefault();
        const userEmail = inputUserEmailRef.current.value;
        const userPassword = inputUserPasswordRef.current.value;

        try {
            const response = await login(userEmail, userPassword);
            dispatcher(onLogin(response));
            alert("Login exitoso");
            navigateTo("/");
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
            <Link to="/">
            <img
                src={sargaLogo}
                alt="Logo"
                className="register-logo"
                style={{ display: "block", margin: "0 auto 20px", width: "80px", height: "80px" }}
            />
            </Link>
            <h1 className="text-center">Login</h1>
            <p className="text-center">
                Ingresá con tu mail y contraseña.
            </p>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="email" className="login-label">Email</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                        <input
                            type="email"
                            className="form-control login-input"
                            id="email"
                            placeholder="email@address.com"
                            ref={inputUserEmailRef}
                            onChange={_onHandleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="login-label">Contraseña</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fas fa-lock"></i>
                            </span>
                        </div>
                        <input
                            type="password"
                            className="form-control login-input"
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
                    className={`btn btn-primary btn-block login-button`}
                    onClick={_onHandleClick}
                    disabled={btnDisabled}
                >
                    Login
                </button>
                {mensajeError ? <p className="alert alert-warning">{mensajeError}</p> : <p />}
            </form>
            <p className="text-center mt-4">
                ¿No tenés cuenta? <Link to="/register" className="login-link">¡Registrate!</Link>
            </p>
            <div className="text-center mt-3"></div>
            {mensajeCheck ? <p className="alert alert-info">{mensajeCheck}</p> : <p />}
        </div>
    );
}

export default LoginPage;