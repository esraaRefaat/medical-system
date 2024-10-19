import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GREY, TEXT_GREY, LIGHT_GREY, PRIMARY } from "../../styles/colors";
import styles from "./styles";
import routes from "../../utils/routes";
import { useDispatch, useSelector } from "react-redux";
import { APP_BASE_URL, Get_Medical_Records } from "@env";
import { medicalRecordAction } from "../../redux/store/slices/getMedicalRecordSlice";
import { useRoute } from "@react-navigation/native";

export default function PatientMedicalRecords({ navigation }) {
  const [records, setRecords] = useState([]);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const route = useRoute();

  useEffect(() => {
    dispatch(
      medicalRecordAction({
        url: APP_BASE_URL + Get_Medical_Records,
        id: user.user_id,
        token: user.token,
      })
    )
      .unwrap()
      .then((response) => {
        setRecords(response.records);
      })
      .catch((error) => {
        console.log(error.error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(routes.recorddetails, {
          record: item,
          patientId: user.user_id,
        })
      }
    >
      <View style={customStyles.card}>
        <View style={customStyles.recordContent}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={customStyles.recordTitle}
          >
            {item.diagnosis}
          </Text>
          <Text style={customStyles.prescription}>
            {new Date(item.appointmentDate * 1000).toLocaleDateString()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const EmptyListComponent = () => (
    <View>
      <View style={customStyles.imageContainer}>
        <Image
          source={require("../../assets/medical.png")}
          style={customStyles.image}
        />
      </View>
      <Text style={customStyles.title}>No medical records available.</Text>
      <Text style={customStyles.description}>
        A detailed health history helps a doctor diagnose you better.
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <FlatList
        data={records}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<EmptyListComponent />}
        style={styles.list}
      />
    </SafeAreaView>
  );
}

const customStyles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    // marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  recordContent: {
    flexDirection: "column",
  },
  recordTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  prescription: {
    fontSize: 14,
    color: TEXT_GREY,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 50,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: TEXT_GREY,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});

