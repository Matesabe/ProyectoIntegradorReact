import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMistralProducts } from "../../services/api";

export const fetchMistralProducts = createAsyncThunk(
  'products/fetchMistralProducts',
  async (_, { rejectWithValue }) => {
    try {
      const products = await getMistralProducts();
      return products;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    mistralProducts: [],
    loading: false,
    error: null,
    lastFetch: null
  },
  reducers: {
    clearProducts: (state) => {
      state.mistralProducts = [];
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMistralProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMistralProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.mistralProducts = action.payload;
        state.lastFetch = Date.now();
      })
      .addCase(fetchMistralProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearProducts, clearError } = productsSlice.actions;
export default productsSlice.reducer;