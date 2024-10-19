import React, { useState, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Modal, View, TouchableOpacity, Text, Platform, ScrollView } from "react-native";
import { KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Yup from "yup";
import styles from "./styles";
import CustomText from "../../../components/customText";
import CustomInput from "../../../components/customInput";
import CustomButton from "../../../components/customButton";
import RadioButtonGroup from "../../../components/RadioButtonGroup";
import { SMS, PASSWORD, User, ALERT_MSG } from "../../../assets/svgIcons";
import routes from "../../../utils/routes";
import { Formik, Field } from "formik";
import { useDispatch } from "react-redux";
import { authAction } from "../../../redux/store/slices/authSlice";
import { APP_BASE_URL, SIGN_UP } from "@env";
import { showMessage } from "react-native-flash-message";
import { GREY, TEXT_GREY } from "../../../styles/colors";
import CustomCheckbox from "../../../components/CustomCheckbox";

const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(4).max(20).required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .matches(passwordPattern, "Use At Least 9 Characters, One Uppercase Letter, One Lowercase Letter, And One Special character In Your Password."),
  rePassword: Yup.string()
    .min(8)
    .oneOf([Yup.ref("password")], "Your passwords do not match")
    .required("Required"),
  role: Yup.string().required("Required"),
  termsAccepted: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("Required"),
});

const SignUpView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const register_user = useCallback((values) => {
    dispatch(authAction({ userData: values, url: APP_BASE_URL + SIGN_UP }))
      .unwrap()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: routes.mainapp }],
        });
      })
      .catch((error) => {
        showMessage({
          type: "default",
          message: " " + error.error,
          backgroundColor: "#d7dbdd",
          color: TEXT_GREY,
          icon: (props) => <ALERT_MSG {...props} color={TEXT_GREY} />,
          style: styles.ShowMsgstyle,
        });
      });
  }, [dispatch, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <KeyboardAwareScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          <CustomText text={"Register"} color="GREY" fontFamily="bold" size={24} style={styles.logoText} />

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              rePassword: "",
              role: "",
              termsAccepted: false,
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              const { termsAccepted, ...userData } = values;
              register_user(userData);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              handleBlur,
              setFieldValue,
            }) => (
              <>
                <View style={styles.inputcontainerView}>
                  <CustomInput
                    lable={"Full Name"}
                    containerStyle={styles.emailInput}
                    placeholder={"Full Name"}
                    value={values.name}
                    onChangeText={handleChange("name")}
                    Blur={handleBlur("name")}
                    forceLable={true}
                    TextInputHeight={18}
                    TextInputSize={14}
                    leftIcon={<User />}
                    lableStyle={{ fontSize: 14, color: TEXT_GREY, fontFamily: "Bold" }}
                  />
                  {errors.name && touched.name && (
                    <CustomText text={errors.name} color="DARK_RED" fontFamily="Regular" size={10} />
                  )}
                  <CustomInput
                    lable={"Email"}
                    containerStyle={styles.emailInput}
                    placeholder={"Email"}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    Blur={handleBlur("email")}
                    forceLable={true}
                    TextInputHeight={18}
                    TextInputSize={14}
                    leftIcon={<SMS />}
                    lableStyle={{ fontSize: 14, color: TEXT_GREY, fontFamily: "Bold" }}
                  />
                  {errors.email && touched.email && (
                    <CustomText text={errors.email} color="DARK_RED" fontFamily="Regular" size={10} />
                  )}
                  <CustomInput
                    lable={"Password"}
                    password={true}
                    containerStyle={styles.emailInput}
                    placeholder={"Password"}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    Blur={handleBlur("password")}
                    forceLable={true}
                    TextInputHeight={18}
                    TextInputSize={14}
                    leftIcon={<PASSWORD />}
                    lableStyle={{ fontSize: 14, color: TEXT_GREY, fontFamily: "Bold" }}
                  />
                  {errors.password && touched.password && (
                    <CustomText text={errors.password} color="DARK_RED" fontFamily="Regular" size={10} />
                  )}
                  <CustomInput
                    lable={"Confirm Password"}
                    password={true}
                    containerStyle={styles.emailInput}
                    placeholder={"Repeat Password"}
                    value={values.rePassword}
                    onChangeText={handleChange("rePassword")}
                    Blur={handleBlur("rePassword")}
                    forceLable={true}
                    TextInputHeight={18}
                    TextInputSize={14}
                    leftIcon={<PASSWORD />}
                    lableStyle={{ fontSize: 14, color: TEXT_GREY, fontFamily: "Bold" }}
                  />
                  {errors.rePassword && touched.rePassword && (
                    <CustomText text={errors.rePassword} color="DARK_RED" fontFamily="Regular" size={10} />
                  )}
                  <View style={styles.radioView}>
                    <CustomText text={"Select Role:"} color="TEXT_GREY" fontFamily="bold" size={14} style={{ marginRight: 5 }} />
                    {errors.role && touched.role && (
                      <CustomText text={errors.role} color="DARK_RED" fontFamily="Regular" size={10} />
                    )}
                  </View>
                  <Field name="role" component={RadioButtonGroup} options={[
                    { label: "Patient", value: "patient" },
                    { label: "Doctor", value: "doctor" },
                  ]} />

                  <View style={styles.checkboxContainer}>
                    <Field
                      name='termsAccepted'
                      type="checkbox"
                      label='I agree to the '
                      component={CustomCheckbox}
                    />
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                      <CustomText text="Terms and Conditions" style={styles.linkText} />
                    </TouchableOpacity>
                  </View>

                  {errors.termsAccepted && touched.termsAccepted && (
                    <CustomText text={errors.termsAccepted} color="DARK_RED" fontFamily="Regular" size={10} />
                  )}
                </View>
                <CustomButton text={"Sign Up"} containerStyle={styles.buttonStyle} onPress={handleSubmit} />
              </>
            )}
          </Formik>

          {/* Terms and Conditions Modal */}
          <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <ScrollView>
                  <CustomText
                    text={"Terms and Conditions"}
                    color="GREY"
                    fontFamily="bold"
                    size={18}
                    style={styles.modalTitle}
                  />
                  <Text style={styles.modalText}>
                    Welcome to CureChain, a medical record management application powered by blockchain technology. By using our services, you agree to comply with the following terms and conditions.
                    {'\n'}1. Acceptance of Terms:
                    {'\n'}By accessing or using CureChain, you agree to be bound by these Terms and Conditions. If you do not agree to these Terms, you may not use the App.
                    {'\n'}2. Privacy and Data Security:
                    {'\n'}We value your privacy. All personal health information that you store or share via the App is protected in accordance with our Privacy Policy. While blockchain technology ensures that your data is encrypted and secure, no system is completely foolproof. By using the App, you acknowledge and accept the risks inherent to digital transactions.

                    {'\n'}3. Blockchain Technology:
                    {'\n'}The App uses blockchain technology to store and verify your medical records. Blockchain technology ensures that the records are immutable and cannot be altered once uploaded. However, you are responsible for ensuring that the information you upload is accurate. Any inaccuracies or mistakes must be corrected by creating new records, as blockchain records cannot be deleted.
                    {'\n'}4. User Responsibilities:
                    {'\n'}You are solely responsible for the security of your account and any activities that occur under your account. Always safeguard your login credentials and report any unauthorized access immediately. You must not use the App for any illegal or unauthorized purposes.

                    {'\n'}5. Medical Information Disclaimer:
                    {'\n'}CureChain is not intended to provide medical advice, diagnosis, or treatment. The App serves as a platform for storing and sharing medical records. All medical information must be provided by healthcare professionals. Always consult your doctor or other qualified healthcare provider with any questions you may have regarding a medical condition.
                  </Text>
                </ScrollView>
                <TouchableOpacity
                  style={styles.modalCloseButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.modalCloseText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <View style={styles.accountView}>
            <CustomText
              text={"I have an account ?"}
              color="TEXT_GREY"
              fontFamily="medium"
              size={14}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(routes.login);
              }}
            >
              <CustomText
                text={" Login"}
                color="PRIMARY"
                fontFamily="medium"
                size={14}
              />
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpView;
