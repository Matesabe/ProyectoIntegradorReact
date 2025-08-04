import React from 'react';
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { onLogin } from "../../app/slices/userSlice";
import { registrarse, login } from "../../services/api";
import "./RegistrarsePage.css";
import sargaLogo from "../../img/sargaLogo.png";
import {BlinkBlur} from "react-loading-indicators"

const RegistrarsePage = () => {
const checkUser = useSelector((state) => state.userSlice.userData);
const dispatcher = useDispatch();

const inputUserNameRef = useRef();
const inputUserEmailRef = useRef();
const inputPassRef = useRef();
const inputUserCiRef = useRef();
const inputPhoneRef = useRef();

const [btnDisabled, setBtnDisabled] = useState(false);
const [mensajeError, setMensajeError] = useState(null);
const navigateTo = useNavigate();
const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadingElement = document.querySelector(".loading-container");
        if (loading) {
            loadingElement.style.display = "flex";
        } else {
            loadingElement.style.display = "none";
        }
    }, [loading]);

    useEffect(() => {
        if (checkUser) {
            navigateTo("/");
        }
    }, [checkUser])//autologin -> lleva al dashboard


    const _onHandleClick = async (event) => {
        event.preventDefault();//evitar envío formulario
        try {
            setBtnDisabled(true);
            setLoading(true);
            setMensajeError(null);
            const response = await registrarse(
                inputUserNameRef.current.value,
                inputPassRef.current.value,
                inputUserEmailRef.current.value,
                inputUserCiRef.current.value,
                inputPhoneRef.current.value
            );
            const responseLogin = await login(
                inputUserEmailRef.current.value,
                inputPassRef.current.value
            );
            setLoading(false);
            setBtnDisabled(false);
            dispatcher(onLogin(responseLogin));
            alert("Login exitoso");
            navigateTo("/");
        } catch (error) {
            setMensajeError(error);
            setLoading(false);
            setBtnDisabled(false);
        }
        
    };

    const _onHandleChange = () => {
        if (
            inputUserNameRef.current.value.length > 0 &&
            inputUserEmailRef.current.value.length > 0 &&
            inputPassRef.current.value.length > 0
            && inputUserCiRef.current.value.length > 0 &&
            inputPhoneRef.current.value.length > 0
        ) {
            setBtnDisabled(false);
        } else {
            setBtnDisabled(true);
        }
    };
    
    return (
        <div className="register-container">
            <Link to="/">
            <img
                src={sargaLogo}
                alt="Logo"
                className="register-logo"
                style={{ display: "block", margin: "0 auto 20px", width: "80px", height: "80px" }}
            />
            </Link>
            <h1 className="text-center register-title">Registro de Usuario</h1>
            <p className="text-center register-description">
                ¡Registrate para obtener beneficios exclusivos!
            </p>
            <form  className='register-form'>
                {/** Alert here */}
                <div className="form-group">
                    <label htmlFor="usuario" className='register-label'>Nombre de usuario</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control register-input"
                            id="usuario"
                            placeholder="fulanito123"
                            ref={inputUserNameRef}
                            onChange={_onHandleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="usuario" className='register-label'>Cédula de identidad</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control register-input"
                            id="ci"
                            placeholder="12345678"
                            ref={inputUserCiRef}
                            onChange={_onHandleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="usuario" className='register-label'>Email</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control register-input"
                            id="email"
                            placeholder="fulanito@mail.com"
                            ref={inputUserEmailRef}
                            onChange={_onHandleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className='register-label'>Password</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fas fa-lock"></i>
                            </span>
                        </div>
                        <input
                            type="password"
                            className="form-control register-input"
                            id="password"
                            placeholder="Password"
                            ref={inputPassRef}
                            onChange={_onHandleChange}
                        />
                        <div className="input-group-append">
                            <span className="input-group-text">
                                <i className="fas fa-eye"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="phone" className='register-label'>Teléfono</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fas fa-lock"></i>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control register-input"
                            id="phone"
                            placeholder="09XXXXXXXX"
                            ref={inputPhoneRef}
                            onChange={_onHandleChange}
                        />
                        <div className="input-group-append">
                            <span className="input-group-text">
                                <i className="fas fa-eye"></i>
                            </span>
                        </div>
                    </div>
                </div>
                {/* <div className="form-group">
                    <label htmlFor="pais">País</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fas fa-lock"></i>
                            </span>
                        </div>
                        <select name="pais" id="pais" ref={inputPaisRef}>
                            {paisesOption ? paisesOption.map((p) => (
                                <option key={p.id} value={p.id}>
                                    {p.name}
                                </option>
                            )) : <option>Cargando países...</option>}
                        </select>
                        <div className="input-group-append">
                            <span className="input-group-text">
                                <i className="fas fa-eye"></i>
                            </span>
                        </div>
                    </div>
                </div> */}
                <button
                    type="submit"
                    className={`btn btn-primary btn-block register-button`}
                    onClick={_onHandleClick}
                    disabled={btnDisabled}
                >
                    Registrarse
                </button>
                <div className="loading-container">
                    <BlinkBlur className="loading" color={["#1f3a66", "#2a508e", "#3666b5", "#5280cc"]} size="small" text="Registrando..." textColor="" />
                </div>
                {mensajeError ? <p className="alert alert-warning">{mensajeError}</p> : <p />}
            </form>
            <p className="text-center mt-4">
            ¿Ya tenés cuenta? <Link to="/login" className="login-link">¡Iniciá sesión!</Link>
            </p>
        </div>
    );
};

export default RegistrarsePage;