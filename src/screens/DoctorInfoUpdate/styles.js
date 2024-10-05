// src/screens/DoctorInfoUpdateView/styles.js
import { StyleSheet } from 'react-native';
import { DARK_ORANGE, SEMI_GRAY, WHITE, GRAY, BLACK, PRIMARY, TEXT_GREY, DARK_RED } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: WHITE,
  },
  backbutton: {
    alignSelf: "flex-start",
    paddingHorizontal: 24,
    marginTop: 20,
  },
  backbuttontouch: {
    width: 24,
    height: 24,
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
    paddingHorizontal: 16,
    marginTop: 20,
  },
  input: {
    height: 49,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: SEMI_GRAY,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  inputLabel: {
    fontSize: 10,
    color: TEXT_GREY,
    fontFamily: 'Regular',
  },
  label: {
    fontSize: 14,
    color: TEXT_GREY,
    fontFamily: 'Regular',
    marginTop: 16,
    marginBottom: 8,
  },
  specialtySelector: {
    height: 49,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: SEMI_GRAY,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 8,
  },
  imagePicker: {
    height: 100,
    borderWidth: 1,
    borderColor: SEMI_GRAY,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  imagePreviewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  imageWrapper: {
    position: 'relative',
    marginRight: 10,
    marginBottom: 10,
  },
  verifyingImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  removeImageButton: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: DARK_RED,
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeImageText: {
    color: WHITE,
    fontWeight: 'bold',
  },
  buttonStyle: {
    marginTop: 30,
    backgroundColor: PRIMARY,
    alignSelf: 'center',
    width: '90%',
    height:50,
    borderRadius: 8,
  },
  accountView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 35,
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
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: WHITE,
    borderRadius: 10,
    padding: 20,
    maxHeight: '80%',
  },
  modalItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: SEMI_GRAY,
  },
  modalItemText: {
    fontSize: 16,
    color: BLACK,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: PRIMARY,
    alignSelf: 'center',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8,
  },
});

export default styles;
