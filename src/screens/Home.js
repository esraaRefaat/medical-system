import React from "react";
import { StyleSheet, View, Text, ViewComponent } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../../components/home/Header";
import News from "../../components/home/news";
import MidPatient from "../../components/home/midPatient";
import MidDoc from "../../components/home/midDoctor";
import { useSelector } from "react-redux";
import MidAdmin from "../../components/home/midAdmin";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  console.log(user);
  return (
    <SafeAreaView style={[{ flex: 1 }]}>
      <HomeHeader></HomeHeader>
      {user.user_role == "patient" && <MidPatient></MidPatient>}
      {user.user_role == "doctor" && <MidDoc></MidDoc>}
      {user.user_role == "admin" && <MidAdmin></MidAdmin>}

      <News></News>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;

