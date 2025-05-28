import React, { use } from 'react';
import ExampleComponent from './components/ExampleComponent';
import { useState, useEffect } from 'react'
import LoginPage from './components/LoginPage/LoginPage';
import RegistrarsePage from './components/RegistrarsePage/RegistrarsePage';
import EstasLogueadoPage from './components/EstasLogueado/EstasLogueadoPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function App() {
    const userData = useSelector((state) => state.userSlice.userData);
    const navigateTo = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (
            userData &&
            userData.token &&
            (location.pathname === '/login' || location.pathname === '/registrarse')
        ) {
            navigateTo('/estas-logueado');
        }
    }, [userData, location, navigateTo]);

    return (
        <div className='App'>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registrarse" element={<RegistrarsePage />} />
                <Route
                    path="/estas-logueado"
                    element={
                        <PrivateRoute>
                            <EstasLogueadoPage />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </div>
    );
}

export default App;