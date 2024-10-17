import React, { useState, useCallback } from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';
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
import { SMS, PASSWORD, BACK_Arrow, User, ALERT_MSG } from '../../../assets/svgIcons';
import { TEXT_GREY } from '../../../styles/colors';
import routes from '../../../utils/routes';
import { useDispatch, useSelector } from "react-redux";
import { sendEmailAction } from "../../../redux/store/slices/forgetpassword";
import { APP_BASE_URL, FORGET_PASSWORD } from '@env';
import { showMessage } from "react-native-flash-message";




const ForgotPassword = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});
const ForgotPasswordView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const forgot_password = useCallback((values) => {
    dispatch(sendEmailAction({ userData: values, url: APP_BASE_URL + FORGET_PASSWORD }))
      .unwrap()
      .then((response) => {
        console.log('jhhjhjhjhjhjhk', response)
        navigation.dispatch(
          StackActions.replace(routes.newpassword, {
           
              useremail: values.email ,
            
            })
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
          text={'Forgot Password'}
          color='GREY'
          fontFamily='bold'
          size={24}
          style={styles.logoText}
        />
        {/* <CustomText
          text={'Please enter the email you use to sign in'}
          color="TEXT_GREY"
          fontFamily='Medium'
          size={14}
          style={styles.Text}
        /> */}
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={ForgotPassword}
          onSubmit={values => {
            console.log('val', values.email)
            forgot_password(values)
          }}
        >
          {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit, handleBlur }) => (
            <>
              <View style={styles.inputcontainerView}>
                <CustomInput
                  lable={'Email'}
                  containerStyle={styles.emailInput}
                  placeholder={'Enter your Email'}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  Blur={handleBlur('email')}
                  forceLable={true}
                  TextInputHeight={18}
                  TextInputSize={14}
                  leftIcon={<SMS />}
                  lableStyle={{
                    fontSize: 14,
                    color: TEXT_GREY,
                    fontFamily: 'Bold',
                  }}
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