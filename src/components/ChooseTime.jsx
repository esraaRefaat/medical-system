import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TimeSet from './TimeSet';


const ChooseTime = ({ title, data }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.h2}>{title} Set</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{ gap: 16 }}
                data={data}
                keyExtractor={(time) => time._id}
                renderItem={({ item }) => <TimeSet onPress={() => { }} time={item.time} disapled={item.disapled} />}
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