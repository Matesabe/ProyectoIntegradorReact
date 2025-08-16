import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const userData = useSelector((state) => state.userSlice.userData);
    
    // Verificar si el usuario está logueado
    const userLoged = userData && userData.token;
    
    // Verificar el rol del usuario
    const userRol = userData ? userData.userData.rol : null;
    
    // Si no está logueado, redirigir al login
    if (!userLoged) {
        return <Navigate to="/login" replace />;
    }
    
    // Si no es administrador, redirigir a la página principal o mostrar error
    if (userRol !== 'Administrator') {
        return <Navigate to="/" replace />;
    }
    
    // Si es administrador, mostrar el componente
    return children;
};

export default AdminRoute;