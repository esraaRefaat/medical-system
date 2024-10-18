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
import { APP_BASE_URL, CHANGE_PASSWORD } from '@env';
import { showMessage } from "react-native-flash-message";
import { useRoute } from '@react-navigation/native';
import { patchDataWithTokenAction } from '../../../redux/store/slices/patchDataWithTokenSlice.js';

const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

const NewPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Current password is required"),
  newPassword: Yup.string()
    .required("New password is required")
    .matches(
      passwordPattern,
      "Use at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
    ),
});

const ChangePasswordView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const new_password = useCallback((values) => {
    const payload = {
      password: values.password,  // Old password
      newPassword: values.newPassword  // New password
    };

    dispatch(patchDataWithTokenAction({ 
      userData: payload, 
      url: "https://medical-system-server.onrender.com/api/v1/auth/changepassword/", 
      token: user.token 
    }))
      .unwrap()
      .then((response) => {
        navigation.reset({
          index: 0,
          routes: [{ name: routes.login }],
        });
      })
      .catch((error) => {
        
        showMessage({
          type: 'default',
          message: error.error || 'An error occurred',
          description: '',
          backgroundColor: '#d7dbdd',
          color: TEXT_GREY,
          textStyle: 'center',
          icon: props => <ALERT_MSG {...props} color={TEXT_GREY} />,
          style: styles.ShowMsgstyle,
        });
      });
  }, [dispatch, navigation, user.token]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps='handled'
        contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.backbutton}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.backbuttontouch}
            onPress={() => {
              navigation.goBack();
            }}>
            <BACK_Arrow />
          </TouchableOpacity>
        </View>
        <CustomText
          text={'Change Your Password'}
          color='GREY'
          fontFamily='bold'
          size={24}
          style={styles.logoText}
        />

        <Formik
          initialValues={{
            password: "",  // Old password
            newPassword: "",  // New password
          }}
          validationSchema={NewPasswordSchema}
          onSubmit={values => new_password(values)}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <>
              <View style={styles.inputcontainerView}>
                <CustomInput
                  lable={'Current Password'}
                  password={true}
                  containerStyle={styles.emailInput}
                  placeholder={'Enter your current password'}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  Blur={handleBlur('password')}
                  forceLable={true}
                  TextInputHeight={18}
                  TextInputSize={14}
                  leftIcon={<PASSWORD />}
                  lableStyle={{ fontSize: 14, color: TEXT_GREY, fontFamily: "Bold" }}
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
                  lable={'New Password'}
                  password={true}
                  containerStyle={styles.emailInput}
                  placeholder={'Enter your new password'}
                  value={values.newPassword}
                  onChangeText={handleChange('newPassword')}
                  Blur={handleBlur('newPassword')}
                  forceLable={true}
                  TextInputHeight={18}
                  TextInputSize={14}
                  TextInputColor={'#5F5F5F'}
                  leftIcon={<PASSWORD />}
                  lableStyle={{ fontSize: 14, color: TEXT_GREY, fontFamily: "Bold" }}
                />
                {errors.newPassword && touched.newPassword && (
                  <CustomText
                    text={errors.newPassword}
                    color='DARK_RED'
                    fontFamily="Regular"
                    size={10}
                  />
                )}
              </View>
              
              <CustomButton
                text={'Set New Password'}
                containerStyle={styles.buttonStyle}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePasswordView;
