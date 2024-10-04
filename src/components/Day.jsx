import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Day = ({ dayName, dayNumber, active, disapled, onPress }) => {
    return (

        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[styles.container, disapled && styles.disapled, (active && !disapled) && styles.active]}>
            <Text style={[disapled && styles.disapledText, (active && !disapled) && styles.activeText]}>{dayName}</Text>
            <Text style={[styles.bold, disapled && styles.disapledText, (active && !disapled) && styles.activeText]}>{dayNumber}</Text>
        </TouchableOpacity>
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
    bold: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    disapled: {
        backgroundColor: '#e4e6ea'
    },
    disapledText: {
        color: '#9fa0a7',
    },
    active: {
        backgroundColor: '#0f5dd0',
        borderColor: '#0f5dd0',
    },
    activeText: {
        color: 'white'
    }
})