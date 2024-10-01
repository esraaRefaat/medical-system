import { View, StyleSheet } from 'react-native'
import React from 'react'

const solidBlue = '#1552b4';


const PaymentSuccessCard = ({ children }) => {
    return (

        <View style={styles.card}>
            {children}
        </View>

    )
}


const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        backgroundColor: '#fff',
        height: '90%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20

    },
})



export default PaymentSuccessCard