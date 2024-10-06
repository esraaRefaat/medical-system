import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const newslink1 =
  "https://www.healthline.com/health-news/quitting-smoking-cuts-heart-attack-risk";

const News = () => {
  return (
    <View>
      <ScrollView
        style={styles.scrollview}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <Pressable
          style={[styles.pressable, { backgroundColor: "#254EDB" }]}
          onPress={() => {
            Linking.openURL(newslink1);
          }}
        >
          <Image
            source={require("../../src/assets/home/card2.png")}
            style={styles.img}
          ></Image>
          <View style={{ width: 180, gap: 10 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: "white",
                lineHeight: 24,
              }}
            >
              Quitting Smoking Cuts Heart Attack Risk by Nearly 50%
            </Text>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <Text style={{ fontSize: 12, fontWeight: "400", color: "white" }}>
                Read more
              </Text>
              <AntDesign name="arrowright" size={12} color="white" />
            </View>
          </View>
        </Pressable>
        <Pressable
          style={[styles.pressable, { backgroundColor: "#FFA435" }]}
          onPress={() => {
            Linking.openURL(newslink1);
          }}
        >
          <Image
            source={require("../../src/assets/home/card2.png")}
            style={styles.img}
          ></Image>
          <View style={{ width: 180, gap: 10 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: "white",
                lineHeight: 24,
              }}
            >
              Quitting Smoking Cuts Heart Attack Risk by Nearly 50%
            </Text>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <Text style={{ fontSize: 12, fontWeight: "400", color: "white" }}>
                Read more
              </Text>
              <AntDesign name="arrowright" size={12} color="white" />
            </View>
          </View>
        </Pressable>
        <Pressable
          style={[styles.pressable, { backgroundColor: "#2F8DC4" }]}
          onPress={() => {
            Linking.openURL(newslink1);
          }}
        >
          <Image
            source={require("../../src/assets/home/card2.png")}
            style={styles.img}
          ></Image>
          <View style={{ width: 180, gap: 10 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: "white",
                lineHeight: 24,
              }}
            >
              Quitting Smoking Cuts Heart Attack Risk by Nearly 50%
            </Text>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <Text style={{ fontSize: 12, fontWeight: "400", color: "white" }}>
                Read more
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
    width: 340,
    marginRight: 16,
    borderRadius: 12,
    position: "relative",
    overflow: "hidden",
  },
  img: {
    width: 220,
    height: 130,
    position: "absolute",
    right: 0,
  },
});

