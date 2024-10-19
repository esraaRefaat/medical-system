import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const AppointmentCard = ({ appointment }) => {
  const { date, time, status, patient } = appointment;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image
          source={{ uri: patient.profilePicture }}
          style={styles.profilePicture}
        />
        <View style={styles.patientInfo}>
          <Text style={styles.patientName}>{patient.name}</Text>
          <Text style={styles.patientEmail}>{patient.email}</Text>
        </View>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailItem}>
          <Text style={styles.label}>Date:</Text>{" "}
          {new Date(date).toLocaleDateString()}
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.label}>Time:</Text> {time}
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.label}>Status:</Text> {status}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  patientInfo: {
    flex: 1,
  },
  patientName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  patientEmail: {
    fontSize: 14,
    color: "gray",
  },
  details: {
    marginTop: 8,
  },
  detailItem: {
    fontSize: 16,
    marginVertical: 4,
  },
  label: {
    fontWeight: "bold",
  },
});

export default AppointmentCard;

