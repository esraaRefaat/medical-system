import { StyleSheet, I18nManager } from 'react-native';
import { PRIMARY } from '../../../styles/colors';


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
    backbutton: {
        alignSelf: "flex-start",
        paddingHorizontal: 24,
        marginTop: 20,
    },
    backbuttontouch: {
       width:24,
       height:24,
    },
    logoText: {
        alignSelf: "flex-start",
        paddingHorizontal: 16,
        marginTop: 16
    },
    Text: {
        alignSelf: "flex-start",
        paddingHorizontal: 16,
        marginTop: 8
    },
    inputcontainerView: {
        width: '100%',
        paddingHorizontal: 16
    },
    emailInput: {
        height: 49,
        borderRadius: 8,
        flexDirection: 'row',
        paddingHorizontal: 16,
    },
    buttonStyle: {
        marginTop:70,
        backgroundColor: PRIMARY,
        alignSelf: 'center',
    },
    accountView: {
        flexDirection: 'row',
        alignSelf: 'center',
        position:'absolute',
        bottom:35
    },

})

export default styles;