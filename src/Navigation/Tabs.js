import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import routes from "../utils/routes";
import About from "../screens/About";
import Onboarding from "../screens/onboarding/onboarding";
import { useSelector } from "react-redux";
import Profile from "../screens/profile/profile";

const tab = createBottomTabNavigator();

const Tabs = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <tab.Navigator screenOptions={{ headerShown: false }}>
      <tab.Screen name={routes.home} component={Home} />
      {user && <tab.Screen name={routes.Profile} component={Profile} />}

      {/* <tab.Screen name={routes.about} component={About} /> */}
      {/* <tab.Screen name={routes.onboarding} component={Onboarding} /> */}
    </tab.Navigator>
  );
};

export default Tabs;

