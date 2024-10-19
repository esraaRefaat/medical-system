import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BACK_Arrow } from "../../assets/svgIcons";
import CustomText from "../../components/customText";
import { GREY, PRIMARY, TEXT_GREY } from "../../styles/colors";

export default function RecordDetailsScreen({ route, navigation }) {
  const { record } = route.params;

  return (
    <SafeAreaView style={modernStyles.container} edges={["bottom"]}>
      <View style={modernStyles.card}>
        <CustomText
          text="Date"
          color={GREY}
          fontFamily="bold"
          size={14}
          style={modernStyles.sectionLabel}
        />
        <CustomText
          text={new Date(record.appointmentDate * 1000).toLocaleDateString()}
          color={TEXT_GREY}
          fontFamily="medium"
          size={14}
          style={modernStyles.infoText}
        />

        {/* Doctor Notes */}
        <CustomText
          text="Doctor Notes"
          color={GREY}
          fontFamily="bold"
          size={14}
          style={modernStyles.sectionLabel}
        />
        <CustomText
          text={record.doctorNotes}
          color={TEXT_GREY}
          fontFamily="medium"
          size={14}
          style={modernStyles.infoText}
        />

        {/* Diagnosis */}
        <CustomText
          text="Diagnosis"
          color={GREY}
          fontFamily="bold"
          size={14}
          style={modernStyles.sectionLabel}
        />
        <CustomText
          text={record.diagnosis}
          color={TEXT_GREY}
          fontFamily="medium"
          size={14}
          style={modernStyles.infoText}
        />

        {/* Prescriptions */}
        <CustomText
          text="Prescriptions"
          color={GREY}
          fontFamily="bold"
          size={14}
          style={modernStyles.sectionLabel}
        />
        <CustomText
          text={record.prescriptions}
          color={TEXT_GREY}
          fontFamily="medium"
          size={14}
          style={modernStyles.infoText}
        />

        {/* Follow-Up Plan */}
        <CustomText
          text="Follow-Up Plan"
          color={GREY}
          fontFamily="bold"
          size={14}
          style={modernStyles.sectionLabel}
        />
        <CustomText
          text={record.followUpPlan}
          color={TEXT_GREY}
          fontFamily="medium"
          size={14}
          style={modernStyles.infoText}
        />
      </View>
    </SafeAreaView>
  );
}

const modernStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5", // Light grey background for a modern look
  },
  card: {
    margin: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 15, // Rounded corners for a modern feel
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // Adds depth to the card
  },
  title: {
    marginBottom: 15,
    textAlign: "center",
  },
  sectionLabel: {
    marginTop: 15,
    marginBottom: 5,
  },
  infoText: {
    marginBottom: 10,
  },
});

