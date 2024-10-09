import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Dimensions,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import FAB from "../../components/FAB.jsx";
import TopArrow from "../../components/Icons/TopArrow.jsx";
import SearchIcon from "../../components/Icons/SearchIcon.jsx";
import { useDispatch, useSelector } from "react-redux";
import DoctorCardWithApprove from "../../components/DoctorCardWithApprove.jsx";
import { putDataWithTokenAction } from "../../redux/store/slices/putDataWithTokenSlice.js";

const solidBlue = "#1552b4";

export default function ApproveDoctorsList({ route }) {
  const [searchName, setSearchName] = useState("");
  const [page, setPage] = useState(1);
  const [doctors, setDoctors] = useState([]);
  const [showFAB, setShowFAB] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const flatListRef = useRef(null);
  const [modalVisibleApprove, setModalVisibleApprove] = useState(false);
  const [modalVisibleReject, setModalVisibleReject] = useState(false);  const [doctorIdToApprove, setDoctorIdToApprove] = useState(null);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();


  const fetchDoctors = async () => {
    try {
      const url = `https://medical-system-server.onrender.com/api/v1/users?role=doctor&verifiedDoctor=pending&page=${page}${searchName ? `&keyword=${searchName}` : ''}`;
      
      const res = await axios.get(url);

      setDoctors((prevDoctors) => {
        // Only update if it's the first page or we are appending more
        if (page === 1) return res.data.document;
        return [...prevDoctors, ...res.data.document];
      });

      // Show loading based on response
      if (res.data.document.length < 10) {
        setShowLoading(false);
      } else {
        setShowLoading(true);
      }
    } catch (e) {
      setShowLoading(false);
    }
  };

  useEffect(() => {
    setShowLoading(true); // Set loading to true before fetching
    fetchDoctors();
  }, [searchName, page]); // Include page to re-fetch on page change

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowFAB(offsetY > 100);
  };

  const onApprove = (id) => {
    setDoctorIdToApprove(id); // Set the ID to be Approved
    setModalVisibleApprove(true); // Close the approve modal
  };

  const onReject = (id) => {
    setDoctorIdToApprove(id); // Set the ID to be Approved
    setModalVisibleReject(true); // Close the reject modal
  };

  const confirmApprove = async () => {
    const token = user.token; // Get your token from your auth state or context
    const url = `https://medical-system-server.onrender.com/api/v1/users/admin/${doctorIdToApprove}`;
    const userData = {verifiedDoctor: "true"}
    
    const resultAction = await dispatch(putDataWithTokenAction({ token,userData, url }));
  
    if (putDataWithTokenAction.fulfilled.match(resultAction)) {
      setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor._id !== doctorIdToApprove));
    } else {
      console.error("Error Approving doctor:", resultAction.error);
    }
    
    setModalVisibleApprove(false); // Close the approve modal
    setDoctorIdToApprove(null); // Reset the ID
  };


  const confirmReject = async () => {
    const token = user.token; // Get your token from your auth state or context
    const url = `https://medical-system-server.onrender.com/api/v1/users/admin/${doctorIdToApprove}`;
    const userData = {verifiedDoctor: "false"}
    
    const resultAction = await dispatch(putDataWithTokenAction({ token,userData, url }));
  
    if (putDataWithTokenAction.fulfilled.match(resultAction)) {
      setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor._id !== doctorIdToApprove));
    } else {
      console.error("Error Approving doctor:", resultAction.error);
    }
    
    setModalVisibleReject(false); // Close the reject modal
    setDoctorIdToApprove(null); // Reset the ID
  };


  return (
    <SafeAreaView>
<FlatList
  style={{ height: "100%" }}
  ref={flatListRef}
  ListHeaderComponent={
    <View style={styles.listHeader}>
      <View style={styles.searchContainer}>
          <SearchIcon />
          <TextInput
            style={styles.textInput}
            placeholder='Search Doctor'
            value={searchName}
            onChangeText={(text) => {
              setSearchName(text); // Update search name on change
              setPage(1); // Reset to first page on new search
            }}
          />
        </View>
    </View>
  }
  data={doctors}
  keyExtractor={(item) => item._id ? item._id : item.name + item.drSpecialties} // Ensure unique keys
  contentContainerStyle={{ gap: 16 }}
  ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
  renderItem={({ item }) => (
    <DoctorCardWithApprove
      avatar={item.profilePicture || "https://s3-alpha-sig.figma.com/img/78ba/f237/b32634d9f131723a21fb54a51b0dc114?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L8xYoPM28s5uBmO-rNZGuZ37lV2WltP0Jgc3bqWKevJ6gaJOAPMafIzWDVMfkJfY-jOi7H-JaDLufs9-pRmJEw2hjmdJk0h-mUbsahCez9GvDbjG3fcbqmOtm~ogOxnd6gEVybUqtTinrN13H1ToQ-KWTkCj64hJF2OnO1Jwk6Faa8GJuEJJO2RveyzGQYa0kQMeW-~rFV8FTDCF1w9dlOjFI3~cz2Wv-vf50nU4KLyBn83FAxembCH85Dcck1sNu7uvYViutvixrTxCZ2aOIyKRSZCEm2sO-eS4-4P2sOaL8kO3M5N-grbq5~~91I9DhLO60G0Sr3zpFNVaaITlfw__"}
      fullName={item.name}
      specialization={item.drSpecialties}
      fees={item.drSessionFees}
      rating={item.rating}
      id={item._id}
      onApprove={() => onApprove(item._id)}
      onReject={() => onReject(item._id)}

    />
  )}
  ListFooterComponent={() => {
    return showLoading ? (
      <ActivityIndicator size={50} color={solidBlue} />
    ) : (
      <Text style={styles.endText}></Text>
    );
  }}
  ListFooterComponentStyle={
    doctors.length === 0
      ? { paddingTop: Dimensions.get("window").height / 3 }
      : { paddingVertical: 16 }
  }
  onScroll={handleScroll}
  scrollEventThrottle={16}
  onEndReached={() => {
    if (showLoading && doctors.length >= 10) {
      setPage((prevState) => prevState + 1);
    }
  }}
  onEndReachedThreshold={0.3}
/>


      {showFAB && (
        <FAB
          Icon={TopArrow}
          onPress={() => {
            flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
          }}
        />
      )}

      {/* Approval Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleApprove}
        onRequestClose={() => setModalVisibleApprove(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Approval</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to approve this doctor?
            </Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.confirmButton]}
                onPress={confirmApprove}
              >
                <Text style={styles.buttonText}>Yes</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.cancelButton]}
                onPress={() => setModalVisibleApprove(false)}
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
        visible={modalVisibleReject}
        onRequestClose={() => setModalVisibleReject(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Rejection</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to reject this doctor?
            </Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.rejectButton]}
                onPress={confirmReject}
              >
                <Text style={styles.buttonText}>Yes</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.cancelButton]}
                onPress={() => setModalVisibleReject(false)}
              >
                <Text style={styles.buttonText}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: "#fff", // Optional: background color for the header
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
  },
  textInput: {
    flex: 1,
    height: 50,
    fontSize: 18,
  },
  endText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 22,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: "45%",
  },
  confirmButton: {
    backgroundColor: "green",
  },
  rejectButton: {
    backgroundColor: "red",
  },
  cancelButton: {
    backgroundColor: "gray",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
