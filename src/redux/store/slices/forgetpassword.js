import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendEmailAction = createAsyncThunk(
  "authForgetPasswerd",
  async ({ userData, url }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(url, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authForgetPasswerdSlice = createSlice({
  name: "authForgetPasswerd",
  initialState: {
    message:'',
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendEmailAction.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(sendEmailAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
            })
      .addCase(sendEmailAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authForgetPasswerdSlice.reducer;


