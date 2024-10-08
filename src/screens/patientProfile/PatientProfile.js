import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import routes from "../../utils/routes";
import moment from "moment";
import axios from "axios";

const PatientProfile = () => {
  const navigation = useNavigation();
  const { user } = useSelector((state) => state.auth);
  const [userData, setuserData] = useState("");
  // const id = user.user_id;

  const handleSignOut = () => {
    navigation.navigate(routes.login);
  };
  const fetchUser = async () => {
    try {
      const res = await axios.get(
        `https://medical-system-server.onrender.com/api/v1/users/${user.user_id}`
      );
      setuserData(res.data.document[0]);
      console.log(res.data.document[0]);
    } catch (error) {
      console.error("Error fetching doctor data:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [user]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/cover1.png")}
        style={styles.coverPhoto}
        resizeMode="cover"
        image
        sour
      />

      <View style={styles.profilePicContainer}>
        <Image
          source={{ uri: userData.profilePicture }}
          style={styles.profilePic}
          resizeMode="cover"
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{userData?.name || "Doctor Name"}</Text>
        <Text style={styles.email}>
          {userData?.email || "doctor@example.com"}
        </Text>
        {/* Display Joined Date */}
        <Text style={styles.joinedDate}>
          Joined: {moment(userData?.createdAt).format("MMMM DD, YYYY")}
        </Text>
      </View>

      {/* Sign Out Button */}
      <View style={styles.bottomContainer}>
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
    top: 150,
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: "hidden",
    borderWidth: 4,
    borderColor: "#fff",
    backgroundColor: "white",
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
    marginBottom: 10,
  },
  joinedDate: {
    fontSize: 14,
    color: "#95a5a6",
    marginTop: 10,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end", // Move the button to the bottom
    width: "100%",
    paddingBottom: 30, // Adjust as needed
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#254EDB",
    paddingVertical: 12,
    width: "100%",
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
    textAlign: "center",
  },
});

export default PatientProfile;

