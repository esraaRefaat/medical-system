import { StyleSheet, I18nManager } from 'react-native';
import { PRIMARY, GREY, TEXT_GREY } from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    label: {
        color: TEXT_GREY,
        fontSize: 12,
        marginBottom: 8,
    },
    buttonStyle: {
        marginTop: 50,
        backgroundColor: PRIMARY,
        alignSelf: 'center',
    },
});

export default styles;