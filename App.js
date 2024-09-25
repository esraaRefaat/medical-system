
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Root from './Navigation/root';

import Tabs from './Navigation/Tabs';
import { StatusBar } from 'expo-status-bar';



export default function App() {
  return (
    <>
    <NavigationContainer>
   <Root></Root>
   {/* <Drawer></Drawer> */}
   {/* <Tabs></Tabs> */}
   </NavigationContainer>
   <StatusBar hidden></StatusBar>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
