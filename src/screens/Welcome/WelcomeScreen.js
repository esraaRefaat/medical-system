import React, { useEffect} from 'react';
import { View, Image ,Text} from 'react-native';
import routes from '../../utils/routes';
import styles from './styles';

const WelcomeScreen = ({ navigation  }) => {
    useEffect(() => {
        setTimeout(() => {
          navigation.navigate(routes.onboarding);
        }, 2500);
      }, []);
    
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/welcome.png')} />
      <Text style={styles.text} >Hello  Cheers Design 👋</Text>
    </View>
  );
};



export default WelcomeScreen;