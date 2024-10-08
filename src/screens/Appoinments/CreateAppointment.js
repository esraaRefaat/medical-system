import { Alert, StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import TouchableButton from "../../components/TouchableButton";
import * as NavigationBar from "expo-navigation-bar";
import axios from "axios";
import { Calendar } from "react-native-calendars";
import dayjs from "dayjs";
import DatePickerArrow from "../../components/DatePickerArrow";
import TimePicker from "../../components/TimePicker";
import VerticalDivider from "../../components/VerticalDivider";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import routes from "../../utils/routes";

axios.defaults.baseURL = "https://medical-system-server.onrender.com/api/v1";

const CreateAppointment = () => {
  const [pressedDate, setPressedDate] = useState(null);
  const [markedDates, setMarkedDates] = useState({});
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const navigation = useNavigation();

  const confirmAppointments = async () => {
    try {
      const markedDatesKeys = Object.keys(markedDates);
      console.log(markedDatesKeys, startTime, endTime);
      if (markedDatesKeys.length !== 0 && startTime && endTime) {
        const token = user.token;
        const timeSlots = generateTimeSlots(startTime, endTime, 30);
        markedDatesKeys.forEach(async (date) => {
          timeSlots.forEach(async (time) => {
            await axios.post(
              "/appointments",
              {
                date,
                time,
              },
              {
                headers: {
                  token: token,
                },
              }
            );
            await new Promise((resolve) => {
              setTimeout(() => resolve, 3000);
              navigation.navigate(routes.home);
            });
          });
        });
      } else {
        Alert.alert("Please Choose Specific Ranges");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // NavigationBar.setBackgroundColorAsync('white');
    // NavigationBar.setPositionAsync('absolute');
    // NavigationBar.setVisibilityAsync('visible');
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Text style={styles.h1}>Which Time You Will be Available ?</Text>
          <Text style={styles.description}>
            You can set your desired ranges to allow the patient to choose from
            them
          </Text>
        </View>
        <ScrollView>
          <Calendar
            markingType={"period"}
            markedDates={{
              [getFormatedKey(pressedDate)]: {
                color: "#0f5dd0",
                textColor: "white",
                startingDay: true,
                endingDay: true,
              },
              ...markedDates,
            }}
            onDayPress={(day) => {
              setPressedDate((prev) => {
                const current = {
                  year: day.year,
                  month: day.month,
                  day: day.day,
                };
                if (prev !== null) {
                  setMarkedDates((prevDates) => {
                    return { ...prevDates, ...createDateObject(prev, current) };
                  }); // { year: 2024, month: 10, day: 2 }

                  return null;
                }

                return current;
              });
            }}
            minDate={dayjs().format("YYYY-MM-DD")}
            maxDate={dayjs().add(30, "day").format("YYYY-MM-DD")}
            renderArrow={(direction) => (
              <DatePickerArrow direction={direction} />
            )}
            theme={{
              textMonthFontWeight: "bold",
              textMonthFontSize: 18,
              monthTextColor: "black",
            }}
            onMonthChange={(month) => {}}
          />

          <View style={styles.rowWithVerticalDivider}>
            <View style={styles.timeInput}>
              <Text style={styles.boldText}>Start Time</Text>
              <TimePicker time={startTime} setTime={setStartTime} />
            </View>
            <VerticalDivider height={64} color="gray" />
            <View style={styles.timeInput}>
              <Text style={styles.boldText}>End Time</Text>
              <TimePicker time={endTime} setTime={setEndTime} />
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottomAction}>
          <TouchableButton
            onPress={() => {
              confirmAppointments();
            }}
            title={"Create Appointments"}
          />
        </View>
      </View>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default CreateAppointment;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 32,
    height: "100%",
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    color: "gray",
  },
  topSection: {
    gap: 8,
  },
  rowWithVerticalDivider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 32,
    gap: 32,
  },
  bottomAction: {
    borderColor: "#e4e6ea",
    borderTopWidth: 1,
    alignItems: "center",
    paddingVertical: 16,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  timeInput: {
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});

function createDateObject(startDate, endDate) {
  const result = {};
  const start = new Date(startDate.year, startDate.month - 1, startDate.day);
  const end = new Date(endDate.year, endDate.month - 1, endDate.day);

  // Loop through each day from start to end
  for (
    let date = new Date(start);
    date <= end;
    date.setDate(date.getDate() + 1)
  ) {
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;

    // Check if it's the starting or ending day
    if (date.getTime() === start.getTime()) {
      result[key] = { startingDay: true, color: "#0f5dd0", textColor: "white" };
    } else if (date.getTime() === end.getTime()) {
      result[key] = { endingDay: true, color: "#0f5dd0", textColor: "white" };
    } else {
      result[key] = { color: "#0f5dd0", textColor: "white" };
    }
  }

  return result;
}

const getFormatedKey = (pressedDate) => {
  if (!pressedDate) return null;
  const date = new Date(
    pressedDate.year,
    pressedDate.month - 1,
    pressedDate.day
  );
  const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")}`;
  return key;
};

function generateTimeSlots(startTime, endTime, interval) {
  const times = [];
  let currentTime = new Date(`1970-01-01T${startTime}:00`);
  const endTimeDate = new Date(`1970-01-01T${endTime}:00`);

  while (currentTime < endTimeDate) {
    times.push(currentTime.toTimeString().slice(0, 5));
    currentTime.setMinutes(currentTime.getMinutes() + interval);
  }

  return times;
}

