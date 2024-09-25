import { NavigationContainer } from '@react-navigation/native';
import Root from './Navigation/root';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  return (
    <>
    <NavigationContainer>
   <Root></Root>
   </NavigationContainer>
   <StatusBar hidden></StatusBar>
   </>
  );
}


