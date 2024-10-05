import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import DoctorAvatar from './DoctorAvatar'
import Star from './Icons/Star'

export default function DoctorCard({ avatar, fullName, specialization, fees, rating }) {
    return (
        <View style={styles.cardRow}>
            <View style={styles.avatarSection}>
                <DoctorAvatar avatar={avatar} dimensions={60} />
            </View>
            <View style={styles.infoColumn}>
                <Text style={styles.boldText}>Dr. {fullName}</Text>
                <Text style={styles.grayText}>{specialization}</Text>
                <Text style={styles.boldText}>{fees} $</Text>
            </View>
            <View style={styles.rating}>
                <Star />
                <Text style={styles.grayText}>{rating}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardRow: {
        flexDirection: 'row',
        gap: 16,
        paddingHorizontal: 20
    },
    avatarSection: {
    },
    infoColumn: {
        flexDirection: 'column',
        gap: 8,
        flexGrow: 1
    },
    rating: {
        flexDirection: 'row',
        gap: 8,

    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 16

    },
    grayText: {
        fontWeight: 'light',
        color: 'gray'
    },

})