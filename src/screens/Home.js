import React from "react";
import { StyleSheet, View, Text, ViewComponent } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../../components/home/Header";

const Home = () => {
  return (
    <SafeAreaView>
      <HomeHeader></HomeHeader>
      <View style={[{ backgroundColor: "#6638f0", height: 200 }]}>
        <Text style={{ fontFamily: "ExtraLight" }}>hello wrold</Text>
      </View>
      <Text style={{ fontFamily: "ExtraLight" }}>hello wrold</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;

