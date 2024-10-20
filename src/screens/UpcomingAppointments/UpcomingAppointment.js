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
import {
  SMS,
  PASSWORD,
  BACK_Arrow,
  User,
  ALERT_MSG,
} from "../../assets/svgIcons";
import { GREY, PRIMARY, TEXT_GREY } from "../../styles/colors";
import styles from "./styles";
import routes from "../../utils/routes";
import { useDispatch, useSelector } from "react-redux";
import { APP_BASE_URL, GET_APPOINTMENTS } from "@env";
import { appointmentsAction } from "../../redux/store/slices/appointmentsSlice";

export default function UpcomingAppointment({ navigation }) {
  const { user } = useSelector((state) => state.auth);
  const [records, setRecords] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    dispatch(
      appointmentsAction({
        url: APP_BASE_URL + GET_APPOINTMENTS,
        doctorId: user.user_id,
        status: "booked",
      })
    )
      .unwrap()
      .then((response) => {
        setRecords(response.document);
      })
      .catch((error) => {
        console.log(error.error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.dateContainer}>
        <Image
          source={{
            uri: item.patient.profilePicture,
          }}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.recordContent}>
        <Text style={styles.recordSubtitle}>{item.patient.name}</Text>
      </View>
    </View>
  );
  const EmptyListComponent = () => (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/medical.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>There is no Appointments</Text>
      <Text style={styles.description}>
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
                <Text style={styles.headerText}>Upcoming Appointments</Text>
                <Text style={styles.notificationIcon}></Text>
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

