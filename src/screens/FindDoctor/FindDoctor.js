import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import DoctorCard from "../../components/DoctorCard";
import SearchBox from "../../components/SearchBox";
import EnterButton from "../../components/EnterButton";
import axios from "axios";
import * as NavigationBar from "expo-navigation-bar";
import FAB from "../../components/FAB";
import TopArrow from "../../components/Icons/TopArrow";

const solidBlue = "#1552b4";

axios.defaults.baseURL = "https://medical-system-server.onrender.com/api/v1";

//route, navigation
//route.params ||
export default function FindDoctor({ route }) {
  const { drSpecialties = "ear-nose-and-throat" } = route.params || {};
  const [searchName, setSearchName] = useState("");
  const [page, setPage] = useState(1);
  const [doctors, setDoctors] = useState([]);
  const [showFAB, setShowFAB] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  const flatListRef = useRef(null);

  // useEffect(() => {
  //     NavigationBar.setBackgroundColorAsync('white');
  // }, [])

  const fetchDoctors = async (cb) => {
    try {
      const verifiedDoctor = "true";
      let endpoint = `/users?role=doctor&verifiedDoctor=${verifiedDoctor}&page=${page}`;
      if (searchName) endpoint += `&keyword=${searchName}`;
      if (drSpecialties) endpoint += `&drSpecialties=${drSpecialties}`;
      const res = await axios.get(endpoint);

      cb(res);

      if (res.data.document.length < 10) setShowLoading(false);

      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchDoctors((res) => {
      setDoctors(res.data.document);
    });
  }, [searchName, drSpecialties]);

  useEffect(() => {
    if (page > 1) {
      fetchDoctors((res) => {
        setDoctors([...doctors, ...res.data.document]);
      });
    }
  }, [page]);

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;

    if (offsetY > 100) {
      setShowFAB(true);
    } else if (offsetY === 0) {
      setShowFAB(false);
    }
  };

  return (
    <SafeAreaView edges={["bottom"]}>
      <FlatList
        style={{ height: "100%" }}
        ref={flatListRef}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <View style={styles.listHeaderFirstSection}>
              <View style={styles.searchBox}>
                <SearchBox setSearchName={setSearchName} />
              </View>
              <EnterButton />
            </View>
          </View>
        }
        data={doctors}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ gap: 16 }}
        ItemSeparatorComponent={() => <View style={{ height: 38 }} />}
        renderItem={({ item }) => (
          <DoctorCard
            avatar={item.profilePicture}
            fullName={item.name}
            specialization={item.drSpecialties}
            fees={item.drSessionFees}
            rating={item.rating}
            id={item._id}
          />
        )}
        ListFooterComponent={() => {
          return showLoading ? (
            <ActivityIndicator size={50} color={solidBlue} />
          ) : (
            <Text style={styles.endText}>✋ No More Doctors</Text>
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
          if (showLoading && doctors.length >= 10)
            setPage((prevState) => {
              return prevState + 1;
            });
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

      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listHeader: {
    gap: 12, // Increased gap for cleaner separation
    paddingTop: 16, // More padding for better spacing
    paddingBottom: 28,
    backgroundColor: "#f9f9f9", // Light background for a cleaner feel
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
  },
  listHeaderFirstSection: {
    paddingHorizontal: 20,
    gap: 12,
    flexDirection: "row",
    alignItems: "center", // Ensuring everything is aligned in the middle
  },
  searchBox: {
    flexGrow: 1,
    borderRadius: 8, // Modern rounded corners for input
    overflow: "hidden", // Ensuring children respect the border radius
  },
  endText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18, // Slightly smaller for a cleaner look
    color: "#666", // Use a softer color instead of pure black
    paddingVertical: 12, // Added padding for breathing space
  },
  doctorCard: {
    borderRadius: 12, // Rounded corners for cards
    shadowColor: "#000", // Shadow for elevation
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1, // Subtle shadow for a soft, modern effect
    shadowRadius: 6,
    backgroundColor: "white", // Clean background for cards
    padding: 16,
    marginHorizontal: 16, // Adds consistent margin between cards
  },
  button: {
    backgroundColor: solidBlue,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  fab: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: solidBlue,
    padding: 16,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
});

{
  // import Menu from '../../components/Menu';
  /* 
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={['Available Today', 'Gender', 'Price', 'Placeholder1', 'Placeholder2', 'Placeholder3', 'Placeholder4']}
            keyExtractor={i => i}
            contentContainerStyle={{ gap: 16, padding: 16, }}
            renderItem={(title) => {
                return (
                    <Menu title={title.item} />
                )
            }}
        /> 
    */
}

