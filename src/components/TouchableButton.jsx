

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import React from 'react'


const MidBlue = '#0f5dd0';


const TouchableButton = ({ title, onPress, otherStyle }) => {
    return (

        <TouchableOpacity activeOpacity={0.8} style={[styles.button, otherStyle]} onPress={onPress}>
            <View>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        backgroundColor: MidBlue,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 50,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14
    }
})



export default TouchableButton