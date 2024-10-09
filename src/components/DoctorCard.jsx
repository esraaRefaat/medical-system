import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import DoctorAvatar from "./DoctorAvatar";
import Star from "./Icons/Star";
import { useNavigation } from "@react-navigation/native";
import routes from "../utils/routes";

export default function DoctorCard({
  avatar,
  fullName,
  specialization,
  fees,
  id,
}) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.cardRow}
      onPress={() => {
        console.log(id);
        navigation.navigate(routes.Profile, { id: id });
      }}
    >
      <View style={styles.avatarSection}>
        <DoctorAvatar avatar={avatar} dimensions={60} />
      </View>
      <View style={styles.infoColumn}>
        <Text style={styles.boldText}>Dr. {fullName}</Text>
        <Text style={styles.grayText}>{specialization}</Text>
        <Text style={styles.boldText}>{fees} $</Text>
      </View>

    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardRow: {
    flexDirection: "row",
    gap: 16,
    paddingHorizontal: 20,
  },
  avatarSection: {},
  infoColumn: {
    flexDirection: "column",
    gap: 8,
    flexGrow: 1,
  },
  rating: {
    flexDirection: "row",
    gap: 8,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  grayText: {
    fontWeight: "light",
    color: "gray",
  },
});

