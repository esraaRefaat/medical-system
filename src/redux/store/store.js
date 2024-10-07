import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import forgetPasswordReducer from "./slices/forgetpassword";
import PasswordReducer from "./slices/setPassword";
import putWithTokenReducer from "./slices/putWithTokenSlice.js";
import MedicalRecordReducer from "./slices/getMedicalRecordSlice.js"
import AppointmentsReducer from "./slices/appointmentsSlice.js"


const store = configureStore({
    reducer: {
        auth: authReducer,
        authForgetPasswerd: forgetPasswordReducer,
        authPasswerd: PasswordReducer,
        putWithToken: putWithTokenReducer,
        getmedicalrecord: MedicalRecordReducer,
        appointments: AppointmentsReducer
    }
})

export default store;

