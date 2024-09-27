import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import About from "../screens/About";
import routes from "../utils/routes";
import Tabs from "./Tabs";
import Onboarding from "../screens/onboarding/onboarding";
import Splash from "../screens/Splash/Splash";
import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import SignUpView from "../screens/Auth/SignUp/SignUpView"
import LoginView from "../screens/Auth/Login/loginView";
import ForgotPasswordView from "../screens/Auth/ForgotPassword/ForgotPasswordView";
import NewPasswordView from "../screens/Auth/NewPassword/NewPasswordView";



const stack = createNativeStackNavigator();
const Root = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
      <stack.Screen name={routes.splash} component={Splash} />
      <stack.Screen name={routes.welcome} component={WelcomeScreen} />
      <stack.Screen name={routes.onboarding} component={Onboarding} />
      <stack.Screen name={routes.signup} component={SignUpView} />
      <stack.Screen name={routes.login} component={LoginView} />
      <stack.Screen name={routes.forgotPassword} component={ForgotPasswordView} />
      <stack.Screen name={routes.newpassword} component={NewPasswordView} />
      <stack.Screen name={routes.mainapp} component={Tabs} />
    </stack.Navigator>
  );
};



export default Root;
