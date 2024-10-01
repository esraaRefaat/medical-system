import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Day = ({ dayName, dayNumber, status }) => {
    return (
        <View style={{ ...styles.container, }}>
            <Text>{dayName}</Text>
            <Text style={styles.bold}>{dayNumber}</Text>
        </View>
    )
}

export default Day

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: '#e4e6ea',
        borderRadius: 10,
        gap: 4
    },
    active: {
        backgroundColor: '#0f5dd0',
        borderColor: '#0f5dd0',
        color: 'white',
    },
    disapled: {
        color: '#9fa0a7',
        backgroundColor: '#e4e6ea'
    },
    bold: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})