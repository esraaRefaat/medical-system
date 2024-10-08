import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const medicalRecordAction = createAsyncThunk(
  "getmedicalrecord",
  async ({ id, url, token }, { rejectWithValue }) => {
    try {
      const fullUrl = `${url}/${id}`;
      const response = await axios.get(fullUrl, {
        headers: {
            token: token,
            'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getMedicalRecordSlice = createSlice({
  name: "getmedicalrecord",
  initialState: {
    records: null,
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(medicalRecordAction.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(medicalRecordAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.records = action.payload;
      })
      .addCase(medicalRecordAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default getMedicalRecordSlice.reducer;

