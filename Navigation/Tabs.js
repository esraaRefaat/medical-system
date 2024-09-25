import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from '../screens/Home';
import routes from '../utils/routes';
import About from '../screens/About';

const tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <tab.Navigator>
            <tab.Screen name={routes.home} component={Home} />
            <tab.Screen name={routes.about} component={About} />
           
     
     
        </tab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Tabs;
