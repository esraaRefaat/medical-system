import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import routes from "../../src/utils/routes";

const CompleteProfile = () => {
  const navigation = useNavigation();

  const handleCompleteProfile = () => {
    navigation.navigate(routes.doctorInfoUpdate);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../src/assets/5.png")}
        path
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Complete Your Profile</Text>
      <Text style={styles.subtitle}>
        You're almost there! Upload your documents and complete your profile to
        start using the platform.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleCompleteProfile}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f2f2f2",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#7f8c8d",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#254EDB",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default CompleteProfile;

