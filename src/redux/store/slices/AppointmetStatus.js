import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppointmetStatusAction = createAsyncThunk(
    "AppointmetStatus",
    async ({ token, url }, { rejectWithValue }) => {
        try {
            const response = await axios.put(url, {
                status: "doneAndReviewed"
            },
                {
                    headers: {
                        token: token,  

                    }
                });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const AppointmetStatusActionSlice = createSlice({
    name: "AppointmetStatus",
    initialState: {
        msg: null,
        isLoading: false,
        error: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(AppointmetStatusAction.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(AppointmetStatusAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.msg = action.payload;
            })
            .addCase(AppointmetStatusAction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default AppointmetStatusActionSlice.reducer;

