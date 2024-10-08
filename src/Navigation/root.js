import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import About from "../screens/About";
import routes from "../utils/routes";
import Tabs from "./Tabs";
import Onboarding from "../screens/onboarding/onboarding";
import Splash from "../screens/Splash/Splash";
import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import SignUpView from "../screens/Auth/SignUp/SignUpView";
import LoginView from "../screens/Auth/Login/loginView";
import ForgotPasswordView from "../screens/Auth/ForgotPassword/ForgotPasswordView";
import NewPasswordView from "../screens/Auth/NewPassword/NewPasswordView";
import Specialities from "../screens/specialities";
import MedicalRecords from "../screens/MedicalRecords/MedicalRecords";
import ConfirmAppointment from "../screens/Appoinments/ConfirmAppointment";
import AppointmentSuccess from "../screens/Appoinments/AppointmentSuccess";
import FindDoctor from "../screens/FindDoctor/FindDoctor";
import AddRecordScreen from "../screens/AddNewRecord/NewRecordScreen";
import RecordDetailsScreen from "../screens/RecordDetails/RecordDetailsScreen";
import DoctorInfoUpdateView from "../screens/DoctorInfoUpdate/DoctorInfoUpdate.js";
import Profile from "../screens/profile/profile";
import AppointmentsToday from "../screens/AppointmentsToday/AppointmentsToday.js";
import AllUsersList from "../screens/AdminUsersLists/allUsersList.js";

const stack = createNativeStackNavigator();
const Root = () => {
  return (
    <stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Splash"
    >
      <stack.Screen name={routes.splash} component={Splash} />
      <stack.Screen name={routes.welcome} component={WelcomeScreen} />
      <stack.Screen name={routes.onboarding} component={Onboarding} />
      <stack.Screen name={routes.signup} component={SignUpView} />
      <stack.Screen name={routes.login} component={LoginView} />
      <stack.Screen
        name={routes.forgotPassword}
        component={ForgotPasswordView}
      />
      <stack.Screen name={routes.specialities} component={Specialities} />
      <stack.Screen name={routes.newpassword} component={NewPasswordView} />
      <stack.Screen name={routes.mainapp} component={Tabs} />
      <stack.Screen name={routes.medicalrecords} component={MedicalRecords} />
      <stack.Screen
        name={routes.confirmAppointment}
        component={ConfirmAppointment}
      />
      <stack.Screen
        name={routes.appointmentSuccess}
        component={AppointmentSuccess}
      />
      <stack.Screen name={routes.findDoctor} component={FindDoctor} />
      <stack.Screen name={routes.addrecordscreen} component={AddRecordScreen} />
      <stack.Screen
        name={routes.recorddetails}
        component={RecordDetailsScreen}
      />
      <stack.Screen
        name={routes.doctorInfoUpdate}
        component={DoctorInfoUpdateView}
      />
      <stack.Screen name={routes.Profile} component={Profile} />
      <stack.Screen name={routes.appointmentstoday} component={AppointmentsToday} />
      <stack.Screen name={routes.alluserslist} component={AllUsersList} />


    </stack.Navigator>
  );
};

export default Root;

