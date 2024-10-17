import { StyleSheet, I18nManager } from 'react-native';
import { DARK_ORANGE, SEMI_GRAY, WHITE, GRAY, BLACK, PRIMARY } from '../../../styles/colors';


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
    // backbutton: {
    //     alignSelf: "flex-start",
    //     paddingHorizontal: 24,
    //     marginTop: 20,
    // },
    backbuttontouch: {
        width: 24,
        height: 24,
    },
    logoText: {
        alignSelf: "flex-start",
        // paddingHorizontal: 16,
        marginTop: 50
    },
    Text: {
        alignSelf: "flex-start",
        paddingHorizontal: 16,
        marginTop: 8
    },
    inputcontainerView: {
        width: '100%',
        // paddingHorizontal: 16
    },
    emailInput: {
        height: 49,
        borderRadius: 12,
        flexDirection: 'row',
        //  paddingHorizontal: 16,
    },
    buttonStyle: {
        marginTop: 42,
        backgroundColor: PRIMARY,
        alignSelf: 'center',
    },
    accountView: {
        flexDirection: 'row',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 35
    },
    radioView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16
    },
    ShowMsgstyle: {
        height: 60,
        borderRadius: 10,
        marginHorizontal: 25,
        position: 'absolute',
        bottom: 16,
        width: '90%',
        alignSelf: 'center'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        elevation: 10, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        height:'80%'
    },
    modalTitle: {
        textAlign: 'center',
        marginBottom: 10,
        
    },
    modalText: {
        fontSize: 14,
        color: '#333',
        textAlign: 'left',
    },
    modalCloseButton: {
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: PRIMARY,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    modalCloseText: {
        color: 'white',
        fontSize: 16,
        fontFamily:'Medium'
    },
    checkboxContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10
    },
    linkText:{
        fontFamily:'SemiBold',
        color:PRIMARY,
        fontSize:14
    }

})

export default styles;