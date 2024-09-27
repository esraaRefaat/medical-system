import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
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
import { SMS, PASSWORD, BACK_Arrow, User, OTP } from '../../../assets/svgIcons';
import { TEXT_GREY } from '../../../styles/colors';
import routes from '../../../utils/routes';



const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
const SignupSchema = Yup.object().shape({
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
  OTP: Yup.string()
    .required('Required').length(6),
});
const NewPasswordView = () => {
  const navigation = useNavigation();
 
  const register_user = useCallback((values) => {
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
            password: "",
            rePassword: "",
            OTP: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            register_user(values)
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
                  onChangeText={handleChange('password')}
                  Blur={handleBlur('password')}
                  forceLable={true}
                  TextInputHeight={18}
                  TextInputSize={14}
                  leftIcon={<PASSWORD />}
                  lableStyle={{ fontSize: 10, color: TEXT_GREY, fontFamily: 'Regular' }}
                />
                {errors.password && touched.password && (
                  <CustomText
                    text={errors.password}
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
                  onChangeText={handleChange('confirmPassword')}
                  Blur={handleBlur('confirmPassword')}
                  forceLable={true}
                  TextInputHeight={18}
                  TextInputSize={14}
                  TextInputColor={'#5F5F5F'}
                  leftIcon={<PASSWORD />}
                  lableStyle={{ fontSize: 10, color: TEXT_GREY, fontFamily: 'Regular' }}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <CustomText
                    text={errors.confirmPassword}
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
                  onChangeText={handleChange('OTP')}
                  Blur={handleBlur('OTP')}
                  forceLable={true}
                  TextInputHeight={18}
                  TextInputSize={14}
                  TextInputColor={'#5F5F5F'}
                  leftIcon={<OTP />}
                  lableStyle={{ fontSize: 10, color: TEXT_GREY, fontFamily: 'Regular' }}
                />
                {errors.OTP && touched.OTP && (
                  <CustomText
                    text={errors.OTP}
                    color='DARK_RED'
                    fontFamily="Regular"
                    size={10}
                  />
                )}
              </View>
              <CustomButton
                text={'Set New Password'}
                containerStyle={styles.buttonStyle}
                disabled={!isValid}
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