import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import StarRating from 'react-native-star-rating-widget';



const CommentInput = ({ description, setDescription, stars, setStars }) => {

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.input}
                placeholder="Did you have a nice experiment?"
                value={description}
                onChangeText={setDescription}
                multiline
                textAlignVertical='top'
            />
            <View style={styles.rating}>
                <StarRating
                    rating={stars}
                    onChange={setStars}
                    enableHalfStar={false}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 12,
    },

    input: {
        height: 150,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        fontSize: 22,
        borderRadius: 8,
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

});

export default CommentInput;
