import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View ,Text, Button } from 'react-native';
import routes from '../utils/routes';

const Home = () => {
    const {navigate}=useNavigation()
    return (
        <View>
            <Text>Home Screen</Text>
            <Button onPress={()=>navigate(routes.about )} title='go to About'></Button>

            {/* <Button onPress={()=>navigation.navigate('about' )} title='go to About'></Button> */}
        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;
