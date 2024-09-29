import React from "react";
import { StyleSheet, View, Text, ViewComponent } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../../components/home/Header";
import News from "../../components/home/news";
import MidPatient from "../../components/home/midPatient";
import MidDoc from "../../components/home/midDoctor";

const Home = () => {
  return (
    <SafeAreaView style={[{ flex: 1 }]}>
      <HomeHeader></HomeHeader>
      {/* <MidPatient></MidPatient> */}
      <MidDoc></MidDoc>
      <News></News>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;

