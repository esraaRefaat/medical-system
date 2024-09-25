import React from 'react';
import { StyleSheet, View ,Text, Button} from 'react-native';
import routes from '../utils/routes';

const About = ({navigation}) => {
    return (
        <View>
            <Text> About Screen </Text>
            <Button title='go to users' onPress={()=>console.log('jhjhj')}></Button>
        </View>
    );
}

const styles = StyleSheet.create({})

export default About;
