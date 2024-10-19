import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileHeader from "../../components/Profile/pHeader";
import RatingComponent from "../../components/Profile/rating";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import routes from "../../utils/routes";
import { useSelector } from "react-redux";
import CustomButton from "../../components/customButton.js";
import { PRIMARY } from "../../styles/colors.js";
// const doctorData1 = {
//   name: "Dr. Hady",
//   speciality: "Cardiologist",
//   fees: "150",
//   workingHours: "Mon-Fri: 9 AM - 5 PM",
//   bio: "Dr. Patricia Ahoy specialist in Ear, Nose & Throat, and work in RS. Hermina Malang. It is a long established fact that a reader will be distracted by the readable content.",
//   location:
//     "Jl. Tangkuban Perahu No.31-33, Kauman, Kec. Klojen, Kota Malang, Jawa Timur 65119",
// };

const Profile = ({ route }) => {
  const { user } = useSelector((state) => state.auth);

  const id = route?.params?.id || user.user_id;
  const [doctorData, setDoctorData] = useState(null);
  const navigation = useNavigation();

  const fetchDoctor = async () => {
    try {
      let endpoint = `users/${id}`;
      const res = await axios.get(endpoint);
      setDoctorData(res.data.document[0]);
    } catch (error) {
      console.error("Error fetching doctor data:", error);
    }
  };

  useEffect(() => {
    fetchDoctor();
  }, [id]);

  const handleBookAppointment = () => {
    navigation.navigate(routes.confirmAppointment, { doctorId: id });
  };
  const handleLogIn = () => {
    navigation.navigate(routes.login);
  };

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {doctorData ? (
          <>
            <ProfileHeader doctor={doctorData} />
            <RatingComponent reviews={doctorData.reviewsReceived} />
          </>
        ) : (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </ScrollView>
      {user?.user_role === "patient" && (
        <CustomButton
          text={"Book Appointment"}
          containerStyle={styles.bookButton}
          // disabled={!isValid}
          onPress={handleBookAppointment}
        />
      )}

      {!user && (
        <CustomButton
          text={"Log In To Book Appointment"}
          containerStyle={styles.bookButton}
          // disabled={!isValid}
          onPress={handleLogIn}
        />
      )}
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  bookButton: {
    backgroundColor: PRIMARY,
    alignSelf: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    paddingBottom: 30,
    paddingHorizontal: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});

