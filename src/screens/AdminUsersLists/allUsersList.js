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
import DoctorCardWithDelete from "../../components/DoctorCardWithDelete.jsx";

import axios from "axios";
import FAB from "../../components/FAB";
import TopArrow from "../../components/Icons/TopArrow";
import SearchIcon from "../../components/Icons/SearchIcon.jsx";
import { deleteWithTokenAction } from "../../redux/store/slices/deleteWithTokenSlice.js";
import { useDispatch } from "react-redux";

const solidBlue = "#1552b4";

export default function AllUsersList({ route }) {
  const { role = "doctor" } = route.params || {};
  const [searchName, setSearchName] = useState("");
  const [page, setPage] = useState(1);
  const [doctors, setDoctors] = useState([]);
  const [showFAB, setShowFAB] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const flatListRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [doctorIdToDelete, setDoctorIdToDelete] = useState(null);


  const dispatch = useDispatch();


  const fetchDoctors = async () => {
    try {
      const url = `https://medical-system-server.onrender.com/api/v1/users?role=${role}&page=${page}${searchName ? `&keyword=${searchName}` : ''}`;
      
      console.log(`Fetching from: ${url}`); // Debug log
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
      console.log(res.data.document); // Debug log
    } catch (e) {
      console.log(e);
      setShowLoading(false);
    }
  };

  useEffect(() => {
    setShowLoading(true); // Set loading to true before fetching
    fetchDoctors();
  }, [searchName, page, role]); // Include page to re-fetch on page change

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowFAB(offsetY > 100);
  };

  const onDelete = (id) => {
    setDoctorIdToDelete(id); // Set the ID to be deleted
    setModalVisible(true); // Show the modal
  };

  const confirmDelete = async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzA0NmQ3NzA5MmI4NTdiMjZiMzY2ZDIiLCJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6ImhhZHMzeWRkQGdtYWlsLmNvbSIsImlhdCI6MTcyODM0MzQxNX0.qzDk-pXKWeo_O09zMhJhLpAiqBm48X6P0e34_lUlqvU'; // Get your token from your auth state or context
    const url = `https://medical-system-server.onrender.com/api/v1/users/admin/${doctorIdToDelete}`;
    
    console.log(url, token);
    
    const resultAction = await dispatch(deleteWithTokenAction({ token, url }));
  
    if (deleteWithTokenAction.fulfilled.match(resultAction)) {
      setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor._id !== doctorIdToDelete));
      console.log("Doctor deleted successfully");
    } else {
      console.error("Error deleting doctor:", resultAction.error);
    }
    
    setModalVisible(false); // Close the modal
    setDoctorIdToDelete(null); // Reset the ID
  };


  // const onDelete =  async (id) => {
  //   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzA0NmQ3NzA5MmI4NTdiMjZiMzY2ZDIiLCJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6ImhhZHMzeWRkQGdtYWlsLmNvbSIsImlhdCI6MTcyODM0MzQxNX0.qzDk-pXKWeo_O09zMhJhLpAiqBm48X6P0e34_lUlqvU'; // Get your token from your auth state or context
  //   const url = `https://medical-system-server.onrender.com/api/v1/users/admin/${id}`; // Adjust the URL as needed
  
  //   console.log(url,token);
    
  //   // Dispatch delete action
  //   const resultAction =  await dispatch(deleteWithTokenAction({ token, url }));
  
  //   if (deleteWithTokenAction.fulfilled.match(resultAction)) {
  //     // Handle successful deletion
  //     setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor._id !== id));
  //     console.log("Doctor deleted successfully");
  //   } else {
  //     // Handle the error case
  //     console.error("Error deleting doctor:", resultAction.error);
  //   }
  // };


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
            placeholder='Search'
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
    <DoctorCardWithDelete
      avatar={item.profilePicture || "https://s3-alpha-sig.figma.com/img/78ba/f237/b32634d9f131723a21fb54a51b0dc114?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L8xYoPM28s5uBmO-rNZGuZ37lV2WltP0Jgc3bqWKevJ6gaJOAPMafIzWDVMfkJfY-jOi7H-JaDLufs9-pRmJEw2hjmdJk0h-mUbsahCez9GvDbjG3fcbqmOtm~ogOxnd6gEVybUqtTinrN13H1ToQ-KWTkCj64hJF2OnO1Jwk6Faa8GJuEJJO2RveyzGQYa0kQMeW-~rFV8FTDCF1w9dlOjFI3~cz2Wv-vf50nU4KLyBn83FAxembCH85Dcck1sNu7uvYViutvixrTxCZ2aOIyKRSZCEm2sO-eS4-4P2sOaL8kO3M5N-grbq5~~91I9DhLO60G0Sr3zpFNVaaITlfw__"}
      fullName={item.name}
      specialization={item.drSpecialties}
      fees={item.drSessionFees}
      rating={item.rating}
      id={item._id}
      onDelete={() => onDelete(item._id)}
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

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Deletion</Text>
            <Text style={styles.modalMessage}>Are you sure you want to delete this doctor?</Text>
            <View style={styles.buttonContainer}>
              <Pressable style={[styles.button, styles.confirmButton]} onPress={confirmDelete}>
                <Text style={styles.buttonText}>Yes</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.cancelButton]} onPress={() => setModalVisible(false)}>
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
