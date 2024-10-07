import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ArrowPrev from './Icons/ArrowPrev'
import ArrowNext from './Icons/ArrowNext'





const DatePickerArrow = ({ direction }) => {
    return (
        <View>
            {direction === 'left' ? <ArrowPrev /> : <ArrowNext />}
        </View>
    )
}

export default DatePickerArrow

const styles = StyleSheet.create({})