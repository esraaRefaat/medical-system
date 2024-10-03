import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setPasswordAction = createAsyncThunk(
  "authPasswerd",
  async ({ userData, url }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(url,
        {
          email: userData.email,
          newPassword: userData.newPassword,
          rePassword: userData.rePassword,
          otp: userData.otp
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const setPasswordSlice = createSlice({
  name: "authPasswerd",
  initialState: {
    message: '',
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(setPasswordAction.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(setPasswordAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(setPasswordAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default setPasswordSlice.reducer;


