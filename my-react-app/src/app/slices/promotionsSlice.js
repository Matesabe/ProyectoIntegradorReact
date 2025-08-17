import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPromotions } from "../../services/api";

export const fetchPromotions = createAsyncThunk(
  'promotions/fetchPromotions',
  async (token, { rejectWithValue }) => {
    try {
      const promotions = await getPromotions(token);
      return promotions;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const promotionsSlice = createSlice({
  name: "promotions",
  initialState: {
    promotions: [],
    loading: false,
    error: null,
    lastFetch: null
  },
  reducers: {
    setPromotions: (state, action) => {
      state.promotions = action.payload;
      state.lastFetch = Date.now();
    },
    clearPromotions: (state) => {
      state.promotions = [];
      state.lastFetch = null;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPromotions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPromotions.fulfilled, (state, action) => {
        state.loading = false;
        state.promotions = action.payload;
        state.lastFetch = Date.now();
      })
      .addCase(fetchPromotions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { setPromotions, clearPromotions, clearError } = promotionsSlice.actions;
export default promotionsSlice.reducer;