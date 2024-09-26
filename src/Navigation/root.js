import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import About from "../screens/About";
import routes from "../utils/routes";
import Tabs from "./Tabs";
import Onboarding from "../screens/onboarding/onboarding";
import Splash from "../screens/Splash/Splash";


const stack = createNativeStackNavigator();
const Root = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
       <stack.Screen name={routes.splash} component={Splash} />
        <stack.Screen name={routes.onboarding} component={Onboarding} />
        <stack.Screen name={routes.mainapp} component={Tabs} />
    </stack.Navigator>
  );
};



export default Root;
