import React from 'react';
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onLogin } from "../../app/slices/userSlice";
import { registrarse } from "../../services/api";
import "./RegistrarsePage.css";



const RegistrarsePage = () => {
    const checkUser = localStorage.getItem("userData");
const dispatcher = useDispatch();

const inputUserNameRef = useRef();
const inputUserEmailRef = useRef();
const inputPassRef = useRef();
const inputUserCiRef = useRef();
const inputPhoneRef = useRef();

const [btnDisabled, setBtnDisabled] = useState(true);
const [mensajeError, setMensajeError] = useState(null);
const navigateTo = useNavigate();

    useEffect(() => {
        if (checkUser) {
            navigateTo("/estas-logueado");
        }
    }, [checkUser])//autologin -> lleva al dashboard


    const _onHandleClick = async (event) => {
        event.preventDefault();//evitar envío formulario
        try {
            const response = await registrarse(
                inputUserNameRef.current.value,
                inputPassRef.current.value,
                inputUserEmailRef.current.value,
                inputUserCiRef.current.value,
            );
            dispatcher(onLogin(response)); // Login automático post registro   
        } catch (error) {
            setMensajeError(error);
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
            <h1 className="text-center">Register</h1>
            <p className="text-center">
                Registrarse en la app.
            </p>
            <form>
                {/** Alert here */}
                <div className="form-group">
                    <label htmlFor="usuario">Nombre de usuario</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            id="usuario"
                            placeholder="fulanito123"
                            ref={inputUserNameRef}
                            onChange={_onHandleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="usuario">Cédula de identidad</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            id="ci"
                            placeholder="12345678"
                            ref={inputUserCiRef}
                            onChange={_onHandleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="usuario">Email</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="fulanito@mail.com"
                            ref={inputUserEmailRef}
                            onChange={_onHandleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
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
                    <label htmlFor="password">Teléfono</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fas fa-lock"></i>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder=""
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
                    className={`btn btn-primary btn-block`}
                    onClick={_onHandleClick}
                    disabled={btnDisabled}
                >
                    Registrarse
                </button>
                {mensajeError ? <p className="alert alert-warning">{mensajeError}</p> : <p />}
            </form>
        </div>
    );
};

export default RegistrarsePage;