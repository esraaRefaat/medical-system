import React, { useState } from 'react'
import { Calendar } from '../assets/svgIcons';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import CustomText from './customText';



const Input = ({
    lable,
    containerStyle,
    onChangeText,
    Placeholder,
    Value }) => {


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
                  <TextInput 
                  style={{height:40,width:'100%'}}
                  placeholder={Placeholder}
                  placeholderTextColor={'#969696'}
                  onChangeText={(text) => {
                    onChangeText(text)
                }}
                  value={Value}
                  />
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
        height: 40,
        paddingHorizontal: 16,
    },
    showPassTouch: {
        alignSelf: 'center',

    },
    textView: {
        width: '100%',
    }

})

export default Input;