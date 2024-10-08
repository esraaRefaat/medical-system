import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileHeader from "../../components/Profile/pHeader";
import RatingComponent from "../../components/Profile/rating";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import routes from "../../utils/routes";
import { useSelector } from "react-redux";
const doctorData1 = {
  name: "Dr. Hady",
  speciality: "Cardiologist",
  fees: "150",
  workingHours: "Mon-Fri: 9 AM - 5 PM",
  bio: "Dr. Patricia Ahoy specialist in Ear, Nose & Throat, and work in RS. Hermina Malang. It is a long established fact that a reader will be distracted by the readable content.",
  location:
    "Jl. Tangkuban Perahu No.31-33, Kauman, Kec. Klojen, Kota Malang, Jawa Timur 65119",
};
const reviews = [
  {
    profilePicture: "https://example.com/images/user1.jpg",
    name: "Alice Smith",
    rating: 4,
    date: "2024-10-01",
    review:
      "Dr. John was very attentive and answered all my questions. Highly recommend!",
  },
  {
    profilePicture: "https://example.com/images/user2.jpg",
    name: "Bob Johnson",
    rating: 5,
    date: "2024-09-25",
    review: "Best experience I've had! Dr. John is a true professional.",
  },
  {
    profilePicture: "https://example.com/images/user3.jpg",
    name: "Cathy Lee",
    rating: 3,
    date: "2024-09-20",
    review: "The wait time was a bit long, but the consultation was thorough.",
  },
  {
    profilePicture: null,
    name: "David Brown",
    rating: 2,
    date: "2024-09-15",
    review: "I was not satisfied with my visit. I expected more clarity.",
  },
  {
    profilePicture: "https://example.com/images/user4.jpg",
    name: "Eva Green",
    rating: 5,
    date: "2024-09-10",
    review: "Amazing doctor! Very caring and knowledgeable.",
  },
  {
    profilePicture: "https://example.com/images/user5.jpg",
    name: "Frank White",
    rating: 4,
    date: "2024-09-05",
    review: "Great experience overall. Would definitely recommend to others.",
  },
];

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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {doctorData ? (
          <>
            <ProfileHeader doctor={doctorData} />
            <RatingComponent reviews={reviews} />
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
      {doctorData?.role === "patient" && (
        <Pressable style={styles.bookButton} onPress={handleBookAppointment}>
          <Text style={styles.buttonText}>Book Appointment</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes SafeAreaView take up the entire screen
  },
  scrollViewContent: {
    flexGrow: 1, // Ensures the ScrollView content takes up all available space
    paddingBottom: 16,
  },
  bookButton: {
    backgroundColor: "#254EDB",
    padding: 16,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

