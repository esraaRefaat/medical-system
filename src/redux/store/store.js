import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import forgetPasswordReducer from "./slices/forgetpassword";
import PasswordReducer from "./slices/setPassword";
import putWithTokenReducer from "./slices/putWithTokenSlice.js";
import putDataWithTokenReducer from "./slices/putDataWithTokenSlice.js";
import deleteWithTokenReducer from "./slices/deleteWithTokenSlice.js";
import MedicalRecordReducer from "./slices/getMedicalRecordSlice.js"
import AppointmentsReducer from "./slices/appointmentsSlice.js"


const store = configureStore({
    reducer: {
        auth: authReducer,
        authForgetPasswerd: forgetPasswordReducer,
        authPasswerd: PasswordReducer,
        putWithToken: putWithTokenReducer,
        putDataWithToken: putDataWithTokenReducer,
        getmedicalrecord: MedicalRecordReducer,
        appointments: AppointmentsReducer,
        deleteWithToken: deleteWithTokenReducer,
        getmedicalrecord: MedicalRecordReducer
    }
})

export default store;

