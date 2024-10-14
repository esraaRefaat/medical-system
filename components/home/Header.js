import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import SearchInput from "./searchInput";

const HomeHeader = ({ user }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <View>
          <Text style={styles.hiText}>Hi {user.name}!</Text>
          <Text style={styles.mayText}>
            May you always be in a good Health
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
          }}
        >
          {/* <Pressable style={styles.iconbutton}>
            <Ionicons name="notifications-outline" size={20} color="black" />
          </Pressable> */}
        </View>
      </View>
      {/* <SearchInput></SearchInput> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  hiText: { fontSize: 20, fontWeight: "bold" },
  mayText: {
    fontSize: 14,
    fontWeight: "medium",
    color: "rgb(63,63,70)",
    marginTop: 4,
  },
  iconbutton: {
    borderRadius: 8,
    borderColor: "rgb(229,231,235)",
    padding: 6,
    backgroundColor: "rgb(249, 250, 251)",
    borderStyle: "solid",
    borderWidth: 1,
    // width: 32,
    // height: 32,
    elevation: 1,
  },
});

export default HomeHeader;

