import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const SelectPaymentMethod = () => {

    return (
        <View style={styles.container}>
            <View style={styles.firstRow}>
                <Text style={styles.header}>Select Payment Method</Text>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={styles.seeAll}>
                    <Text style={styles.textButton}>See All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.secondRow}>

                <PaymentMethod title={'test'} value={'test'} setPaymentMethod={() => { }} />
            </View>
        </View>
    )
}

export default SelectPaymentMethod


const PaymentMethod = ({ imageSrc, title, currentValue, setPaymentMethod }) => {
    const [active, setActive] = useState(false)
    return (
        <TouchableOpacity style={styles.PaymentMethod} activeOpacity={1} onPress={() => { setActive(true) }}>
            {/* <Image src={imageSrc} /> */}
            <Text style={styles.paymentTitle}>{title}</Text>
            <View style={[styles.radioButton, active ? styles.activeRadioButton : null]}>
                {active ? <View style={styles.blueCircle}></View> : null}
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        gap: 24
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20
    },
    firstRow: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    seeAll: {
        flexDirection: 'row',
        gap: 8
    },
    textButton: {
        color: "#254EDB",
        fontSize: 18,
        fontWeight: 'bold'
    },
    PaymentMethod: {
        flexDirection: 'row',

    },
    radioButton: {
        backgroundColor: '#f9fafb',
        width: 30,
        height: 30,
        borderColor: '#d5d9dd',
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'

    },
    activeRadioButton: {
        borderColor: '#254EDB',
    },
    blueCircle: {
        backgroundColor: '#254EDB',
        width: 14,
        height: 14,
        borderRadius: 7,
    },
    paymentTitle: {
        flexGrow: 1
    }
})