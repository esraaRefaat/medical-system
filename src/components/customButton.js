import React from 'react'
import { WHITE,PRIMARY } from '../styles/colors';
import { TouchableHighlight, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from './customText';

const CustomButton = ({ text, disabled = false, onPress, containerStyle, leftIcon }) => {
    return (
        <TouchableOpacity
            onPress={(onPress)}
            activeOpacity={0.85}
            disabled={disabled}
            style={[styles.Touch, { borderColor: PRIMARY}, containerStyle]}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                {leftIcon}
                <CustomText
                    color={"WHITE"}
                    size={18}
                    text={text}
                    fontFamily='medium'
                />
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Touch: {
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        width:'90%',
    },

})

export default CustomButton;