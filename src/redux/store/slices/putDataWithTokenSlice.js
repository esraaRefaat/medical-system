import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for authentication with token, userData, and url
export const putDataWithTokenAction = createAsyncThunk(
  "putDataHelper",
  async ({ token, userData, url }, { rejectWithValue }) => {
    try {
      const response = await axios.put(url, userData, {
        headers: {
          token: token,  // Set the token in the request headers

        },
      });
      return response.data; // Return the response data if the request is successful
    } catch (error) {
      // Log the error for debugging
      console.error("Error in putWithTokenAction:", error);
      // Return the error response or a default message
      return rejectWithValue(error.response ? error.response.data : { message: "Network error occurred" });
    }
  }
);

const putDataWithTokenSlice = createSlice({
  name: "putDataHelper",
  initialState: {
    user: null,
    isLoading: false,
    error: null, // Change to null for better error handling
  },
  extraReducers: (builder) => {
    builder
      .addCase(putDataWithTokenAction.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Reset error on new request
      })
      .addCase(putDataWithTokenAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload; // Save the user data on success
      })
      .addCase(putDataWithTokenAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Set error payload
      });
  },
});

export default putDataWithTokenSlice.reducer;
