import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Text, ViewComponent } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../../components/home/Header";
import News from "../../components/home/news";
import MidPatient from "../../components/home/midPatient";
import MidDoc from "../../components/home/midDoctor";
import { useSelector } from "react-redux";
import MidAdmin from "../../components/home/midAdmin";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const [userData, setuserData] = useState("");
  const fetchUserData = async () => {
    try {
      const res = await axios.get(
        `https://medical-system-server.onrender.com/api/v1/users/${user.user_id}`
      );
      setuserData(res.data.document[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // Use useFocusEffect to fetch data when the screen is focused
  useFocusEffect(
    useCallback(() => {
      fetchUserData();  // Fetch data when screen is focused
    }, [user])  // Depend on the user
  );

  return (
    <SafeAreaView style={[{ flex: 1 }]}>
      <HomeHeader user={userData}></HomeHeader>
      {user.user_role == "patient" && <MidPatient></MidPatient>}
      {user.user_role == "doctor" && <MidDoc user={userData}></MidDoc>}
      {user.user_role == "admin" && <MidAdmin></MidAdmin>}

      <News></News>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;

