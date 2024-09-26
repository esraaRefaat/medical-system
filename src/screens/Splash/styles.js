import { StyleSheet } from 'react-native';
import { BACKGROUND } from '../../styles/colors';


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:BACKGROUND,
      width:'100%',
      height:'100%'
    },
    image: {
      width: 56,
      resizeMode: 'cover',
      height: 56
    }
  });

export default styles;