import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import HomeHeader from "../../components/specialities/HeaderSpec";
import Spec from "../../components/specialities/spec";
import { BACK_Arrow } from "../assets/svgIcons.js";
import CustomText from "../components/customText.js";
import { useNavigation } from "@react-navigation/native";
import routes from "../utils/routes.js";

const specs = [
  { name: "Dentistry", icon: "🦷", drSpecialties: "dentistry" },
  {
    name: "Ear, Nose and Throat",
    icon: "👂",
    drSpecialties: "ear-nose-and-throat",
  },
  { name: "Psychiatry", icon: "🧠", drSpecialties: "psychiatry" },
  {
    name: "Pediatrics And New Born",
    icon: "👶",
    drSpecialties: "pediatrics-and-new-born",
  },
  { name: "Orthopedics", icon: "🦴", drSpecialties: "orthopedics" },
  {
    name: "Gynaecology And Infertility",
    icon: "🤰",
    drSpecialties: "gynaecology-and-infertility",
  },
  {
    name: "Cardiology And Vascular Disease",
    icon: "❤️",
    drSpecialties: "cardiology-and-vascular-disease",
  },
  { name: "Internal Medicine", icon: "🩺", drSpecialties: "internal-medicine" },
  {
    name: "Allergy And Immunology",
    icon: "🤧",
    drSpecialties: "allergy-and-immunology",
  },
  {
    name: "Andrology And Male Infertility",
    icon: "👨‍⚕️",
    drSpecialties: "andrology-and-male-infertility",
  },
  { name: "Dermatology", icon: "🧴", drSpecialties: "dermatology" },
  { name: "Audiology", icon: "👂", drSpecialties: "audiology" },
  { name: "Neurology", icon: "🧠", drSpecialties: "neurology" },
  {
    name: "Cardiology And Thoracic Surgery",
    icon: "❤️‍🩹",
    drSpecialties: "cardiology-and-thoracic-surgery",
  },
  {
    name: "Chest And Respiratory",
    icon: "🫁",
    drSpecialties: "chest-and-respiratory",
  },
  {
    name: "Diabetes And Endocrinology",
    icon: "💉",
    drSpecialties: "diabetes-and-endocrinology",
  },
  {
    name: "Diagnostic Radiology",
    icon: "📡",
    drSpecialties: "diagnostic-radiology",
  },
  {
    name: "Dietitian And Nutrition",
    icon: "🍎",
    drSpecialties: "dietitian-and-nutrition",
  },
  { name: "Family Medicine", icon: "🏥", drSpecialties: "family-medicine" },
  {
    name: "Gastroenterology And Endoscopy",
    icon: "🦠",
    drSpecialties: "gastroenterology-and-endoscopy",
  },
  { name: "Geriatrics", icon: "👵", drSpecialties: "geriatrics" },
  { name: "Hematology", icon: "🩸", drSpecialties: "hematology" },
  { name: "Hepatology", icon: "🫀", drSpecialties: "hepatology" },
  {
    name: "Interventional Radiology",
    icon: "📡",
    drSpecialties: "interventional-radiology",
  },
  {
    name: "Ivf And Infertility",
    icon: "🧬",
    drSpecialties: "ivf-and-infertility",
  },
  { name: "Laboratories", icon: "🧪", drSpecialties: "laboratories" },
  { name: "Nephrology", icon: "🩺", drSpecialties: "nephrology" },
  { name: "Neurosurgery", icon: "🧠", drSpecialties: "neurosurgery" },
  {
    name: "Obesity And Laparoscopic Surgery",
    icon: "⚖️",
    drSpecialties: "obesity-and-laparoscopic-surgery",
  },
  { name: "Oncology", icon: "🎗️", drSpecialties: "oncology" },
  { name: "Oncology Surgery", icon: "🗡️", drSpecialties: "oncology-surgery" },
  { name: "Ophthalmology", icon: "👁️", drSpecialties: "ophthalmology" },
];

const Specialities = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <HomeHeader></HomeHeader>
      <ScrollView style={styles.scrollview}>
        {specs.map(({ name, icon, drSpecialties }) => {
          return (
            <Spec
              name={name}
              icon={icon}
              key={name}
              drSpecialties={drSpecialties}
            ></Spec>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Specialities;

const styles = StyleSheet.create({
  scrollview: { paddingBottom: 200 },
  headerContainer: {
    justifyContent: "center", // Center the content horizontally
    alignItems: "center", // Center the content vertically
    position: "relative", // Relative positioning for arrow to stay at the left
    width: "100%", // Ensure the container takes full width
    paddingHorizontal: 20, // Add padding if necessary
  },
  backbuttontouch: {
    position: "absolute", // Position the back button absolutely
    left: 20, // Place it on the left side of the screen
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center", // Ensure the text is centered
  },
});

