import {
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import routes from "../../src/utils/routes";
import CompleteProfile from "./CompleteDoc";
import VerificationPending from "./PendingDoc";
import axios from "axios";

const MidDoc = ({ user }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {user.verifiedDoctor == "false" && <CompleteProfile></CompleteProfile>}
      {user.verifiedDoctor == "pending" && (
        <VerificationPending></VerificationPending>
      )}
      {user.verifiedDoctor == "true" && (
        <View style={styles.rowcontainer}>
          <Pressable
            style={[styles.card, { backgroundColor: "#EFE4FF" }]}
            onPress={() => {
              navigation.navigate(routes.CreateAppointment);
            }}
          >
            <Image
              source={require("../../src/assets/home/icon1.png")}
              style={{ marginBottom: 15 }}
            ></Image>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              Set your Appointments
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "400", color: "#71717A" }}>
              Set your availability as you see fit
            </Text>
          </Pressable>
          <Pressable
            style={[styles.card, { backgroundColor: "#EDFCF2" }]}
            onPress={() => {
              navigation.navigate(routes.appointmentstoday);
            }}
          >
            <Image
              source={require("../../src/assets/home/icon2.png")}
              style={{ marginBottom: 15 }}
            ></Image>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              View Upcoming Appointments
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "400", color: "#71717A" }}>
              see your upcoming appointments
            </Text>
          </Pressable>
        </View>
      )}
      {user.verifiedDoctor == "true" && (
        <View style={styles.rowcontainer}>
          <Pressable
            style={[styles.card, { backgroundColor: "#FEF6EE" }]}
            onPress={() => {
              navigation.navigate(routes.onboarding);
            }}
          >
            <Image
              source={require("../../src/assets/home/Icon3.png")}
              style={{ marginBottom: 15 }}
            ></Image>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              Patient Medical Record
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "400", color: "#71717A" }}>
              view your patient's medical records
            </Text>
          </Pressable>
          <Pressable
            style={[styles.card, { backgroundColor: "#FEF3F2" }]}
            onPress={() => {
              navigation.navigate(routes.onboarding);
            }}
          >
            <Image
              source={require("../../src/assets/home/icon4.png")}
              style={{ marginBottom: 15 }}
            ></Image>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              Today's Appointments: 0
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "400", color: "#71717A" }}>
              check your today's appointments
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default MidDoc;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: "space-between",
    gap: 16,
  },
  rowcontainer: {
    flexDirection: "row",
    flex: 1,
    gap: 16,
  },

  card: {
    borderRadius: 12,
    padding: 16,
    gap: 5,
    flex: 1,
  },
});

