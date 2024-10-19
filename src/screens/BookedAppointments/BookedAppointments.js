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
import { BACK_Arrow } from "../../assets/svgIcons";
import { GREY, PRIMARY, TEXT_GREY, LIGHT_GREY } from "../../styles/colors";
import styles from "./styles";
import routes from "../../utils/routes";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";

export default function BookedAppointments({ navigation }) {
  const { user } = useSelector((state) => state.auth);
  const [records, setRecords] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://medical-system-server.onrender.com/api/v1/users/${user.user_id}`
        );
        setRecords(response.data.document[0].bookedAppointments);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch user data.");
      }
    };

    fetchUserData();
  }, [user.user_id]);

  const renderItem = ({ item }) => (
    <View style={cardStyles.cardContainer}>
      <View style={cardStyles.cardHeader}>
        <Text style={cardStyles.cardDate}>
          {moment(item.date).format("MMM DD, YYYY")}
        </Text>
        <Text style={cardStyles.cardTime}>{item.time}</Text>
      </View>
      <View style={cardStyles.cardBody}>
        <Text style={cardStyles.cardStatus}>Status: {item.status}</Text>
      </View>

      {item.status === "done" && (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(routes.rating, {
              docId: item.doctor,
              apponId: item._id,
            })
          }
          style={cardStyles.reviewButton}
        >
          <Text style={cardStyles.reviewButtonText}>Review</Text>
        </TouchableOpacity>
      )}

      {item.status === "doneAndReviewed" && (
        <TouchableOpacity disabled={true} style={cardStyles.reviewedButton}>
          <Text style={cardStyles.reviewedButtonText}>Reviewed</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  const EmptyListComponent = () => (
    <View style={emptyStyles.container}>
      <Image
        source={require("../../assets/medical.png")}
        style={emptyStyles.image}
      />
      <Text style={emptyStyles.title}>No Booked Appointments</Text>
      <Text style={emptyStyles.description}>
        A detailed health history helps a doctor diagnose you better.
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BACK_Arrow />
        </TouchableOpacity>
        <Text style={styles.headerText}>Booked Appointments</Text>
      </View> */}
      <FlatList
        data={records}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        ListEmptyComponent={<EmptyListComponent />}
        style={styles.list}
      />
    </SafeAreaView>
  );
}

const cardStyles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    // marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  cardDate: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  cardTime: {
    fontSize: 14,
    color: "#666",
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardStatus: {
    fontSize: 14,
    color: TEXT_GREY,
  },
  reviewButton: {
    backgroundColor: PRIMARY,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
    width: "100%", // Full width button
  },
  reviewButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  reviewedButton: {
    backgroundColor: "grey",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
    width: "100%", // Full width button
  },
  reviewedButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: TEXT_GREY,
    textAlign: "center",
  },
});

