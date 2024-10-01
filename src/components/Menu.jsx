import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DownArrowIcon from './Icons/DownArrowIcon'

const Menu = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <DownArrowIcon />
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafb',
        padding: 8,
        borderWidth: 1,
        borderColor: '#ecedf0',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold'
    }
})