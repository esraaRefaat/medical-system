import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
import CreateAppointment from "../screens/Appoinments/CreateAppointment";
import UpcomingAppointment from "../screens/UpcomingAppointments/UpcomingAppointment.js";
import ApproveDoctorsList from "../screens/AdminUsersLists/approveDoctorsList.js";
import AdminUserDetails from "../screens/AdminUsersLists/adminUserDetails.js";
import BookedAppointments from "../screens/BookedAppointments/BookedAppointments.js";
import SubmitRating from "../screens/Rating/SubmitRating.jsx";
import PatientProfile from "../screens/patientProfile/PatientProfile";
import AdminSignUpView from "../screens/AdminUsersLists/AdminSignUp/AdminSignUpView.js";
import PatientMedicalRecords from "../screens/MedicalRecords/PatientMedicalRecords.js";
import Home from "../screens/Home.js";
import EditProfileInfoView from "../screens/settingsScreen/editProfileInfo/EditProfileInfo.js";
import SettingScreen from "../screens/settingsScreen/settingScreen.js";
import ChangePasswordView from "../screens/settingsScreen/NewPassword/ChangePasswordView.js";
import NewFindDoctor from "../screens/NewFindDoctor/NewFindDoctor.js";

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
      <stack.Screen
        name={routes.mainapp}
        component={Tabs}
        options={{ title: "Home" }}
      />
      <stack.Screen name={routes.home} component={Home} />
      <stack.Screen
        name={routes.medicalrecords}
        component={MedicalRecords}
        options={{ title: "Records" }}
      />
      <stack.Screen
        name={routes.confirmAppointment}
        component={ConfirmAppointment}
      />
      <stack.Screen
        name={routes.appointmentSuccess}
        component={AppointmentSuccess}
      />
      <stack.Screen
        name={routes.findDoctor}
        component={FindDoctor}
        options={{ headerShown: true, title: "Find a doctor" }}
      />
      <stack.Screen name={routes.addrecordscreen} component={AddRecordScreen} />
      <stack.Screen
        name={routes.recorddetails}
        component={RecordDetailsScreen}
        options={{ headerShown: true, title: "Record Details" }}
      />
      <stack.Screen
        name={routes.doctorInfoUpdate}
        component={DoctorInfoUpdateView}
      />
      <stack.Screen
        name={routes.Profile}
        component={Profile}
        options={{ headerShown: true, title: "Profile" }}
      />
      <stack.Screen
        name={routes.appointmentstoday}
        component={AppointmentsToday}
        options={{ headerShown: true, title: "Appointments" }}
      />
      <stack.Screen
        name={routes.CreateAppointment}
        component={CreateAppointment}
      />
      <stack.Screen name={routes.alluserslist} component={AllUsersList} />
      <stack.Screen
        name={routes.UpcomingAppointment}
        component={UpcomingAppointment}
        options={{ headerShown: true, title: "Appointments" }}
      />
      <stack.Screen
        name={routes.ApproveDoctorsList}
        component={ApproveDoctorsList}
      />
      <stack.Screen
        name={routes.AdminUserDetails}
        component={AdminUserDetails}
      />
      <stack.Screen
        name={routes.BookedAppointments}
        component={BookedAppointments}
        options={{ headerShown: true, title: "Appointments" }}
      />
      <stack.Screen name={routes.rating} component={SubmitRating} />
      <stack.Screen
        name={routes.PatientProfile}
        component={PatientProfile}
      ></stack.Screen>
      <stack.Screen
        name={routes.AdminSignUpView}
        component={AdminSignUpView}
      ></stack.Screen>
      <stack.Screen
        name={routes.PatientMedicalRecords}
        component={PatientMedicalRecords}
        options={{ headerShown: true, title: "Medical Records" }}
      ></stack.Screen>
      <stack.Screen
        name={routes.EditProfileInfo}
        component={EditProfileInfoView}
      ></stack.Screen>
      <stack.Screen
        name={routes.Settings}
        component={SettingScreen}
      ></stack.Screen>
      <stack.Screen
        name={routes.ChangePasswordView}
        component={ChangePasswordView}
      ></stack.Screen>
      <stack.Screen
        name={routes.newfindDoctor}
        component={NewFindDoctor}
      ></stack.Screen>


      
    </stack.Navigator>
  );
};

export default Root;

