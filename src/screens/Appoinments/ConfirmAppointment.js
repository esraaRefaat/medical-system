import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import ChooseDay from '../../components/ChooseDay'
import ChooseTime from '../../components/ChooseTime'
import TouchableButton from '../../components/TouchableButton'
import * as NavigationBar from 'expo-navigation-bar';
import axios from 'axios'

// {{BaseUrl}}/api/v1/users/${doctorId} -> to get the created Appointments


// appointmentId, token header

axios.defaults.baseURL = 'https://medical-system-server.onrender.com/api/v1'


const ConfirmAppointment = () => {
    const [day, setDay] = useState();
    const [time, setTime] = useState();
    const [appointments, setAppointments] = useState([]);
    const [selectedAppointmentId, setSelectedAppointmentId] = useState('');



    const fetchAppointments = async () => {
        try {
            const doctorId = '6701691de460030022321398'
            const res = await axios.get(`/users/${doctorId}`);
            setAppointments(pretifyAppointmentsData(res.data.document[0].createdAppointments));

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

                <ChooseDay activeDay={day} setDay={setDay} data={appointments ? Object.values(appointments) : []} />

                {appointments[day]?.appointmentsAM?.length > 0 && <ChooseTime title={'Morning'} activeTime={time} setActiveTime={setTime} data={appointments[day].appointmentsAM} />}
                {appointments[day]?.appointmentsPM?.length > 0 && <ChooseTime title={'Afternoon'} activeTime={time} setActiveTime={setTime} data={appointments[day].appointmentsPM} />}

                <View style={styles.bottomAction}>
                    <TouchableButton onPress={() => { }} title={'Confirm'} />
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

function convertDateString(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'short' }; // Use 'long' for full name
    const dayName = new Intl.DateTimeFormat('en-US', options).format(date);

    return {
        dayNumber: date.getUTCDate(),
        dayName: dayName
    };
}


const pretifyAppointmentsData = (data) => {
    const pretifiedAppointments = {}
    data.forEach(appointment => {
        const { dayName, dayNumber } = convertDateString(appointment.date);
        if (!pretifiedAppointments[dayNumber]) {
            pretifiedAppointments[dayNumber] = {
                dayName,
                dayNumber,
                disabled: (new Date()).getDate() > dayNumber,
                appointmentsAM: [],
                appointmentsPM: []
            }
        }

        const timeInfo = { time: appointment.time, _id: appointment._id, disabled: appointment.status !== 'available' }

        if (Number(appointment.time.split(':')) < 12)
            pretifiedAppointments[dayNumber].appointmentsAM.push(timeInfo)
        else pretifiedAppointments[dayNumber].appointmentsPM.push(timeInfo)
    });
    return pretifiedAppointments;

    // "createdAppointments": [
    //     {
    //         "_id": "6701825648961721774d79d8",
    //         "date": "2024-10-01T00:00:00.000Z",
    //         "time": "15:30",
    //         "status": "available",
    //         "doctor": "6701691de460030022321398",
    //         "createdAt": "2024-10-05T18:15:50.200Z",
    //         "updatedAt": "2024-10-05T18:15:50.200Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "6701826848961721774d79dd",
    //         "date": "2024-10-08T00:00:00.000Z",
    //         "time": "15:30",
    //         "status": "available",
    //         "doctor": "6701691de460030022321398",
    //         "createdAt": "2024-10-05T18:16:08.394Z",
    //         "updatedAt": "2024-10-05T18:16:08.394Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "6701826d48961721774d79e2",
    //         "date": "2024-10-08T00:00:00.000Z",
    //         "time": "11:30",
    //         "status": "available",
    //         "doctor": "6701691de460030022321398",
    //         "createdAt": "2024-10-05T18:16:13.909Z",
    //         "updatedAt": "2024-10-05T18:16:13.909Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "6701827548961721774d79e7",
    //         "date": "2024-10-08T00:00:00.000Z",
    //         "time": "12:30",
    //         "status": "available",
    //         "doctor": "6701691de460030022321398",
    //         "createdAt": "2024-10-05T18:16:21.376Z",
    //         "updatedAt": "2024-10-05T18:16:21.376Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "6701827b48961721774d79ec",
    //         "date": "2024-10-08T00:00:00.000Z",
    //         "time": "12:00",
    //         "status": "available",
    //         "doctor": "6701691de460030022321398",
    //         "createdAt": "2024-10-05T18:16:27.595Z",
    //         "updatedAt": "2024-10-05T18:16:27.595Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "6701828648961721774d79f1",
    //         "date": "2024-10-09T00:00:00.000Z",
    //         "time": "12:30",
    //         "status": "available",
    //         "doctor": "6701691de460030022321398",
    //         "createdAt": "2024-10-05T18:16:38.676Z",
    //         "updatedAt": "2024-10-05T18:16:38.676Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "6701828c48961721774d79f6",
    //         "date": "2024-10-09T00:00:00.000Z",
    //         "time": "11:30",
    //         "status": "available",
    //         "doctor": "6701691de460030022321398",
    //         "createdAt": "2024-10-05T18:16:44.530Z",
    //         "updatedAt": "2024-10-05T18:16:44.530Z",
    //         "__v": 0
    //     }
    // ],

    // {
    //     5: {
    //         dayNumber: 5, 
    //         dayName: 'Sat'
    //         disabled: true,
    //         appointmentsAM: [ { time: '11:00', _id: '6701691de460030022321398', disabled:false}],
    //         appointmentsPM: [],
    //     }
    // }
}

