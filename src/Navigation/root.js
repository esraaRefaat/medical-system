import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import About from "../screens/About";
import routes from "../utils/routes";
import Tabs from "./Tabs";


const stack = createNativeStackNavigator();
const Root = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name={routes.tabs} component={Tabs}></stack.Screen>
      {/* <stack.Screen
        name={routes.home}
        component={Home}
      ></stack.Screen>
      <stack.Screen name={routes.about} component={About}></stack.Screen> */}
    </stack.Navigator>
  );
};



export default Root;
