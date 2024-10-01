import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TimeSet from './TimeSet';


const ChooseTime = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.h2}>{title} Set</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{ gap: 16 }}
                data={[{ id: 1, time: '10:00' }, { id: 2, time: '10:00' }, { id: 3, time: '10:00' }, { id: 4, time: '10:00' }]}
                keyExtractor={(time) => time.id}
                renderItem={(time) => <TimeSet time={time.item.time} />}
            />
        </View>
    )
}

export default ChooseTime



const styles = StyleSheet.create({
    container: {
        gap: 16
    },
    h2: {
        fontSize: 20,
        fontWeight: 'bold'
    },

})