import React, { use } from 'react';
import ExampleComponent from './components/ExampleComponent';
import { useState, useEffect } from 'react'
import {HomePage} from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import RegistrarsePage from './components/RegistrarsePage/RegistrarsePage';
import { ProfilePage } from './components/ProfilePage/ProfilePage';
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
            (location.pathname === '/login' || location.pathname === '/register')
        ) {
            navigateTo('/');
        }
    }, [userData, location, navigateTo]);

    return (
        <div className='App'>
            <Routes>
                
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrarsePage />} />
                {/* Protected route for ProfilePage */}
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <ProfilePage />
                        </PrivateRoute>
                    }
                />    
                
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </div>
    );
}

export default App;