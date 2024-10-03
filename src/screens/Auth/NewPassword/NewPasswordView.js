import React, { useState, useCallback } from 'react';
import { useNavigation , StackActions } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import CustomText from '../../../components/customText';
import CustomInput from '../../../components/customInput';
import CustomButton from '../../../components/customButton';
import { SMS, PASSWORD, BACK_Arrow, User, OTP, ALERT_MSG } from '../../../assets/svgIcons';
import { TEXT_GREY } from '../../../styles/colors';
import routes from '../../../utils/routes';
import { useDispatch, useSelector } from "react-redux";
import { setPasswordAction } from "../../../redux/store/slices/setPassword";
import { APP_BASE_URL, SET_NEW_PASSWORD } from '@env';
import { showMessage } from "react-native-flash-message";
import { useRoute } from '@react-navigation/native';


const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
const NewPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required("Required")
    .matches(
      passwordPattern,
      "Use At Least 9 Characters One Uppercase Letter One Lowercase Letter And One Special character In Your Password."
    ),
  rePassword: Yup.string()
    .min(8)
    .oneOf([Yup.ref("newPassword")], "your passwords do not match")
    .required("Required"),
  otp: Yup.string()
    .required('Required').length(6),
});
const NewPasswordView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const route = useRoute()

  //console.log('email', route.params.useremail)

  const new_password = useCallback((values) => {
    dispatch(setPasswordAction({ userData: values, url: APP_BASE_URL + SET_NEW_PASSWORD }))
      .unwrap()
      .then((response) => {
        console.log('jhhjhjhjhjhjhk', response)
        navigation.dispatch(
          StackActions.replace(routes.login)
        )
      })
      .catch((error) => {
        console.log('err', error.error)
        showMessage({
          type: 'default',
          message: ' ' + error.error,
          description: '',
          backgroundColor: '#d7dbdd',
          color: TEXT_GREY,
          textStyle: 'center',
          icon: props => <ALERT_MSG {...props} color={TEXT_GREY} />,
          style: styles.ShowMsgstyle
        });
      });
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps='handled'
        contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.backbutton}>
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
          text={'Pick a new Password'}
          color='GREY'
          fontFamily='bold'
          size={24}
          style={styles.logoText}
        />
        <CustomText
          text={'Please enter a form to set a new password'}
          color="TEXT_GREY"
          fontFamily='Medium'
          size={14}
          style={styles.Text}
        />
        <Formik
          initialValues={{
            email: route.params.useremail,
            newPassword: "",
            rePassword: "",
            otp: ''
          }}
          validationSchema={NewPasswordSchema}
          onSubmit={values => {
            console.log('vaaaal', values)
            new_password(values)
          }}
        >
          {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit, handleBlur }) => (
            <>
              <View style={styles.inputcontainerView}>
                <CustomInput
                  lable={'Password'}
                  password={true}
                  containerStyle={[styles.emailInput, { marginTop: 32 }]}
                  placeholder={'Enter your password'}
                  value={values.password}
                  onChangeText={handleChange('newPassword')}
                  Blur={handleBlur('newPassword')}
                  forceLable={true}
                  TextInputHeight={18}
                  TextInputSize={14}
                  leftIcon={<PASSWORD />}
                  lableStyle={{ fontSize: 10, color: TEXT_GREY, fontFamily: 'Regular' }}
                />
                {errors.newPassword && touched.newPassword && (
                  <CustomText
                    text={errors.newPassword}
                    color='DARK_RED'
                    fontFamily="Regular"
                    size={10}
                  />
                )}
                <CustomInput
                  lable={'Confirm Password'}
                  password={true}
                  containerStyle={[styles.emailInput, { marginTop: 16 }]}
                  placeholder={'Confirm your password'}
                  value={values.confirmPassword}
                  onChangeText={handleChange('rePassword')}
                  Blur={handleBlur('rePassword')}
                  forceLable={true}
                  TextInputHeight={18}
                  TextInputSize={14}
                  TextInputColor={'#5F5F5F'}
                  leftIcon={<PASSWORD />}
                  lableStyle={{ fontSize: 10, color: TEXT_GREY, fontFamily: 'Regular' }}
                />
                {errors.rePassword && touched.rePassword && (
                  <CustomText
                    text={errors.rePassword}
                    color='DARK_RED'
                    fontFamily="Regular"
                    size={10}
                  />
                )}



                <CustomInput
                  lable={'OTP'}
                  containerStyle={[styles.emailInput, { marginTop: 16 }]}
                  placeholder={'OTP'}
                  value={values.confirmPassword}
                  onChangeText={handleChange('otp')}
                  Blur={handleBlur('otp')}
                  forceLable={true}
                  TextInputHeight={18}
                  TextInputSize={14}
                  TextInputColor={'#5F5F5F'}
                  leftIcon={<OTP />}
                  lableStyle={{ fontSize: 10, color: TEXT_GREY, fontFamily: 'Regular' }}
                />
                {errors.otp && touched.otp && (
                  <CustomText
                    text={errors.otp}
                    color='DARK_RED'
                    fontFamily="Regular"
                    size={10}
                  />
                )}
              </View>
              <CustomButton
                text={'Set New Password'}
                containerStyle={styles.buttonStyle}
                // disabled={!isValid}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  )
}

export default NewPasswordView;