// src/screens/DoctorInfoUpdateView/styles.js

import { StyleSheet } from "react-native";
import {
  DARK_ORANGE,
  SEMI_GRAY,
  WHITE,
  GRAY,
  BLACK,
  PRIMARY,
  TEXT_GREY,
  DARK_RED,
} from "../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: WHITE,
    width: "auto",
  },
  backbutton: {
    alignSelf: "flex-start",
    paddingHorizontal: 24,
    marginTop: 20,
  },
  headerContainer: {
    justifyContent: "center", // Center the content horizontally
    alignItems: "center", // Center the content vertically
    position: "relative", // Relative positioning for arrow to stay at the left
    width: "100%", // Ensure the container takes full width
    paddingHorizontal: 20, // Add padding if necessary
  },
  backbuttontouch: {
    position: "absolute", // Position the back button absolutely
    left: 20, // Place it on the left side of the screen
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center", // Ensure the text is centered
  },
  Text: {
    alignSelf: "flex-start",
    paddingHorizontal: 16,
    marginTop: 20,
  },
  inputcontainerView: {
    width: 400,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  input: {
    height: 49,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: SEMI_GRAY,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  inputLabel: {
    fontSize: 10,
    color: TEXT_GREY,
    fontFamily: "Regular",
  },
  label: {
    fontSize: 16,
    color: TEXT_GREY,
    fontFamily: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  specialtySelector: {
    height: 49,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: SEMI_GRAY,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 8,
  },
  imagePicker: {
    height: 100,
    borderWidth: 1,
    borderColor: SEMI_GRAY,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    position: "relative",
  },
  profileImage: {
    width: "auto",
    height: "auto",
    borderRadius: 8,
  },
  imagePreviewContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  imageWrapper: {
    position: "relative",
    marginRight: 10,
    marginBottom: 10,
  },
  verifyingImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  removeImageButton: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: DARK_RED,
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  removeImageText: {
    color: WHITE,
    fontWeight: "bold",
    fontSize: 12,
  },
  buttonStyle: {
    marginTop: 30,
    backgroundColor: PRIMARY,
    alignSelf: "center",
    width: "90%",
    height: 50,
    borderRadius: 8,
  },
  accountView: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 35,
  },
  ShowMsgstyle: {
    height: 60,
    borderRadius: 10,
    marginHorizontal: 25,
    position: "absolute",
    bottom: 16,
    width: "90%",
    alignSelf: "center",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: WHITE,
    borderRadius: 10,
    padding: 20,
    maxHeight: "80%",
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
    alignSelf: "center",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 8,
  },
  errorText: {
    color: DARK_RED,
    fontSize: 12,
    marginTop: 4,
  },
  // In styles.js
  docsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginVertical: 10,
  },
  docImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    color: "#fff",
    fontSize: 16,
  },
  removeDocButton: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 100,
    padding: 5,
  },
  removeDocText: {
    color: "white",
    fontWeight: "bold",
  },
  docWrapper: {
    position: "relative",
    marginRight: 10,
    marginTop: 10,
  },

  profileImagePicker: {
    position: "relative",
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e1e1e1",
    // Removed 'overflow: hidden' so the plus button can extend outside the circle
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  overlay: {
    position: "absolute",
    bottom: -5, // Move further outside
    right: -5, // Move further outside
    backgroundColor: PRIMARY,
    width: 30, // Keep size for visibility
    height: 30,
    borderRadius: 50, // Circular shape
    justifyContent: "center",
    alignItems: "center",
  },
  plusText: {
    color: "#fff",
    fontSize: 24, // Larger plus sign for better visibility
  },
});

export default styles;
