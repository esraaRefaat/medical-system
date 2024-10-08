import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import routes from "../utils/routes";
import About from "../screens/About";
import Onboarding from "../screens/onboarding/onboarding";
import { useSelector } from "react-redux";
import Profile from "../screens/profile/profile";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import PatientProfile from "../screens/patientProfile/PatientProfile";

const tab = createBottomTabNavigator();

const Tabs = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <tab.Navigator screenOptions={{ headerShown: false }}>
      <tab.Screen
        name={routes.home}
        component={Home}
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      {user.user_role == "doctor" && (
        <tab.Screen
          name={routes.Profile}
          component={Profile}
          options={{
            tabBarIcon: () => <Feather name="user" size={24} color="black" />,
          }}
        />
      )}
      {user.user_role !== "doctor" && (
        <tab.Screen
          name={routes.PatientProfile}
          component={PatientProfile}
          options={{
            tabBarIcon: () => <Feather name="user" size={24} color="black" />,
          }}
        />
      )}

      {/* <tab.Screen name={routes.about} component={About} /> */}
      <tab.Screen name={routes.onboarding} component={Onboarding} />
    </tab.Navigator>
  );
};

export default Tabs;

