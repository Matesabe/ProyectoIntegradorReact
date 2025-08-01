import { createSlice } from "@reduxjs/toolkit";

// Cargar datos iniciales desde localStorage
const loadUserFromStorage = () => {
    try {
        const userData = localStorage.getItem('userData');
        return userData ? JSON.parse(userData) : null;
    } catch (error) {
        console.error('Error loading user data from localStorage:', error);
        return null;
    }
};

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: loadUserFromStorage(), // Cargar desde localStorage al inicializar
    },
    reducers: {
        onLogin: (state, action) => {
            const { payload } = action;
            state.userData = payload;
            // Guardar en localStorage
            localStorage.setItem('userData', JSON.stringify(payload));
        },
        onLogout: (state) => {
            state.userData = null;
            // Limpiar localStorage
            localStorage.removeItem('userData');
        },
    },
});

export const { onLogin, onLogout } = userSlice.actions;

export default userSlice.reducer;