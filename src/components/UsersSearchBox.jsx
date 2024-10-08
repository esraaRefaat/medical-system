import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import SearchIcon from './Icons/SearchIcon';

const UsersSearchBox = ({ setSearchName }) => {
    const input = useRef(null);
    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = () => {
        setSearchName(searchValue);
        setSearchValue(''); // Clear the input after submitting
        input.current.blur(); // Dismiss the keyboard
    };

    return (
        <TouchableOpacity activeOpacity={1} onPress={() => input.current.focus()}>
            <View style={styles.container}>
                <SearchIcon />
                <TextInput
                    ref={input}
                    style={styles.textInput}
                    value={searchValue}
                    placeholder='Search Doctor'
                    onChangeText={setSearchValue} // Simplified state update
                    onSubmitEditing={handleSubmit} // Call handleSubmit on submit
                />
            </View>
        </TouchableOpacity>
    );
};

export default UsersSearchBox;

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 16,
        paddingHorizontal: 16,
    },
    textInput: {
        fontSize: 18,
        flex: 1, // Allows the input to take the remaining space
    },
});
