import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getWarehouses } from "../../services/api";


export const fetchWarehouses = createAsyncThunk(
  'warehouses/fetchWarehouses',
  async (_, { rejectWithValue }) => {
    try {
      const warehouses = await getWarehouses();
      return warehouses;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const warehousesSlice = createSlice({
  name: "warehouses",
  initialState: {
    warehouses: [],
    loading: false,
    error: null,
    lastFetch: Date.now(),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWarehouses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWarehouses.fulfilled, (state, action) => {
        state.loading = false;
        state.warehouses = action.payload;
      })
      .addCase(fetchWarehouses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default warehousesSlice.reducer;