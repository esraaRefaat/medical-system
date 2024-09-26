import React, { useEffect} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import routes from '../../utils/routes';
import styles from './styles';

const Splash = ({ navigation  }) => {
    useEffect(() => {
        setTimeout(() => {
          navigation.navigate(routes.onboarding);
        }, 2500);
      }, []);
    
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/FaturedIcon.png')} />
    </View>
  );
};



export default Splash;