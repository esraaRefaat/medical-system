import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import DoctorAvatar from './DoctorAvatar'
import RatingBuilder from './RatingBuilder'

export default function DoctorCardWithExpandedRating({ avatar, fullName, specialization, rating }) {
    return (
        <View style={styles.cardRow}>
            <View style={styles.avatarSection}>
                <DoctorAvatar otherStyles={{ borderWidth: 0 }} avatar={avatar} dimensions={80} />
            </View>
            <View style={styles.infoColumn}>
                <View style={styles.rating}>
                    <RatingBuilder rating={rating} />

                    <Text style={styles.grayText}>{rating}</Text>
                </View>
                <Text style={styles.boldText}>Dr. {fullName}</Text>
                <Text style={styles.grayText}>{specialization}</Text>
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