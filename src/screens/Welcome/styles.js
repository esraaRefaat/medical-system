import { StyleSheet } from 'react-native';
import { PRIMARY } from '../../styles/colors';


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#2145BF',
      width:'100%',
      height:'100%'
    },
    image: {
      width: 88,
      resizeMode: 'cover',
      height: 88
    },
    text:{
        color:'#FDFDFD',
        fontSize:28,
        fontFamily:'Bold'
    }
  });

export default styles;