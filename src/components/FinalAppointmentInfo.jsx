import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import menuBorad from './../assets/menu-board.png'

export default function FinalAppointmentInfo({ date }) {
    return (
        <View style={styles.finalAppoinmentInfo}>
            <View style={styles.image}>
                <Image source={menuBorad} />
            </View>
            <View style={styles.info}>
                <Text style={styles.title}>Appointment</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    finalAppoinmentInfo: {
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center',
    },
    image: {
        backgroundColor: '#c6d2ec',
        padding: 8,
        borderRadius: 8
    },
    info: {
        gap: 4,
    },
    title: {
        color: 'gray',
        fontWeight: '600',

    },
    date: {
        fontWeight: 'bold',
        fontSize: 16

    }


})