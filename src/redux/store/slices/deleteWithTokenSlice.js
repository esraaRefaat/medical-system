import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for authentication with token, userData, and url
export const deleteWithTokenAction = createAsyncThunk(
  "deleteHelper",
  async ({ token, url }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(url, {
        headers: {
          token: token,  // Set the token in the request headers
        },
      });
      return response.data; // Return the response data if the request is successful
    } catch (error) {
      // Log the error for debugging
      console.error("Error in deleteWithTokenAction:", error);
      // Return the error response or a default message
      return rejectWithValue(error.response ? error.response.data : { message: "Network error occurred" });
    }
  }
);

const deleteWithTokenSlice = createSlice({
  name: "deleteHelper",
  initialState: {
    user: null,
    isLoading: false,
    error: null, // Change to null for better error handling
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteWithTokenAction.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Reset error on new request
      })
      .addCase(deleteWithTokenAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload; // Save the user data on success
      })
      .addCase(deleteWithTokenAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Set error payload
      });
  },
});

export default deleteWithTokenSlice.reducer;
