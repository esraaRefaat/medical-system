import React, { useState, useCallback } from "react";
import { useNavigation, StackActions } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import CustomText from "../../../components/customText";
import CustomInput from "../../../components/customInput";
import CustomButton from "../../../components/customButton";
import RadioButtonGroup from "../../../components/RadioButtonGroup";
import {
  SMS,
  PASSWORD,
  BACK_Arrow,
  User,
  ALERT_MSG,
} from "../../../assets/svgIcons";
import routes from "../../../utils/routes";
import { Formik, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../../redux/store/slices/authSlice";
import { APP_BASE_URL, SIGN_UP } from "@env";
import { showMessage } from "react-native-flash-message";
import { TEXT_GREY } from "../../../styles/colors";
import { adminAuthAction } from "../../../redux/store/slices/adminAuthSlice.js";

const passwordPattern =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const SignupSchema = Yup.object().shape({
  name: Yup.string().min(4).max(20).required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .matches(
      passwordPattern,
      "Use At Least 9 Characters One Uppercase Letter One Lowercase Letter And One Special character In Your Password."
    ),
  rePassword: Yup.string()
    .min(8)
    .oneOf([Yup.ref("password")], "your passwords do not match")
    .required("Required"),
  role: Yup.string().required("Required"),
});
const AdminSignUpView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [error, setError] = useState("");


  const register_user = useCallback((values) => {
    dispatch(adminAuthAction({ userData: values, url: APP_BASE_URL + SIGN_UP }))
      .unwrap()
      .then((response) => {
        navigation.reset({
          index: 0,
          routes: [{ name: routes.mainapp }],
        });

      })
      .catch((error) => {
        //console.log(error.error)
        showMessage({
          type: "default",
          message: " " + error.error,
          description: "",
          backgroundColor: "#d7dbdd",
          color: TEXT_GREY,
          textStyle: "center",
          icon: (props) => <ALERT_MSG {...props} color={TEXT_GREY} />,
          style: styles.ShowMsgstyle,
        });
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={[styles.backbutton, { width: 24, height: 24 }]}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.backbuttontouch}
            onPress={() => {
              navigation.goBack()
            }}>
            <BACK_Arrow />
          </TouchableOpacity>
        </View>
        <CustomText
          text={"Register New Admin"}
          color="GREY"
          fontFamily="bold"
          size={24}
          style={styles.logoText}
        />
        <CustomText
          text={"Please enter a form to continue the register"}
          color="TEXT_GREY"
          fontFamily="Medium"
          size={14}
          style={styles.Text}
        />
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            rePassword: "",
            role: "admin",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            register_user(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            setFieldTouched,
            isValid,
            handleSubmit,
            handleBlur,
          }) => (
            <>
              <View style={styles.inputcontainerView}>
                <CustomInput
                  lable={"Full Name"}
                  containerStyle={[styles.emailInput, { marginTop: 32 }]}
                  placeholder={"Enter the user full name"}
                  value={values.name}
                  onChangeText={handleChange("name")}
                  Blur={handleBlur("name")}
                  forceLable={true}
                  TextInputHeight={18}
                  TextInputSize={14}
                  leftIcon={<User />}
                  lableStyle={{
                    fontSize: 10,
                    color: TEXT_GREY,
                    fontFamily: "Regular",
                  }}
                />
                {errors.name && touched.name && (
                  <CustomText
                    text={errors.name}
                    color="DARK_RED"
                    fontFamily="Regular"
                    size={10}
                  />
                )}
                <CustomInput
                  lable={"Email"}
                  containerStyle={[styles.emailInput, { marginTop: 16 }]}
                  placeholder={"Enter the user Email"}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  Blur={handleBlur("email")}
                  forceLable={true}
                  TextInputHeight={18}
                  TextInputSize={14}
                  leftIcon={<SMS />}
                  lableStyle={{
                    fontSize: 10,
                    color: TEXT_GREY,
                    fontFamily: "Regular",
                  }}
                />
                {errors.email && touched.email && (
                  <CustomText
                    text={errors.email}
                    color="DARK_RED"
                    fontFamily="Regular"
                    size={10}
                  />
                )}
                <CustomInput
                  lable={"Password"}
                  password={true}
                  containerStyle={[styles.emailInput, { marginTop: 16 }]}
                  placeholder={"Enter password"}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  Blur={handleBlur("password")}
                  forceLable={true}
                  TextInputHeight={18}
                  TextInputSize={14}
                  leftIcon={<PASSWORD />}
                  lableStyle={{
                    fontSize: 10,
                    color: TEXT_GREY,
                    fontFamily: "Regular",
                  }}
                />
                {errors.password && touched.password && (
                  <CustomText
                    text={errors.password}
                    color="DARK_RED"
                    fontFamily="Regular"
                    size={10}
                  />
                )}
                <CustomInput
                  lable={"Confirm Password"}
                  password={true}
                  containerStyle={[styles.emailInput, { marginTop: 16 }]}
                  placeholder={"Confirm password"}
                  value={values.rePassword}
                  onChangeText={handleChange("rePassword")}
                  Blur={handleBlur("rePassword")}
                  forceLable={true}
                  TextInputHeight={18}
                  TextInputSize={14}
                  TextInputColor={"#5F5F5F"}
                  leftIcon={<PASSWORD />}
                  lableStyle={{
                    fontSize: 10,
                    color: TEXT_GREY,
                    fontFamily: "Regular",
                  }}
                />
                {errors.rePassword && touched.rePassword && (
                  <CustomText
                    text={errors.rePassword}
                    color="DARK_RED"
                    fontFamily="Regular"
                    size={10}
                  />
                )}

              </View>
              <CustomButton
                text={"Sign Up"}
                containerStyle={styles.buttonStyle}
                // disabled={!isValid}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>

      </ScrollView>
    </SafeAreaView>
  );
};

export default AdminSignUpView;
