import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

import Home from "../screens/Home";
import About from "../screens/About";
import routes from "../utils/routes";


import Tabs from "./Tabs";
//import Drawer from "./drawer";

const stack = createNativeStackNavigator();
const Root = () => {
  return (
    <stack.Navigator>
      <stack.Screen name={routes.tabs} component={Tabs} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen
        name={routes.home}
        component={Home}
        options={{
          headerTitle: "Hoooome",
          // header:()=>null
          headerStyle: { backgroundColor: "yellow" },
          headerTintColor: "green",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 40, fontWeight: "bold" },
        }}
      ></stack.Screen>
      <stack.Screen name={routes.about} component={About}></stack.Screen>
    
    </stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Root;
