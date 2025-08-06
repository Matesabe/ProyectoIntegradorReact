import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import productsSlice from "./slices/productsSlice";
import warehousesSlice from "./slices/warehousesSlice";

export const store = configureStore({
  reducer: {
    userSlice: userSlice,
    productsSlice: productsSlice,
    warehousesSlice: warehousesSlice,
  },
});