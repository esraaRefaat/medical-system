import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import ChooseDay from '../../components/ChooseDay'
import ChooseTime from '../../components/ChooseTime'
import TouchableButton from '../../components/TouchableButton'



const AppointmentVisitTime = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <Text style={styles.h1}>Select your visit date & Time</Text>
                    <Text style={styles.description}>You can choose the date and time from the available doctor's schedule</Text>

                </View>

                <ChooseDay />
                <ChooseTime title={'Morning'} />
                <ChooseTime title={'Afternoon'} />

                <View style={styles.bottomAction}>
                    <TouchableButton onPress={() => { }} title={'Confirm'} />
                </View>

            </View>


            <StatusBar style='dark' />
        </SafeAreaView>
    )
}

export default AppointmentVisitTime

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