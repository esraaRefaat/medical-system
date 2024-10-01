import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Headers() {
    return (
        <View style={styles.headers}>
            <Text style={styles.title}>
                You have successfully made an appoinment
            </Text>
            <Text style={styles.subTitle}>
                The appoinment confirmation has been send to your email.
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    headers: {
        gap: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: '900',
        textAlign: 'center'
    },
    subTitle: {
        color: 'gray',
        textAlign: 'center',

    }
})