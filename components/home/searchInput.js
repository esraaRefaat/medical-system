import { StyleSheet, Text, TextInput, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";

const SearchInput = () => {
  const [search, setsearch] = useState("");
  const [focus, setfocus] = useState(false);
  return (
    <View>
      <TextInput
        style={[styles.search, focus && styles.searchFocused]}
        value={search}
        onChangeText={setsearch}
        placeholder="Search by Speciality... "
        returnKeyType="search"
        onFocus={() => {
          setfocus(true);
        }}
        onBlur={() => {
          setfocus(false);
        }}
      ></TextInput>
      <Feather
        name="search"
        size={24}
        color="black"
        style={styles.searchicon}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  search: {
    borderWidth: 1,
    borderColor: "rgb(210,214,219)",
    borderRadius: 12,
    padding: 12,
    paddingLeft: 44,
    fontSize: 14,
  },
  searchFocused: {
    borderColor: "#254EDB",
    shadowColor: "#254EDB",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchicon: {
    position: "absolute",
    top: 8,
    left: 12,
    width: 24,
    height: 24,
    color: "rgb(108,115,127)",
  },
});

