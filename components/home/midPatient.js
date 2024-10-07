import {
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import routes from "../../src/utils/routes";
// componenet
const MidPatient = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.card}
        onPress={() => {
          navigation.navigate(routes.onboarding);
        }}
      >
        <Image
          source={require("../../src/assets/home/icon1.png")}
          style={{ marginBottom: 20 }}
        ></Image>
        <Text style={{ fontSize: 16, fontWeight: 500 }}>
          Book an Appointment
        </Text>
        <Text style={{ fontSize: 13, fontWeight: 400, color: "#71717A" }}>
          find a Doctor or specialist
        </Text>
      </Pressable>
      <Pressable
        style={[styles.card, { backgroundColor: "#EDFCF2" }]}
        onPress={() => {
          navigation.navigate(routes.specialities);
        }}
      >
        <Image
          source={require("../../src/assets/home/icon2.png")}
          style={{ marginBottom: 20 }}
        ></Image>
        <Text style={{ fontSize: 16, fontWeight: 500 }}>
          Browse by speciality
        </Text>
        <Text style={{ fontSize: 13, fontWeight: 400, color: "#71717A" }}>
          find your doctor
        </Text>
      </Pressable>
      <Pressable
        style={[styles.card, { backgroundColor: "#FEF6EE" }]}
        onPress={() => {
          navigation.navigate(routes.appointmentstoday);
        }}
      >
        <Image
          source={require("../../src/assets/home/Icon3.png")}
          style={{ marginBottom: 20 }}
        ></Image>
        <Text style={{ fontSize: 16, fontWeight: 500 }}>
          View your medical records
        </Text>
        <Text style={{ fontSize: 13, fontWeight: 400, color: "#71717A" }}>
          find a Doctor or specialist
        </Text>
      </Pressable>
    </View>
  );
};

export default MidPatient;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: "space-between",
  },
  card: {
    borderRadius: 12,
    backgroundColor: "#EFE4FF",
    padding: 16,
    gap: 5,
    // flex: 1,
  },
});

