import React, { useState } from 'react'
import { ShowPass, DontshowPass } from '../assets/svgIcons';
import { GREY ,INACTIVE,PRIMARY, TEXT_GREY} from '../styles/colors';
import { Keyboard, Text, View, StyleSheet, TextInput, TouchableOpacity, I18nManager, Platform } from 'react-native';


const CustomInput = ({
    lable,
    placeholder,
    password,
    containerStyle,
    onChangeText,
    forceLable = false,
    keyboardType = "default",
    autoFocus = false,
    editable = true,
    TextInputColor,
    lableStyle,
    leftIcon,
    Blur,
    value }) => {
    const [showPassword, setShowPassword] = useState(true)
    const [focus, setFocus] = useState(false)
    const [text, setText] = useState(value)



    return (
        <>
        <View 
    //     style={{ flexDirection: 'column', marginLeft: 8 }
    // }
    >
        <View
             style={styles.textView}
        >
            {(text != "" || focus || forceLable) &&
                <Text style={lableStyle}>{lable}</Text>
            }
        </View>
        <View style={[styles.container, containerStyle, 
         { borderColor: focus ? PRIMARY : '#D2D6DB', borderWidth: 1 }
        ]}>
            <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', }}>
                {/* {leftIcon} */}
              
                    <View
                        style={styles.textInputView}
                    >
                        <TextInput
                            onFocus={() => {
                                setFocus(true)

                            }}
                            onBlur={
                                Blur
                            }
                            // onSubmitEditing={Keyboard.dismiss}
                            textAlign={I18nManager.isRTL ? 'right' : 'left'}
                            onChangeText={onChangeText}
                            value={value}
                            onEndEditing={() =>
                                setFocus(false)
                            }
                            secureTextEntry={showPassword && password}
                            style={[
                                styles.textInput,
                                {

                                    color: GREY,
                                },

                            ]}
                            placeholder={placeholder}
                            placeholderTextColor={'#8D8D8D'}
                            fontFamily={'Regular'}
                            keyboardType={keyboardType}
                            autoFocus={autoFocus}
                            editable={editable}
                            autoCapitalize={'none'}
                        />
                    </View>

                </View>
                {password && <TouchableOpacity
                    activeOpacity={1}
                    style={styles.showPassTouch}
                    onPress={() => { setShowPassword(!showPassword) }}
                >
                    {showPassword ? <ShowPass /> : <DontshowPass />}
                </TouchableOpacity>}
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    textInput: {
        width: '90%',
        paddingVertical: 0,
        paddingHorizontal:12
    },
    text: {
        marginLeft: (8),

    },
    textInputView: {
        width: '96%',
        flexDirection: 'row',
        height: (33),
      
    },
    showPassTouch: {
        height: (18),
        alignSelf: 'center'

    },
    textView: {
        marginBottom:10,
        marginTop:16
      //  width: '100%',
    }

})

export default CustomInput;