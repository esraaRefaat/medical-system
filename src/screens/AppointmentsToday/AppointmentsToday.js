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
import { useDispatch, useSelector } from "react-redux";
import { APP_BASE_URL, GET_APPOINTMENTS } from "@env";
import { appointmentsAction } from "../../redux/store/slices/appointmentsSlice";
import { putDataWithTokenAction } from "../../redux/store/slices/putDataWithTokenSlice.js";
import routes from "../../utils/routes";
import moment from "moment";

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

  const onDone = (id) => {
    setAppointmentId(id);
    setModalVisibleDone(true);
  };

  const onCancel = (id) => {
    setAppointmentId(id);
    setModalVisibleCancel(true);
  };

  const confirmDone = async () => {
    const token = user.token;
    const url = `https://medical-system-server.onrender.com/api/v1/appointments/${appointmentId}`;
    const userData = { status: "done" };

    const resultAction = await dispatch(
      putDataWithTokenAction({ token, userData, url })
    );

    if (putDataWithTokenAction.fulfilled.match(resultAction)) {
      setRecords((prevAppointment) =>
        prevAppointment.filter(
          (appointment) => appointment._id !== appointmentId
        )
      );
    } else {
      console.error("Error approving appointment:", resultAction.error);
    }

    setModalVisibleDone(false);
    setAppointmentId(null);
  };

  const confirmCancel = async () => {
    const token = user.token;
    const url = `https://medical-system-server.onrender.com/api/v1/appointments/${appointmentId}`;
    const userData = { status: "cancelled" };

    const resultAction = await dispatch(
      putDataWithTokenAction({ token, userData, url })
    );

    if (putDataWithTokenAction.fulfilled.match(resultAction)) {
      setRecords((prevAppointment) =>
        prevAppointment.filter(
          (appointment) => appointment._id !== appointmentId
        )
      );
    } else {
      console.error("Error canceling appointment:", resultAction.error);
    }

    setModalVisibleCancel(false);
    setAppointmentId(null);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(routes.medicalrecords, {
            patientId: item.patient._id,
          });
        }}
      >
        <View style={styles.card}>
          <Image
            source={{ uri: item.patient.profilePicture }}
            style={styles.imageStyle}
          />
          <Text style={styles.recordSubtitle}>{item.patient.name}</Text>
          <Text style={styles.dateText}>
            {moment(item.date).format("DD-MM-YYYY ,h:mm:ss a")}
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => onDone(item._id)}
            >
              <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => onCancel(item._id)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const EmptyListComponent = () => (
    <View style={styles.emptyContainer}>
      <Image
        source={require("../../assets/medical.png")}
        style={styles.emptyImage}
      />
      <Text style={styles.title}>There are no Appointments</Text>
      <Text style={styles.description}>
        A detailed health history helps a doctor diagnose you better.
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <FlatList
        data={records}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        ListEmptyComponent={<EmptyListComponent />}
        style={styles.list}
      />

      {/* Done Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleDone}
        onRequestClose={() => setModalVisibleDone(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Appointment is Done</Text>
            <Text style={styles.modalMessage}>
              Are you sure the appointment is done?
            </Text>
            <View style={styles.modalButtons}>
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

      {/* Cancel Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleCancel}
        onRequestClose={() => setModalVisibleCancel(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Cancelation</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to cancel the appointment?
            </Text>
            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.button, styles.confirmButton]}
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

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  recordSubtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  doneButton: {
    backgroundColor: "#33b249",
    paddingVertical: 10,
    width: "100%",
    borderRadius: 5,
    marginBottom: 8,
  },
  cancelButton: {
    backgroundColor: "#ED0800",
    paddingVertical: 10,
    width: "100%",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  emptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalMessage: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  confirmButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    width: "45%",
    borderRadius: 5,
  },
  cancelButton1: {
    backgroundColor: "#f44336",
    paddingVertical: 10,
    width: "45%",
    borderRadius: 5,
  },
  dateText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
    fontWeight: "bold",
  },
});

