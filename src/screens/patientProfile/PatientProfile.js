import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import routes from "../../utils/routes";
import moment from "moment";
import axios from "axios";
import { Feather } from "@expo/vector-icons"; // Icons for better UI

const PatientProfile = () => {
  const navigation = useNavigation();
  const { user } = useSelector((state) => state.auth);
  const [userData, setuserData] = useState("");

  const handleSignOut = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: routes.login }],
    });
  };

  const fetchUser = async () => {
    try {
      const res = await axios.get(
        `https://medical-system-server.onrender.com/api/v1/users/${user.user_id}`
      );
      setuserData(res.data.document[0]);
      console.log(res.data.document[0]);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [user]);

  return (
    <View style={styles.container}>
      {/* Cover Photo */}
      <Image
        source={require("../../assets/cover1.png")}
        style={styles.coverPhoto}
        resizeMode="cover"
      />

      {/* Profile Picture */}
      <View style={styles.profilePicContainer}>
        <Image
          source={{
            uri: userData?.profilePicture || "../../assets/default.png",
          }}
          style={styles.profilePic}
          resizeMode="cover"
        />
      </View>

      {/* User Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{userData?.name || "Doctor Name"}</Text>

        {/* Additional User Info */}
        <View style={styles.infoRow}>
          <Feather name="mail" size={20} color="#7f8c8d" style={styles.icon} />
          <Text style={styles.email}>
            {userData?.email || "doctor@example.com"}
          </Text>
        </View>

        {/* <View style={styles.infoRow}>
          <Feather name="phone" size={20} color="#7f8c8d" style={styles.icon} />
          <Text style={styles.phone}>{userData?.phone || "+123 456 789"}</Text>
        </View>

        <View style={styles.infoRow}>
          <Feather
            name="map-pin"
            size={20}
            color="#7f8c8d"
            style={styles.icon}
          />
          <Text style={styles.address}>
            {userData?.address || "1234 Medical St, City, Country"}
          </Text>
        </View> */}

        {/* Joined Date (Now with icon and same size) */}
        <View style={styles.infoRow}>
          <Feather
            name="calendar"
            size={20}
            color="#7f8c8d"
            style={styles.icon}
          />
          <Text style={styles.joinedDate}>
            Joined: {moment(userData?.createdAt).format("MMMM DD, YYYY")}
          </Text>
        </View>
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
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  icon: {
    marginRight: 10,
  },
  email: {
    fontSize: 16,
    color: "#7f8c8d",
  },
  phone: {
    fontSize: 16,
    color: "#7f8c8d",
  },
  address: {
    fontSize: 16,
    color: "#7f8c8d",
  },
  joinedDate: {
    fontSize: 16,
    color: "#7f8c8d",
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    paddingBottom: 30,
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

