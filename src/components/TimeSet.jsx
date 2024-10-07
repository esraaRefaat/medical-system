import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const TimeSet = ({ time, active, disabled, onPress }) => {
    return (
        <TouchableOpacity disabled={disabled} activeOpacity={0.8} onPress={onPress} style={[styles.container, disabled && styles.disapled, (active && !disabled) && styles.active]}>
            <Text style={[disabled && styles.disapledText, (active && !disabled) && styles.activeText]}>{time}</Text>
        </TouchableOpacity>
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