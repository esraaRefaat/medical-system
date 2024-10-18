import React, { useState } from 'react'
import { Calendar } from '../assets/svgIcons';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import CustomText from './customText';
import { GREY, PRIMARY, TEXT_GREY } from '../styles/colors';



const Input = ({
    lable,
    containerStyle,
    onChangeText,
    Placeholder,
    Value }) => {

    const [focus, setFocus] = useState(false)
    return (
        <View style={[styles.container, containerStyle]}>

            <View style={{ flexDirection: 'column' }}>
                <View
                    style={styles.textView}
                >
                    <Text style={styles.lableStyle}>{lable}</Text>
                </View>
                <View
                    style={[styles.textInputView, { borderColor: focus ? PRIMARY : '#D2D6DB', borderWidth: 1 }]}
                >
                    <TextInput
                        style={{ height: '100%', width: '100%', paddingHorizontal: 12, color: GREY }}
                        onFocus={() => {
                            setFocus(true)

                        }}
                        onEndEditing={() =>
                            setFocus(false)
                        }
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
        fontSize: 14, 
        color: TEXT_GREY,
         fontFamily: "Bold" ,
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
        height: 49,
        borderRadius: 12,
    },
    showPassTouch: {
        alignSelf: 'center',

    },
    textView: {
       paddingBottom:10
    }

})

export default Input;