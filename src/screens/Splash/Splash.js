import React, { useEffect} from 'react';
import { View, Image } from 'react-native';
import routes from '../../utils/routes';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions, useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  const navigateTo = () => {
    AsyncStorage.getItem('notFirst').then((notFirst) => {
      if (!notFirst) {
        AsyncStorage.setItem('notFirst', "true")
        setTimeout(function () {
          navigation.dispatch(
            StackActions.replace(routes.onboarding)
          )
        }, 1500);
      }
      else {
        setTimeout(function () {
          navigation.dispatch(
            StackActions.replace(routes.signup)
          )
          // navigation.dispatch(
          //   StackActions.replace(routes.medicalrecords)
          // )
        }, 1500);
      }
    })
  };

  useEffect(() => {
      navigateTo()
      }, []);
    
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/FaturedIcon.png')} />
    </View>
  );
};



export default Splash;