import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import forgetPasswordReducer from "./slices/forgetpassword";
import PasswordReducer from "./slices/setPassword";

const store = configureStore({
  reducer: {
    auth: authReducer,
    authForgetPasswerd: forgetPasswordReducer,
    authPasswerd: PasswordReducer,
  },
});
export default store;

