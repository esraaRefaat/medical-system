import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'
import forgetPasswordReducer from "./slices/forgetpassword";
import PasswordReducer from "./slices/setPassword";
import putWithTokenReducer from "./slices/putWithTokenSlice.js";



const store = configureStore({
    reducer: {
        auth: authReducer,
        authForgetPasswerd: forgetPasswordReducer,
        authPasswerd: PasswordReducer,
        putWithToken: putWithTokenReducer,
    }
})
export default store;


