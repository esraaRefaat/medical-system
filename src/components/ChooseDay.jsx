import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Day from './Day';

const getFormattedDate = () => {
    const date = new Date();
    const month = date.toLocaleString('en-US', {
        month: 'short'
    })
    const year = date.getFullYear();
    return `${month} ${year}`
}

const ChooseDay = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.h2}>Choose Day, {getFormattedDate()}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{ gap: 16 }}
                data={[{ id: 1, DayName: 'Wed', DayNumber: 10, status: 'active' }, { id: 2, DayName: 'Wed', DayNumber: 10, status: 'disabled' }, { id: 3, DayName: 'Wed', DayNumber: 10, status: 'available' }]}
                keyExtractor={(day) => day.id}
                renderItem={(day) => <Day dayName={day.item.DayName} dayNumber={day.item.DayNumber} />}
            />
        </View>
    )
}

export default ChooseDay



const styles = StyleSheet.create({
    container: {
        gap: 16
    },
    h2: {
        fontSize: 20,
        fontWeight: 'bold'
    },

})