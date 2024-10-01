import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import EditIcon from './Icons/EditIcon'
import FinalAppointmentInfo from './FinalAppointmentInfo'

const ScheduleDate = () => {
    return (
        <View style={styles.container}>
            <View style={styles.firstRow}>
                <Text style={styles.header}>Schedule Date</Text>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={styles.edit}>
                    <EditIcon />
                    <Text style={styles.textButton}>Edit</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.secondRow}>
                <FinalAppointmentInfo date={'Wednesday, 10 Jan 2024, 11:00'} />


            </View>
        </View>
    )
}

export default ScheduleDate

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        gap: 24
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20
    },
    firstRow: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    edit: {
        flexDirection: 'row',
        gap: 8
    },
    textButton: {
        color: "#254EDB",
        fontSize: 18,
        fontWeight: 'bold'
    }
})