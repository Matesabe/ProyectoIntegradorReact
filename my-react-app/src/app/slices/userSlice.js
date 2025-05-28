import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: null,
    },
    reducers: {
        onLogin: (state, action) => {
            const { payload } = action;
            state.userData = payload;
        },
        onLogout: (state) => {
            state.userData = null;
            // Clear user data from localStorage
            localStorage.removeItem("userId");
            localStorage.removeItem("apiKey");
            localStorage.removeItem("userData");
        },
    },
});

export const { onLogin, onLogout,}
    = userSlice.actions;

export default userSlice.reducer;