import { StyleSheet, Dimensions } from 'react-native';
import { PRIMARY, INACTIVE, TEXT_GREY } from '../../styles/colors';





const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: height * 0.55,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'Bold',
    alignSelf: 'flex-start',
    marginTop: height * 0.1,
    paddingHorizontal: 16

  },
  text: {
    fontSize: 14,
    color: TEXT_GREY,
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    fontFamily: 'Medium',
    marginTop: height * 0.05

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 8
  },
  button: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    width: 163,
    height: 40
  },
  buttonPrimary: {
    backgroundColor: PRIMARY,
    borderRadius: 8,
    width: 163,
    height: 40
  },
  buttonText: {
    color: '#18181B',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Bold',
    paddingTop: 6
  },
  buttonStartedPrimary: {
    backgroundColor: PRIMARY,
    borderRadius: 8,
    width: '100%',
    height: 40
  },
  buttonStartedPrimaryText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Bold',
    paddingTop: 6
  },
  buttonPrimaryText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Bold',
    paddingTop: 6
  },
  paginationContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: height * 0.4,
    alignSelf: 'flex-start',
    paddingHorizontal: 16
  },
  dash: {
    width: 43,
    height: 4,
    marginHorizontal: 4,
    borderRadius: 90,
  },
  activeDash: {
    backgroundColor: PRIMARY,
  },
  inactiveDash: {
    backgroundColor: INACTIVE,
  },
});

export default styles;