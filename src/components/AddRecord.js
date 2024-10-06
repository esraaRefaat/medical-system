import React, { useState } from 'react'
import { PRIMARY, INACTIVE ,GREY} from '../styles/colors';
import { StyleSheet, TextInput } from 'react-native';


const AddRecord = ({ text, disabled = false, onPress, Value }) => {
    const [focus, setFocus] = useState(false)
    return (
        <TextInput
            style={[styles.input, { borderColor: focus ? PRIMARY : INACTIVE, borderWidth: 1 }]}
            placeholder={text}
            placeholderTextColor='#8D8D8D'
            value={Value}
            disabled={disabled}
            onChangeText={onPress}
            onFocus={() => {
                setFocus(true)

            }}
            onEndEditing={() =>
                setFocus(false)
            }
        />
    )
}

const styles = StyleSheet.create({
    input: {
        color: GREY,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        fontSize: 16,
        marginBottom: 16,
        height:48
    },

})

export default AddRecord;