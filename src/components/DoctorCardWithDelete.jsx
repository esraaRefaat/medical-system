import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import DoctorAvatar from "./DoctorAvatar";
import Star from "./Icons/Star";
import { useNavigation } from "@react-navigation/native";
import routes from "../utils/routes";

export default function DoctorCardWithDelete({
  avatar,
  fullName,
  specialization,

  id,
  onDelete, // onDelete prop to handle the delete action
}) {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.cardRow}
      onPress={() => {
        navigation.navigate(routes.AdminUserDetails, { id: id });
      }}
    >
      <View style={styles.avatarSection}>
        <DoctorAvatar avatar={avatar} dimensions={50} /> 
      </View>
      <View style={styles.infoColumn}>
        <Text style={styles.boldText}>Dr. {fullName}</Text>
        <Text style={styles.grayText}>{specialization}</Text>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Text style={styles.deleteButtonText}>Delete</Text> 
      </TouchableOpacity>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardRow: {
    flexDirection: "row",
    gap: 12, // Reduced gap between items
    paddingHorizontal: 16, // Reduced horizontal padding
    paddingVertical: 8, // Reduced vertical padding
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  avatarSection: {},
  infoColumn: {
    flexDirection: "column",
    gap: 4, // Reduced gap in the info column
    flexGrow: 1,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 14, // Reduced font size
  },
  grayText: {
    fontWeight: "300",
    color: "gray",
    fontSize: 12, // Reduced font size
  },
  deleteButton: {
    backgroundColor: "red",
    paddingVertical: 8, // Adjust padding for less height
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14, // Adjust font size if needed
  },
});
