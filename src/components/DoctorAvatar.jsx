
import { Image, StyleSheet } from 'react-native'
import React from 'react'

export default function DoctorAvatar({ avatar, dimensions, otherStyles }) {
    return (
        <Image style={[styles.doctorAvatar, { borderRadius: dimensions / 100 * 30 }, otherStyles]} source={{ uri: avatar }} width={dimensions} height={dimensions} />
    )
}


const styles = StyleSheet.create({

    doctorAvatar: {
        backgroundColor: '#F9F5FF',
        borderColor: '#92aaec',
        borderWidth: 1,
    },

})