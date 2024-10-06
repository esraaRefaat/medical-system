import { NavigationContainer } from '@react-navigation/native';
import Root from './src/Navigation/root';
import { StatusBar } from 'expo-status-bar';
import { Provider } from "react-redux";
import store from "./src/redux/store/store";
import { useFonts } from 'expo-font';
import FlashMessage from "react-native-flash-message";


export default function App() {
  const [loaded] = useFonts({
    'Bold': require('./src/assets/fonts/Manrope-Bold.ttf'),
    'ExtraBold': require('./src/assets/fonts/Manrope-ExtraBold.ttf'),
    'ExtraLight': require('./src/assets/fonts/Manrope-ExtraLight.ttf'),
    'Light': require('./src/assets/fonts/Manrope-Light.ttf'),
    'Medium': require('./src/assets/fonts/Manrope-Medium.ttf'),
    'Regular': require('./src/assets/fonts/Manrope-Regular.ttf'),
    'SemiBold': require('./src/assets/fonts/Manrope-SemiBold.ttf'),
  });
  if (!loaded) {
    return null
  }
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Root></Root>
        </NavigationContainer>
        <StatusBar hidden></StatusBar>
      </Provider>

      <FlashMessage position="bottom" />
    </>

  );
}


