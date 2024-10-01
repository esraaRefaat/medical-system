import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import DoctorAvatar from './DoctorAvatar'

export default function DoctorOverview({ avatar, fullName, specialization }) {
    return (
        <View style={styles.doctorOverview}>
            <DoctorAvatar avatar={avatar} dimensions={100} />
            <View style={styles.headers}>
                <Text style={styles.fullName}>{fullName}</Text>
                <Text style={styles.specialization}>{specialization}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    doctorOverview: {
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headers: {
        gap: 4
    },
    fullName: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    specialization: {
        color: 'gray'
    }
})