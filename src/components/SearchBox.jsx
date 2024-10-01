import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import SearchIcon from './Icons/SearchIcon'

const SearchBox = ({ searchName, setSearchName }) => {
    const input = useRef(null)
    return (
        <TouchableOpacity activeOpacity={1} onPress={() => {
            input.current.focus();
        }}>
            <View style={styles.container}>
                <SearchIcon />
                <TextInput ref={input} style={styles.textInput} value={searchName} placeholder='Search Doctor' onChange={(e) => {
                    setSearchName(e)
                }} />
            </View>
        </TouchableOpacity>

    )
}

export default SearchBox

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 16,
        paddingHorizontal: 16
    },
    textInput: {
        fontSize: 18,

    }
})