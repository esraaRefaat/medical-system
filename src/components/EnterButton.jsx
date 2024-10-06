import { StyleSheet, View } from 'react-native'
import React from 'react'
import EnterArrow from './Icons/EnterArrow'

const EnterButton = () => {
    return (
        <View style={styles.container}>
            <EnterArrow />
        </View>
    )
}

export default EnterButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f5fd',
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})