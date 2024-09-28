import { View, Text, StyleSheet } from "react-native";
import React from "react";

const HomeHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
      }}
    >
      <View>
        <Text style={styles.hiText}>Hi Dwiky!</Text>
        <Text style={styles.mayText}>May you always in a good condition</Text>
      </View>
      <View
        style={{
          backgroundColor: "cyan",
          justifyContent: "center",
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  hiText: { fontSize: 20, fontWeight: 500 },
  mayText: {
    fontSize: 14,
    fontWeight: 400,
    color: "rgb(63,63,70)",
    marginTop: 4,
  },
});

export default HomeHeader;

