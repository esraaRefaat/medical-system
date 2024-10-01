import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeHeader from "../../components/specialities/HeaderSpec";
import Spec from "../../components/specialities/spec";

const specs = [
  { name: "dentistry", icon: "🦷" },
  { name: "ear, nose and throat", icon: "👂" },
  { name: "psychiatry", icon: "🧠" },
  { name: "pediatrics and new born", icon: "👶" },
  { name: "orthopedics", icon: "🦴" },
  { name: "gynaecology and infertility", icon: "🤰" },
  { name: "cardiology and vascular disease", icon: "❤️" },
  { name: "internal medicine", icon: "🩺" },
  { name: "allergy and immunology", icon: "🤧" },
  { name: "andrology and male infertility", icon: "👨‍⚕️" },
  { name: "dermatology", icon: "🧴" },
  { name: "audiology", icon: "👂" },
  { name: "neurology", icon: "🧠" },
  { name: "cardiology and thoracic surgery", icon: "❤️‍🩹" },
  { name: "chest and respiratory", icon: "🫁" },
  { name: "diabetes and endocrinology", icon: "💉" },
  { name: "diagnostic radiology", icon: "📡" },
  { name: "dietitian and nutrition", icon: "🍎" },
  { name: "family medicine", icon: "🏥" },
  { name: "gastroenterology and endoscopy", icon: "🦠" },
  { name: "geriatrics", icon: "👵" },
  { name: "hematology", icon: "🩸" },
  { name: "hepatology", icon: "🫀" },
  { name: "interventional radiology", icon: "📡" },
  { name: "ivf and infertility", icon: "🧬" },
  { name: "laboratories", icon: "🧪" },
  { name: "nephrology", icon: "🩺" },
  { name: "neurosurgery", icon: "🧠" },
  { name: "obesity and laparoscopic surgery", icon: "⚖️" },
  { name: "oncology", icon: "🎗️" },
  { name: "oncology surgery", icon: "🗡️" },
  { name: "ophthalmology", icon: "👁️" },
];

const Specialities = () => {
  return (
    <SafeAreaView>
      <HomeHeader></HomeHeader>
      <ScrollView style={styles.scrollview}>
        {specs.map(({ name, icon }) => {
          return <Spec name={name} icon={icon} key={name}></Spec>;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Specialities;

const styles = StyleSheet.create({
  scrollview: { paddingBottom: 200 },
});

