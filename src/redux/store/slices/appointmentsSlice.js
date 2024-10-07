import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const appointmentsAction = createAsyncThunk(
    "appointments",
    async ({ url, doctorId, status }, { rejectWithValue }) => {
        try {
            const response = await axios.get(url, {
                params: { doctor: doctorId, status }
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const appointmentSlice = createSlice({
    name: "appointments",
    initialState: {
        patientAppointments: null,
        isLoading: false,
        error: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(appointmentsAction.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(appointmentsAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.patientAppointments = action.payload;
            })
            .addCase(appointmentsAction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default appointmentSlice.reducer;

