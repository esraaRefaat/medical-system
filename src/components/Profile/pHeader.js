import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ProfileHeader = ({ doctor }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoSection}>
        <Image
          source={
            doctor.profilePicture
              ? { uri: doctor.profilePicture }
              : require("../../assets/docotrAvatar.jpg")
          }
          style={styles.avatar}
        />

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{doctor.name}</Text>
          <Text style={styles.speciality}>
            {doctor.drSpecialties || "Speciality not specified"}
          </Text>
          <Text style={styles.fees}>
            Fees:{" "}
            <Text style={styles.bold}>EGP {doctor.drSessionFees || "N/A"}</Text>
          </Text>

          <View style={styles.workingHoursContainer}>
            <Text style={styles.workingHoursTitle}>🕒 Working Hours</Text>
            <Text style={styles.workingHoursText}>
              {doctor.drWorkingHours || "Not available"}
            </Text>
          </View>
        </View>
      </View>

      {/* Bio Section */}
      <View style={styles.bioContainer}>
        <Text style={styles.bioTitle}>📄 Bio</Text>
        <Text style={styles.bioText}>{doctor.drBio || "No bio available"}</Text>
      </View>

      {/* Location Section */}
      <View style={styles.locationContainer}>
        <Text style={styles.locationTitle}>📍 Location</Text>
        <Text style={styles.locationText}>
          {doctor.drLocation || "Location not provided"}
        </Text>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginVertical: 7,
    gap: 10,
  },
  infoSection: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    padding: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  speciality: {
    fontSize: 16,
    color: "#666",
    marginVertical: 4,
  },
  fees: {
    fontSize: 14,
    color: "#333",
    marginTop: 4,
  },
  bold: {
    fontWeight: "bold", // Bold style for the fees amount
  },
  workingHoursContainer: {
    marginTop: 10,
  },
  workingHoursTitle: {
    fontSize: 14,
    color: "#888",
  },
  workingHoursText: {
    fontSize: 14,
    color: "#333",
    marginTop: 2,
  },
  bioContainer: {
    backgroundColor: "#fff",
    padding: 20,
    gap: 5,
  },
  bioTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bioText: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  locationContainer: {
    backgroundColor: "#fff",
    padding: 20,
    gap: 5,
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  locationText: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
});

