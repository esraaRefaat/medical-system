import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const newRecordAction = createAsyncThunk(
    "newrecord",
    async ({
        doctorNotes,
        diagnosis,
        prescriptions,
        followUpPlan,
        id,
        url,
        token }, { rejectWithValue }) => {
        try {
            const response = await axios.get(url, {
                patientId: id,
                appointmentDate: Math.floor(Date.now() / 1000),
                doctorNotes: doctorNotes,
                diagnosis: diagnosis,
                prescriptions: prescriptions,
                followUpPlan: followUpPlan
            },
                {
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

const newRecordSlice = createSlice({
    name: "newrecord",
    initialState: {
        msg: null,
        isLoading: false,
        error: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(newRecordAction.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(newRecordAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.msg = action.payload;
            })
            .addCase(newRecordAction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default newRecordSlice.reducer;

