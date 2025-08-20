import React, { use } from 'react';
import { useState, useEffect } from 'react'
import {HomePage} from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import RegistrarsePage from './components/RegistrarsePage/RegistrarsePage';
import { ProfilePage } from './components/ProfilePage/ProfilePage';
import {CatalogPage} from './components/CatalogPage/CatalogPage';
import {ProductPage} from './components/ProductPage/ProductPage';
import {CanjePage} from './components/CanjePage/CanjePage';
import AdministratorPage from './components/AdministratorPage/AdministratorPage';
import PromotionCreatePage from './components/AdministratorPage/promotions/PromotionCreate/PromotionCreate';
import PromotionUpdatePage from './components/AdministratorPage/promotions/PromotionUpdate/PromotionUpdate';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AdminRoute from './components/AdminRoute/AdminRoute';
import AdminSellerRoute from './components/AdminSellerRoute/AdminSellerRoute';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import RedemptionsReports from './components/AdministratorPage/reports/RedemptionsReports/RedemptionsReports';

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
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                
                {/* Rutas protegidas para usuarios logueados */}
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <ProfilePage />
                        </PrivateRoute>
                    }
                />    

                {/* Ruta protegida solo para vendedores y administradores */}
                <Route
                    path="/canje"
                    element={
                        <AdminSellerRoute>
                            <CanjePage />
                        </AdminSellerRoute>
                    }
                />

                {/* Ruta protegida solo para administradores */}
                <Route
                    path="/admin"
                    element={
                        <AdminRoute>
                            <AdministratorPage />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/promotions/crear-promocion"
                    element={
                        <AdminRoute>
                            <PromotionCreatePage />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/promotions/update/:id"
                    element={
                        <AdminRoute>
                            <PromotionUpdatePage />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/reportes/canjes"
                    element={
                        <AdminRoute>
                            <RedemptionsReports />
                        </AdminRoute>
                    }
                />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </div>
    );
}

export default App;