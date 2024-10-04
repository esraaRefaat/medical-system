import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import ChooseDay from '../../components/ChooseDay'
import ChooseTime from '../../components/ChooseTime'
import TouchableButton from '../../components/TouchableButton'
import * as NavigationBar from 'expo-navigation-bar';



const ConfirmAppointment = () => {
    const [day, setDay] = useState();
    const [time, setTime] = useState();

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

                <ChooseDay activeDay={day} setDay={setDay} data={[{ id: 1, dayName: 'Wed', dayNumber: 10, status: 'active' }, { id: 2, dayName: 'Wed', dayNumber: 11, status: 'disabled' }, { id: 3, dayName: 'Wed', dayNumber: 12, status: 'available' }]} />
                <ChooseTime title={'Morning'} activeTime={time} setActiveTime={setTime} />
                <ChooseTime title={'Afternoon'} />

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