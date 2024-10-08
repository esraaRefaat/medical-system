import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { signOutAction } from "../../redux/actions/authActions";
import routes from "../../utils/routes";

const ProfilePage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const handleSignOut = () => {
    dispatch(signOutAction());
    navigation.navigate(routes.login); // Navigate to login after sign out
  };

  return (
    <View style={styles.container}>
      {/* Cover Photo */}
      <Image
        source={require("../../src/assets/cover-photo.jpg")} // Replace with your cover image
        style={styles.coverPhoto}
        resizeMode="cover"
      />

      {/* Profile Picture */}
      <View style={styles.profilePicContainer}>
        <Image
          source={require("../../src/assets/5.png")}
          style={styles.profilePic}
          resizeMode="cover"
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{user?.name || "Doctor Name"}</Text>
        <Text style={styles.email}>{user?.email || "doctor@example.com"}</Text>

        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  coverPhoto: {
    width: "100%",
    height: 200,
  },
  profilePicContainer: {
    alignSelf: "center",
    position: "absolute",
    top: 150, // Adjust based on the cover photo
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: "hidden",
    borderWidth: 4,
    borderColor: "#fff",
  },
  profilePic: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    marginTop: 80,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: "#7f8c8d",
    marginBottom: 20,
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
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default ProfilePage;

