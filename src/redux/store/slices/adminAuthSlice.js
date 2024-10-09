import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const adminAuthAction = createAsyncThunk(
  "adminAuth",
  async ({ userData, url }, { rejectWithValue }) => {
    try {
      const response = await axios.post(url, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState: {
    admin: null,
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminAuthAction.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(adminAuthAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.admin = action.payload;
      })
      .addCase(adminAuthAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default adminAuthSlice.reducer;

