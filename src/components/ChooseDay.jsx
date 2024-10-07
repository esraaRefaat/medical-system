import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Day from './Day';

// const getFormattedDate = () => {
//     const date = new Date();
//     const month = date.toLocaleString('en-US', {
//         month: 'short'
//     })
//     const year = date.getFullYear();
//     return `${month} ${year}`
// }

const ChooseDay = ({ data, activeKey, setActiveKey }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.h2}>Choose the day you want</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{ gap: 16 }}
                data={data}
                keyExtractor={(day) => `${day.dayNumber}/${day.month}`}
                renderItem={({ item }) => <Day onPress={() => setActiveKey(`${item.dayNumber}/${item.month}`)} month={item.month} dayName={item.dayName} dayNumber={item.dayNumber} active={(activeKey == `${item.dayNumber}/${item.month}`)} disapled={item.disabled} />}
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