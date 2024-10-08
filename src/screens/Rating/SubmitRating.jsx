import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as NavigationBar from 'expo-navigation-bar';
import CommentInput from '../../components/CommentInput';
import TouchableButton from '../../components/TouchableButton';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import routes from '../../utils/routes';

axios.defaults.baseURL = 'https://medical-system-server.onrender.com/api/v1'



const SubmitRating = () => {
    const navigation = useNavigation();

    const [description, setDescription] = useState('');
    const [stars, setStars] = useState('');


    const handleAddReview = async () => {
        try {
            if (description.trim() && stars) {
                const doctor = '6704799764211d519b194d9a';
                const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzAwM2Y0YjczNjIyODkzNjgzNGQ3YTQiLCJyb2xlIjoicGF0aWVudCIsImlhdCI6MTcyODM0NjM1NX0.e9ENFoB_0wjDLgJfbC0h03tJXEfukSWj3ZAKbrsgLRk'

                const res = await axios.post('/reviews', {
                    description,
                    stars,
                    doctor
                }, {
                    headers: {
                        token
                    }
                });
                setDescription('')
                navigation.navigate(routes.home);

            } else {
                Alert.alert('You Should add both description and rating!');
            }
        } catch (err) {
            console.log(err);
        }

    };


    useEffect(() => {
        NavigationBar.setBackgroundColorAsync('white');
    }, [])


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <Text style={styles.h1}>Share with us your experiment</Text>
                    <Text style={styles.description}>You can talk about the advantages and disadvantages and give an appropriate rating.</Text>
                </View>
                <CommentInput description={description} setDescription={setDescription} stars={stars} setStars={setStars} />
                <View style={styles.bottomAction}>
                    <TouchableButton title={"Add Review"} onPress={handleAddReview} />
                </View>
            </View>
            <StatusBar style='dark' />
        </SafeAreaView>
    )
}

export default SubmitRating

const styles = StyleSheet.create({
    container: {
        padding: 16,
        gap: 32,
        height: '100%',
    },
    h1: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    h2: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    description: {
        color: 'gray'
    },
    topSection: {
        gap: 8
    },
    bottomAction: {
        borderColor: '#e4e6ea',
        borderTopWidth: 1,
        alignItems: 'center',
        paddingVertical: 16,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0

    }
})