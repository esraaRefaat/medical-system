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




const ForgotPassword = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});
const ForgotPasswordView = () => {
  const navigation = useNavigation();
 
  const forgot_password = useCallback((values) => {
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
          text={'Forgot Password'}
          color='GREY'
          fontFamily='bold'
          size={24}
          style={styles.logoText}
        />
        <CustomText
          text={'Please enter the email you use to sign in'}
          color="TEXT_GREY"
          fontFamily='Medium'
          size={14}
          style={styles.Text}
        />
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={ForgotPassword}
          onSubmit={values => {
            forgot_password(values)
          // navigation.navigate(routes.newpassword)
          }}
        >
          {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit, handleBlur }) => (
            <>
              <View style={styles.inputcontainerView}>
                <CustomInput
                  lable={'Email'}
                  containerStyle={[styles.emailInput, { marginTop: 32 }]}
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
              </View>
              <CustomButton
                text={'Reset Password'}
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

export default ForgotPasswordView;