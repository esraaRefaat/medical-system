import React, { useState } from 'react'
import { Calendar } from '../assets/svgIcons';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from './customText';



const CalendarInput = ({
    lable,
    containerStyle,
    onPress,
    value }) => {


    return (
        <View style={[styles.container, containerStyle, {
            backgroundColor: '#F7F7F7'
        }]}>

            <View style={{ flexDirection: 'column' }}>
                <View
                    style={styles.textView}
                >
                    <Text style={[styles.lableStyle, { color: '#969696' }]}>{lable}</Text>
                </View>
                <View
                    style={styles.textInputView}
                >
                    <CustomText
                        text={value}
                        color="GREY"
                        fontFamily='Regular'
                        size={14}
                        numberOfLines={1}
                    />

                    <TouchableOpacity
                        activeOpacity={.75}
                        style={styles.showPassTouch}
                        onPress={onPress}
                    >
                        <Calendar color={'#757575'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 65,
        borderRadius: 5
    },
    lableStyle: {
        paddingHorizontal: 16,
        paddingTop: 6,
        fontSize: 10,
        fontFamily: 'Regular'
    },
    textInput: {
        paddingVertical: 0,
        paddingHorizontal: 0,
        fontSize: 14,
    },
    text: {
        marginLeft: (8),

    },
    textInputView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
        paddingHorizontal: 16
    },
    showPassTouch: {
        alignSelf: 'center',

    },
    textView: {
        width: '100%',
    }

})

export default CalendarInput;