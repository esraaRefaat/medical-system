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
    list: {
        flex: 1,
        paddingHorizontal: 16,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e5e7eb',
        borderRadius: 10,
        padding: 16,
        marginBottom: 10,
    },
    dateContainer: {
        alignItems: 'center',
    },
    dateText: {
        color: PRIMARY,
        fontSize: 16,
        fontFamily: 'Bold',
    },
    newBadge: {
        backgroundColor: PRIMARY,
        color: '#fff',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 4,
        marginTop: 5,
        fontFamily: 'Regular'
    },
    recordContent: {
        flex: 1,
        marginLeft: 16,
    },
    recordTitle: {
        color: TEXT_GREY,
        fontSize: 16,
        fontFamily: 'Bold',
    },
    recordSubtitle: {
        color: PRIMARY,
        fontSize: 14,
        fontFamily: 'Medium'
    },
    prescription: {
        color: TEXT_GREY,
        fontSize: 12,
        fontFamily: 'Medium'
    },

    moreButton: {
        paddingHorizontal: 10,
    },
    moreIcon: {
        color: PRIMARY,
        fontSize: 18,
    },
    footerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 16,
    },
    viewButton: {
        backgroundColor: '#333',
        padding: 10,
        borderRadius: 8,
    },
    addButton: {
        backgroundColor: PRIMARY,
        padding: 10,
        borderRadius: 8,
    },
    footerButtonText: {
        color: '#fff',
        fontSize: 15,
        fontFamily: 'Bold',
    },
    emptyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    emptyText: {
        color: PRIMARY,
        fontSize: 18,
    },
    imageContainer: {
        marginBottom: 40,
        alignSelf: 'center'
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginTop: 34
    },
    title: {
        fontSize: 22,
        fontFamily: 'Bold',
        color: PRIMARY,
        textAlign: 'center',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: TEXT_GREY,
        textAlign: 'center',
        marginBottom: 30,
        fontFamily: 'Regular'
    },
    button: {
        backgroundColor: 'linear-gradient(90deg, #4CA1AF, #2C3E50)',
        paddingVertical: 15,
        paddingHorizontal: 80,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default styles;