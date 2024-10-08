import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  Pressable,
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
import { putDataWithTokenAction } from "../../redux/store/slices/putDataWithTokenSlice.js";

export default function AppointmentsToday({ navigation }) {
  const { user } = useSelector((state) => state.auth);
  const [records, setRecords] = useState([]);
  const dispatch = useDispatch();
  const [modalVisibleDone, setModalVisibleDone] = useState(false);
  const [modalVisibleCancel, setModalVisibleCancel] = useState(false);  
  const [appointmentId, setAppointmentId] = useState(null);

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
        // console.log("appoint", response.document);
        const todaysAppointments = response.document.filter((appointment) => {
          const appointmentDate = appointment.date.split("T")[0];
          return appointmentDate === today;
        });
        setRecords(todaysAppointments);
      })
      .catch((error) => {
        console.log(error.error);
      });
  }, []);

  const onDone = (id)=>{
    setAppointmentId(id); // Set the ID to be Approved
    setModalVisibleDone(true); // Close the approve modal
  };
  const onCancel = (id)=>{
    setAppointmentId(id); // Set the ID to be Approved
    setModalVisibleCancel(true); // Close the approve modal
  };



  const confirmDone = async () => {
    const token = user.token; // Get your token from your auth state or context
    const url = `https://medical-system-server.onrender.com/api/v1/appointments/${appointmentId}`;
    const userData = {status: "done"}
    
    const resultAction = await dispatch(putDataWithTokenAction({ token,userData, url }));
  
    if (putDataWithTokenAction.fulfilled.match(resultAction)) {
      setRecords((prevAppointment) => prevAppointment.filter((appointment) => appointment._id !== appointmentId));
    } else {
      console.error("Error Approving doctor:", resultAction.error);
    }
    
    setModalVisibleDone(false); // Close the approve modal
    setAppointmentId(null); // Reset the ID
  };


  const confirmCancel = async () => {
    const token = user.token; // Get your token from your auth state or context
    const url = `https://medical-system-server.onrender.com/api/v1/appointments/${appointmentId}`;
    const userData = {status: "cancelled"}
    
    const resultAction = await dispatch(putDataWithTokenAction({ token,userData, url }));
  
    if (putDataWithTokenAction.fulfilled.match(resultAction)) {
      setRecords((prevAppointment) => prevAppointment.filter((appointment) => appointment._id !== appointmentId));
    } else {
      console.error("Error Approving doctor:", resultAction.error);
    }
    
    setModalVisibleCancel(false); // Close the reject modal
    setAppointmentId(null); // Reset the ID
  };



  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        console.log(item.patient._id);
        navigation.navigate(routes.medicalrecords, {
          patientId: item.patient._id,
        });
      }}
    >
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
        {/* Corrected onPress handlers */}
        <TouchableOpacity
          style={styles.doneButton}
          onPress={() => onDone(item._id)} // Wrap in arrow function
        >
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => onCancel(item._id)} // Wrap in arrow function
        >
          <Text style={styles.doneButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BACK_Arrow />
        </TouchableOpacity>
        <Text style={styles.headerText}>Appointments Today</Text>
        <Text style={styles.notificationIcon}></Text>
      </View>
      <FlatList
        data={records}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        ListEmptyComponent={<EmptyListComponent />}
        style={styles.list}
      />
       {/* Approval Modal */}
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleDone}
        onRequestClose={() => setModalVisibleDone(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Approval</Text>
            <Text style={styles.modalMessage}>
              Are you sure The Appointment is Done?
            </Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.confirmButton]}
                onPress={confirmDone}
              >
                <Text style={styles.buttonText}>Yes</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.cancelButton1]}
                onPress={() => setModalVisibleDone(false)}
              >
                <Text style={styles.buttonText}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* Rejection Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleCancel}
        onRequestClose={() => setModalVisibleCancel(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Rejection</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to cancel the appointment?
            </Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.rejectButton]}
                onPress={confirmCancel}
              >
                <Text style={styles.buttonText}>Yes</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.cancelButton1]}
                onPress={() => setModalVisibleCancel(false)}
              >
                <Text style={styles.buttonText}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>


    </SafeAreaView>
  );
}

