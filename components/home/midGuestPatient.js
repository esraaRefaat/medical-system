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
const MidGuestPatient = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
<Pressable
        style={styles.card}
        onPress={() => {
          navigation.navigate(routes.login);
        }}
      >
        <Image
          source={require("../../src/assets/home/icon1.png")}
          style={{ marginBottom: 20 }}
        ></Image>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>
          Log In / Sign Up
        </Text>
        <Text style={{ fontSize: 13, fontWeight: "400", color: "#71717A" }}>
        Log In Now To Enjoy all the App Features
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
        <Text style={{ fontSize: 16, fontWeight: "500" }}>
          Browse by speciality
        </Text>
        <Text style={{ fontSize: 13, fontWeight: "400", color: "#71717A" }}>
          find your doctor
        </Text>
      </Pressable>

    </View>
  );
};

export default MidGuestPatient;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: "center",
  },
  card: {
    borderRadius: 12,
    backgroundColor: "#EFE4FF",
    padding: 16,
    gap: 5,
    marginBottom: 20
    // flex: 1,
  },
});

