import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const News = () => {
  return (
    <View>
      <ScrollView
        style={styles.scrollview}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <Pressable style={styles.pressable}>
          <View style={{ width: 180, gap: 10 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "white",
                lineHeight: "24px",
              }}
            >
              Prevent the spread of COVID-19 Virus
            </Text>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <Text style={{ fontSize: 12, fontWeight: 400, color: "white" }}>
                Find out now
              </Text>
              <AntDesign name="arrowright" size={12} color="white" />
            </View>
          </View>
        </Pressable>
        <Pressable style={styles.pressable}>
          <View style={{ width: 180, gap: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: 500, color: "white" }}>
              Prevent the spread of COVID-19 Virus
            </Text>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <Text style={{ fontSize: 12, fontWeight: 400, color: "white" }}>
                Find out now
              </Text>
              <AntDesign name="arrowright" size={12} color="white" />
            </View>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  scrollview: {
    padding: 16,
  },
  pressable: {
    padding: 16,
    backgroundColor: "grey",
    width: 320,
    marginRight: 16,
    borderRadius: 12,
  },
});

