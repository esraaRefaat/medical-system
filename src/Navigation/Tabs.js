import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import routes from "../utils/routes";
import About from "../screens/About";
import Onboarding from "../screens/onboarding/onboarding";

const tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <tab.Navigator screenOptions={{ headerShown: false }}>
      <tab.Screen name={routes.home} component={Home} />
      {/* <tab.Screen name={routes.about} component={About} />
      <tab.Screen name={routes.onboarding} component={Onboarding} /> */}
    </tab.Navigator>
  );
};

export default Tabs;

