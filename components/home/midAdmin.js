import {
  Image,
  Linking,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import routes from "../../src/utils/routes";

const MidAdmin = () => {
  const navigation = useNavigation();

    // State to manage modal visibility
    const [modalVisible, setModalVisible] = useState(false);

    // Function to handle option selection
    const handleOptionSelect = (role) => {
      setModalVisible(false);

      navigation.navigate(routes.alluserslist, { role: role });


      // Add your navigation logic here based on the option selected
    };


  return (
    <View style={styles.container}>
      <View style={styles.rowcontainer}>
        <Pressable
          style={[styles.card, { backgroundColor: "#EFE4FF" }]}
          onPress={() => {
            // navigation.navigate(routes.onboarding);
          }}
        >
          <Image
            source={require("../../src/assets/home/icon1.png")}
            style={{ marginBottom: 15 }}
          ></Image>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            App Statistics:
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#71717A" }}>
            
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#71717A" }}>
            Doctors:
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#71717A" }}>
            Patients:
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#71717A" }}>
            Admins:
          </Text>
        </Pressable>
        <Pressable
          style={[styles.card, { backgroundColor: "#EDFCF2" }]}
          onPress={() => {
            navigation.navigate(routes.ApproveDoctorsList);
          }}
        >
          <Image
            source={require("../../src/assets/home/icon2.png")}
            style={{ marginBottom: 15 }}
          ></Image>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            Approve Doctors
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#71717A" }}>

          </Text>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#71717A" }}>
            Verify and Approve Doctors Accounts 
          </Text>
        </Pressable>
      </View>
      <View style={styles.rowcontainer}>
        <Pressable
          style={[styles.card, { backgroundColor: "#FEF6EE" }]}
          onPress={() => {
            // navigation.navigate(routes.onboarding);
          }}
        >
          <Image
            source={require("../../src/assets/home/Icon3.png")}
            style={{ marginBottom: 15 }}
          ></Image>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            Create Admin
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#71717A" }}>

          </Text>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#71717A" }}>
            Create New Admin Account
          </Text>
        </Pressable>
        <Pressable
          style={[styles.card, { backgroundColor: "#FEF3F2" }]}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Image
            source={require("../../src/assets/home/icon4.png")}
            style={{ marginBottom: 15 }}
          ></Image>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            Delete Users
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#71717A" }}>

          </Text>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#71717A" }}>
            Search and Delete Users
          </Text>
        </Pressable>
      </View>

            {/* Modal for Options */}
            <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose Type of User</Text>
            <TouchableOpacity onPress={() => handleOptionSelect('patient')}>
              <Text style={styles.optionText}>Patient</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOptionSelect('doctor')}>
              <Text style={styles.optionText}>Doctor</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOptionSelect('admin')}>
              <Text style={styles.optionText}>Admin</Text>
            </TouchableOpacity>
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MidAdmin;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: "space-between",
    gap: 16,
  },
  rowcontainer: {
    flexDirection: "row",
    flex: 1,
    gap: 16,
  },

  card: {
    borderRadius: 12,
    padding: 16,
    gap: 5,
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dim background
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  optionText: {
    fontSize: 16,
    color: "#007BFF",
    marginVertical: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#EDFCF2",
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    color: "#000",
  },
});

