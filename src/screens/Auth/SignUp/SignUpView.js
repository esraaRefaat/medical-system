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
import { SMS, PASSWORD, BACK_Arrow, User } from '../../../assets/svgIcons';
import { TEXT_GREY } from '../../../styles/colors';
import routes from '../../../utils/routes';





const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(4)
    .max(20)
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
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
const SignUpView = () => {
  const navigation = useNavigation();
  const [error, setError] = useState('');

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
          text={'Register'}
          color='GREY'
          fontFamily='bold'
          size={24}
          style={styles.logoText}
        />
        <CustomText
          text={'Please enter a form to continue the register'}
          color="TEXT_GREY"
          fontFamily='Medium'
          size={14}
          style={styles.Text}
        />
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            rePassword: "",
            role: "",
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
                  lable={'Full Name'}
                  containerStyle={[styles.emailInput, { marginTop: 32 }]}
                  placeholder={'Enter your full name'}
                  value={values.name}
                  onChangeText={handleChange("name")}
                  Blur={handleBlur("name")}
                  forceLable={true}
                  TextInputHeight={18}
                  TextInputSize={14}
                  leftIcon={<User />}
                  lableStyle={{ fontSize: 10, color: TEXT_GREY, fontFamily: 'Regular' }}
                />
                {errors.name && touched.name && (
                  <CustomText
                    text={errors.name}
                    color='DARK_RED'
                    fontFamily="Regular"
                    size={10}
                  />
                )}
                <CustomInput
                  lable={'Email'}
                  containerStyle={[styles.emailInput, { marginTop: 16 }]}
                  placeholder={'Enter your Email'}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  Blur={handleBlur('email')}
                  forceLable={true}
                  TextInputHeight={18}
                  TextInputSize={14}
                  leftIcon={<SMS />}
                  lableStyle={{ fontSize: 10, color: TEXT_GREY, fontFamily: 'Regular' }}
                />
                {errors.email && touched.email && (
                  <CustomText
                    text={errors.email}
                    color='DARK_RED'
                    fontFamily="Regular"
                    size={10}
                  />
                )}
                <CustomInput
                  lable={'Password'}
                  password={true}
                  containerStyle={[styles.emailInput, { marginTop: 16 }]}
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
              </View>
              <CustomButton
                text={'Sign Up'}
                containerStyle={styles.buttonStyle}
                disabled={!isValid}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>


        <View style={styles.accountView}>
          <CustomText
            text={'I have an account?'}
            color="TEXT_GREY"
            fontFamily='medium'
            size={14}
          />
          <TouchableOpacity onPress={() => {
            navigation.navigate(routes.login)
          }}>
            <CustomText
              text={' Sign in'}
              color="PRIMARY"
              fontFamily='medium'
              size={14}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUpView;