import { Alert, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import TouchableButton from '../../components/TouchableButton'
import * as NavigationBar from 'expo-navigation-bar';
import axios from 'axios';
import { Calendar } from 'react-native-calendars'
import dayjs from 'dayjs'
import DatePickerArrow from '../../components/DatePickerArrow'

axios.defaults.baseURL = 'https://medical-system-server.onrender.com/api/v1'

const CreateAppointment = () => {
    const [pressedDate, setPressedDate] = useState(null);
    const [markedDates, setMarkedDates] = useState({});
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);



    const confirmAppointments = async () => {
        try {
            if (markedDates.length !== 0) { // edit this line
                const token = 'testtoken';
                axios.post('/appointments', {
                    "date": "2024-10-01",
                    "time": "15:30"
                }, {
                    headers: {
                        token: token
                    }
                });



            } else {
                Alert.alert('Please Choose Specific Ranges')
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        NavigationBar.setBackgroundColorAsync('white');
        NavigationBar.setPositionAsync('absolute');
        NavigationBar.setVisibilityAsync('visible');
    }, [])

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <Text style={styles.h1}>Which Time You Will be Available ?</Text>
                    <Text style={styles.description}>You can set your desired ranges to allow the patient to choose from them</Text>

                </View>
                <ScrollView>
                    <Calendar
                        markingType={'period'}
                        markedDates={{ [getFormatedKey(pressedDate)]: { color: '#0f5dd0', textColor: 'white', startingDay: true, endingDay: true }, ...markedDates }}
                        onDayPress={(day) => {
                            setPressedDate((prev) => {
                                const current = { year: day.year, month: day.month, day: day.day }
                                if (prev !== null) {

                                    setMarkedDates((prevDates) => { return { ...prevDates, ...createDateObject(prev, current) } }) // { year: 2024, month: 10, day: 2 }

                                    return null
                                }

                                return current
                            })
                        }}
                        minDate={dayjs().format('YYYY-MM-DD')}
                        maxDate={dayjs().add(30, 'day').format('YYYY-MM-DD')}
                        renderArrow={direction => <DatePickerArrow direction={direction} />}
                        theme={{
                            textMonthFontWeight: 'bold',
                            textMonthFontSize: 18,
                            monthTextColor: 'black'
                        }}
                        onMonthChange={month => { }}
                    />

                </ScrollView>
                <View style={styles.bottomAction}>
                    <TouchableButton onPress={() => { confirmAppointments() }} title={'Create Appointments'} />
                </View>
            </View>


            <StatusBar style='dark' />
        </SafeAreaView>
    )
}

export default CreateAppointment

const styles = StyleSheet.create({
    container: {
        padding: 16,
        gap: 32,
        height: '100%',
    },
    h1: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    h2: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    description: {
        color: 'gray'
    },
    topSection: {
        gap: 8
    },
    bottomAction: {
        borderColor: '#e4e6ea',
        borderTopWidth: 1,
        alignItems: 'center',
        paddingVertical: 16,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white'
    }
})



function createDateObject(startDate, endDate) {
    const result = {};
    const start = new Date(startDate.year, startDate.month - 1, startDate.day);
    const end = new Date(endDate.year, endDate.month - 1, endDate.day);

    // Loop through each day from start to end
    for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
        const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

        // Check if it's the starting or ending day
        if (date.getTime() === start.getTime()) {
            result[key] = { startingDay: true, color: '#0f5dd0', textColor: 'white' };
        } else if (date.getTime() === end.getTime()) {
            result[key] = { endingDay: true, color: '#0f5dd0', textColor: 'white' };
        } else {
            result[key] = { color: '#0f5dd0', textColor: 'white' };
        }
    }

    return result;
}


const getFormatedKey = (pressedDate) => {
    if (!pressedDate)
        return null
    const date = new Date(pressedDate.year, pressedDate.month - 1, pressedDate.day);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    return key
}