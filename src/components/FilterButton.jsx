import { StyleSheet, View } from 'react-native'
import React from 'react'
import FilterIcon from './Icons/FilterIcon'

const FilterButton = () => {
    return (
        <View style={styles.container}>
            <FilterIcon />
        </View>
    )
}

export default FilterButton

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