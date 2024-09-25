import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View,Text } from 'react-native';

const UserDetails = () => {
    const {params:{id}}=useRoute()
    // console.warn(id)
    return (
        <View>
            <Text>UserDetails of {id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default UserDetails;
