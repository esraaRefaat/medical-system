import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import SearchIcon from './Icons/SearchIcon'

const SearchBox = ({ setSearchName }) => {
    const input = useRef(null)
    const [searchValue, setSearchValue] = useState('')
    return (
        <TouchableOpacity activeOpacity={1} onPress={() => {
            input.current.focus();
        }}>
            <View style={styles.container}>
                <SearchIcon />
                <TextInput ref={input} style={styles.textInput} value={searchValue} placeholder='Search Doctor' onChangeText={(e) => {
                    setSearchValue(e)
                }} onSubmitEditing={(e) => {
                    setSearchName(searchValue);
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