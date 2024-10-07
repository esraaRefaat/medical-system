import { StyleSheet, I18nManager } from 'react-native';
import { PRIMARY, GREY, TEXT_GREY } from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Viewheader: {
        fontSize: 24,
        fontFamily: 'Bold',
        marginBottom: 20,
        color:PRIMARY
    },
    detail: {
        fontSize: 18,
        marginBottom: 10,
        color: '#000',
        fontFamily:'Regular'
    },
    Viewcontainer:{
        paddingHorizontal:16
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 34,
        paddingTop: 16
    },
    headerText: {
        fontSize: 16,
        fontFamily: 'Bold',
        color: GREY,
    },
});

export default styles;