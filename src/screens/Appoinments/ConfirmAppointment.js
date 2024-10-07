import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import ChooseDay from '../../components/ChooseDay'
import ChooseTime from '../../components/ChooseTime'
import TouchableButton from '../../components/TouchableButton'
import * as NavigationBar from 'expo-navigation-bar';
import axios from 'axios'
import { useRoute } from '@react-navigation/native'

// {{BaseUrl}}/api/v1/users/${doctorId} -> to get the created Appointments


// appointmentId, token header

axios.defaults.baseURL = 'https://medical-system-server.onrender.com/api/v1'


const ConfirmAppointment = () => {
    // const route = useRoute();
    // const { doctorId, } = route.params;
    const [key, setKey] = useState();
    const [timeId, setTimeId] = useState();
    const [appointments, setAppointments] = useState([]);



    const fetchAppointments = async () => {
        try {
            const doctorId = '6701691de460030022321398'
            const res = await axios.get(`/users/${doctorId}`);
            setAppointments(pretifyAppointmentsData(res.data.document[0].createdAppointments));

        } catch (err) {
            console.log(err)
        }

    }

    const confirmAppointment = async () => {
        try {
            if (timeId) {
                const token = 'testtoken';
                axios.put(`/appointments/book/${timeId}`, {}, {
                    headers: {
                        token: token
                    }
                });
            } else {
                Alert.alert('Please Choose Specific Date And Time')
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchAppointments()
    }, [])

    useEffect(() => {
        NavigationBar.setBackgroundColorAsync('white');
    }, [])

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <Text style={styles.h1}>Select your visit date & Time</Text>
                    <Text style={styles.description}>You can choose the date and time from the available doctor's schedule</Text>

                </View>

                <ChooseDay activeKey={key} setActiveKey={setKey} data={appointments ? Object.values(appointments) : []} />

                {
                    appointments[key]?.appointmentsAM?.length > 0 &&
                    <ChooseTime
                        title={'Morning'}
                        activeTimeId={timeId}
                        setActiveTimeId={setTimeId}
                        data={sortAppointments(appointments[key].appointmentsAM)}
                    />
                }
                {
                    appointments[key]?.appointmentsPM?.length > 0 &&
                    <ChooseTime
                        title={'Afternoon'}
                        activeTimeId={timeId}
                        setActiveTimeId={setTimeId}
                        data={sortAppointments(appointments[key].appointmentsPM)}
                    />
                }

                <View style={styles.bottomAction}>
                    <TouchableButton onPress={() => { confirmAppointment() }} title={'Confirm'} />
                </View>

            </View>


            <StatusBar style='dark' />
        </SafeAreaView>
    )
}

export default ConfirmAppointment

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
        right: 0

    }
})

function sortAppointments(appointments) {
    return appointments.sort((a, b) => { if (a.time < b.time) return -1; else return 1; })
}

function convertDateString(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'short' }; // Use 'long' for full name
    const dayName = new Intl.DateTimeFormat('en-US', options).format(date);

    return {
        month: date.getUTCMonth() + 1,
        dayNumber: date.getUTCDate(),
        dayName: dayName
    };
}


const pretifyAppointmentsData = (data) => {
    const pretifiedAppointments = {}
    data.forEach(appointment => {
        const { dayName, dayNumber, month } = convertDateString(appointment.date);
        const key = `${dayNumber}/${month}`
        if (!pretifiedAppointments[key]) {
            pretifiedAppointments[key] = {
                month,
                dayName,
                dayNumber,
                disabled: (new Date()).getDate() > dayNumber,
                appointmentsAM: [],
                appointmentsPM: []
            }
        }

        const timeInfo = { time: appointment.time, _id: appointment._id, disabled: appointment.status !== 'available' }

        if (Number(appointment.time.split(':')) < 12)
            pretifiedAppointments[key].appointmentsAM.push(timeInfo)
        else pretifiedAppointments[key].appointmentsPM.push(timeInfo)
    });


    return pretifiedAppointments;

    // {
    //     5/12: {
    //         month: 12,
    //         dayNumber: 5, 
    //         dayName: 'Sat'
    //         disabled: true,
    //         appointmentsAM: [ { time: '11:00', _id: '6701691de460030022321398', disabled:false}],
    //         appointmentsPM: [],
    //     }
    // }
}

