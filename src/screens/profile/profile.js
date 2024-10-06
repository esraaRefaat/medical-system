import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileHeader from "../../components/Profile/pHeader";
import RatingComponent from "../../components/Profile/rating";
const doctorData = {
  name: "Dr. Omar Yasser",
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
    profilePicture: null, // No profile picture
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

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ProfileHeader doctor={doctorData}></ProfileHeader>
        <RatingComponent reviews={reviews}></RatingComponent>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {},
});

