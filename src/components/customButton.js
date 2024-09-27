import React from 'react'
import { Header, Button } from 'react-native-elements';
import { Menu, Logout } from '../assets/svgIcons';
import { SECODARY, PRIMARY, INACTIVE, LIGHT, BACKGROUND, WHITE, DARK_ORANGE, ORANGE, LIGHT_ORANGE } from '../styles/colors';
import { TouchableHighlight, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from './customText';

const CustomButton = ({ text, disabled = false, onPress, containerStyle, leftIcon }) => {
    return (
        <TouchableOpacity
            onPress={(onPress)}
            activeOpacity={0.85}
            // underlayColor={ORANGE}
            disabled={disabled}
            style={[styles.Touch, { borderColor: disabled ? LIGHT_ORANGE : DARK_ORANGE }, containerStyle]}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                {leftIcon}
                <CustomText
                    color={disabled ? "white" : "white"}
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
        width: 273,
        height: 45,
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        // backgroundColor: BACKGROUND,
    },

})

export default CustomButton;