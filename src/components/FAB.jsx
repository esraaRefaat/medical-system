import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'



const FAB = ({ onPress, Icon }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Icon color={'#254EDB'} />
            {/* <Text>asfd</Text> */}
        </TouchableOpacity>
    )
}

export default FAB

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#cfdaff',
        justifyContent: 'center',
        alignItems: 'center'
    }
})