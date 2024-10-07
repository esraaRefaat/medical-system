import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeHeader from "../../components/specialities/HeaderSpec";
import Spec from "../../components/specialities/spec";

const specs = [
  { name: "dentistry", icon: "🦷", drSpecialties: "dentistry" },
  {
    name: "ear, nose and throat",
    icon: "👂",
    drSpecialties: "ear-nose-and-throat",
  },
  { name: "psychiatry", icon: "🧠", drSpecialties: "psychiatry" },
  {
    name: "pediatrics and new born",
    icon: "👶",
    drSpecialties: "pediatrics-and-new-born",
  },
  { name: "orthopedics", icon: "🦴", drSpecialties: "orthopedics" },
  {
    name: "gynaecology and infertility",
    icon: "🤰",
    drSpecialties: "gynaecology-and-infertility",
  },
  {
    name: "cardiology and vascular disease",
    icon: "❤️",
    drSpecialties: "cardiology-and-vascular-disease",
  },
  { name: "internal medicine", icon: "🩺", drSpecialties: "internal-medicine" },
  {
    name: "allergy and immunology",
    icon: "🤧",
    drSpecialties: "allergy-and-immunology",
  },
  {
    name: "andrology and male infertility",
    icon: "👨‍⚕️",
    drSpecialties: "andrology-and-male-infertility",
  },
  { name: "dermatology", icon: "🧴", drSpecialties: "dermatology" },
  { name: "audiology", icon: "👂", drSpecialties: "audiology" },
  { name: "neurology", icon: "🧠", drSpecialties: "neurology" },
  {
    name: "cardiology and thoracic surgery",
    icon: "❤️‍🩹",
    drSpecialties: "cardiology-and-thoracic-surgery",
  },
  {
    name: "chest and respiratory",
    icon: "🫁",
    drSpecialties: "chest-and-respiratory",
  },
  {
    name: "diabetes and endocrinology",
    icon: "💉",
    drSpecialties: "diabetes-and-endocrinology",
  },
  {
    name: "diagnostic radiology",
    icon: "📡",
    drSpecialties: "diagnostic-radiology",
  },
  {
    name: "dietitian and nutrition",
    icon: "🍎",
    drSpecialties: "dietitian-and-nutrition",
  },
  { name: "family medicine", icon: "🏥", drSpecialties: "family-medicine" },
  {
    name: "gastroenterology and endoscopy",
    icon: "🦠",
    drSpecialties: "gastroenterology-and-endoscopy",
  },
  { name: "geriatrics", icon: "👵", drSpecialties: "geriatrics" },
  { name: "hematology", icon: "🩸", drSpecialties: "hematology" },
  { name: "hepatology", icon: "🫀", drSpecialties: "hepatology" },
  {
    name: "interventional radiology",
    icon: "📡",
    drSpecialties: "interventional-radiology",
  },
  {
    name: "ivf and infertility",
    icon: "🧬",
    drSpecialties: "ivf-and-infertility",
  },
  { name: "laboratories", icon: "🧪", drSpecialties: "laboratories" },
  { name: "nephrology", icon: "🩺", drSpecialties: "nephrology" },
  { name: "neurosurgery", icon: "🧠", drSpecialties: "neurosurgery" },
  {
    name: "obesity and laparoscopic surgery",
    icon: "⚖️",
    drSpecialties: "obesity-and-laparoscopic-surgery",
  },
  { name: "oncology", icon: "🎗️", drSpecialties: "oncology" },
  { name: "oncology surgery", icon: "🗡️", drSpecialties: "oncology-surgery" },
  { name: "ophthalmology", icon: "👁️", drSpecialties: "ophthalmology" },
];

const Specialities = () => {
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
});

