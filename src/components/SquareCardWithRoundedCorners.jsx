import { View, StyleSheet } from 'react-native'
import React from 'react'

const solidBlue = '#1552b4';


const SquareCardWithRoundedCorners = ({ image }) => {
    return (

        <View style={styles.card}>
            {image}
        </View>

    )
}


const styles = StyleSheet.create({
    card: {
        borderRadius: 25,
        backgroundColor: '#fff',
        borderWidth: 10,
        borderColor: solidBlue,
        height: 110,
        width: 110,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        bottom: -35,
        zIndex: 2
    },
})



export default SquareCardWithRoundedCorners