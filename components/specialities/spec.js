import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import routes from "../../src/utils/routes";
const Spec = (props) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        console.log(props.drSpecialties);
        navigation.navigate(routes.findDoctor, {
          drSpecialties: props.drSpecialties,
        });
      }}
    >
      <View style={styles.iconview}>
        <Text style={styles.icon}>{props.icon}</Text>
      </View>
      <View style={{ gap: 5, flex: 1 }}>
        <Text style={styles.specName}>{props.name}</Text>
        <Text style={styles.wide}>Wide selection of doctor's specialties</Text>
      </View>
      <MaterialIcons name="arrow-forward-ios" size={22} color="#254EDB" />
    </Pressable>
  );
};

export default Spec;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 12,
    padding: 16,
  },
  iconview: {
    height: 52,
    width: 52,
    borderRadius: 50,
    backgroundColor: "#F9F5FF",
    borderWidth: 1,
    borderColor: "#C6D4F1",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: { fontSize: 20 },
  specName: { fontSize: 16, fontWeight: "bold" },
  wide: { color: "#71717A" },
});

