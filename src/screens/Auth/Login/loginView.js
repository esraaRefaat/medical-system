import React, { useState, useCallback } from "react";
import { StackActions, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import * as Yup from "yup";
import { View, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import CustomText from "../../../components/customText";
import CustomInput from "../../../components/customInput";
import CustomButton from "../../../components/customButton";
import {
  SMS,
  PASSWORD,
  BACK_Arrow,
  User,
  ALERT_MSG,
} from "../../../assets/svgIcons";
import { TEXT_GREY } from "../../../styles/colors";
import routes from "../../../utils/routes";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../../redux/store/slices/authSlice";
import { APP_BASE_URL, LOGIN } from "@env";
import { showMessage } from "react-native-flash-message";

const passwordPattern =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .matches(
      passwordPattern,
      "Use At Least 9 Characters One Uppercase Letter One Lowercase Letter And One Special character In Your Password."
    ),
});
const LoginView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const login_user = useCallback((values) => {
    dispatch(authAction({ userData: values, url: APP_BASE_URL + LOGIN }))
      .unwrap()
      .then((response) => {
        console.log("jhhjhjhjhjhjhk", response);
        navigation.dispatch(
          StackActions.replace(routes.mainapp, { screen: routes.home })
        );
      })
      .catch((error) => {
        console.log("err", error.error);
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
        <View style={styles.backbutton}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.backbuttontouch}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <BACK_Arrow />
          </TouchableOpacity>
        </View>
        <CustomText
          text={"Welcome Back"}
          color="GREY"
          fontFamily="bold"
          size={24}
          style={styles.logoText}
        />
        <CustomText
          text={"Please enter a form to login this app"}
          color="TEXT_GREY"
          fontFamily="Medium"
          size={14}
          style={styles.Text}
        />
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SignInSchema}
          onSubmit={(values) => {
            login_user(values);
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
                  lable={"Email"}
                  containerStyle={[styles.emailInput, { marginTop: 32 }]}
                  placeholder={"Enter your Email"}
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
                  placeholder={"Enter your password"}
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
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    navigation.navigate(routes.forgotPassword);
                  }}
                >
                  <CustomText
                    text={"Forgot Password"}
                    color="TEXT_GREY"
                    fontFamily="medium"
                    size={14}
                    style={styles.forgetPass}
                  />
                </TouchableOpacity>
              </View>
              <CustomButton
                text={"Sign In"}
                containerStyle={styles.buttonStyle}
                // disabled={!isValid}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>

        <View style={styles.accountView}>
          <CustomText
            text={"Don’t have an account ?"}
            color="TEXT_GREY"
            fontFamily="medium"
            size={14}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(routes.signup);
            }}
          >
            <CustomText
              text={" Register"}
              color="PRIMARY"
              fontFamily="medium"
              size={14}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginView;
