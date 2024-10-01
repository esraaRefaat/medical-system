import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TimeSet = ({ time }) => {
    return (
        <View style={{ ...styles.container, }}>
            <Text>{time}</Text>
        </View>
    )
}

export default TimeSet

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 45,
        borderWidth: 1,
        borderColor: '#e4e6ea',
        borderRadius: 16,
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
})