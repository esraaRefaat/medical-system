import { useNavigation } from "@react-navigation/native";
import { useState, useCallback } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik } from "formik";
import RNPickerSelect from 'react-native-picker-select'; // Import RNPickerSelect
import { APP_BASE_URL, UPDATE_DR_INFO } from "@env";
import { putWithTokenAction } from "../../redux/store/slices/putWithTokenSlice.js";
import styles from './styles';
import CustomButton from "../../components/customButton.js";
import { ScrollView } from "react-native-gesture-handler";
import CustomText from "../../components/customText.js";
import { BACK_Arrow } from "../../assets/svgIcons.js";

// Define your specialties options
const specialtiesOptions = [
  { label: 'Dermatology', value: 'dermatology' },
  { label: 'Dentistry', value: 'dentistry' },
  { label: 'Psychiatry', value: 'psychiatry' },
  { label: 'Pediatrics and New Born', value: 'pediatrics-and-new-born' },
  { label: 'Neurology', value: 'neurology' },
  { label: 'Orthopedics', value: 'orthopedics' },
  { label: 'Gynaecology and Infertility', value: 'gynaecology-and-infertility' },
  { label: 'Ear, Nose and Throat', value: 'ear-nose-and-throat' },
  { label: 'Cardiology and Vascular Disease', value: 'cardiology-and-vascular-disease' },
  { label: 'Internal Medicine', value: 'internal-medicine' },
  { label: 'Allergy and Immunology', value: 'allergy-and-immunology' },
  { label: 'Andrology and Male Infertility', value: 'andrology-and-male-infertility' },
  { label: 'Audiology', value: 'audiology' },
  { label: 'Cardiology and Thoracic Surgery', value: 'cardiology-and-thoracic-surgery' },
  { label: 'Chest and Respiratory', value: 'chest-and-respiratory' },
  { label: 'Diabetes and Endocrinology', value: 'diabetes-and-endocrinology' },
  { label: 'Diagnostic Radiology', value: 'diagnostic-radiology' },
  { label: 'Dietitian and Nutrition', value: 'dietitian-and-nutrition' },
  { label: 'Family Medicine', value: 'family-medicine' },
  { label: 'Gastroenterology and Endoscopy', value: 'gastroenterology-and-endoscopy' },
  { label: 'Geriatrics', value: 'geriatrics' },
  { label: 'Hematology', value: 'hematology' },
  { label: 'Hepatology', value: 'hepatology' },
  { label: 'Interventional Radiology', value: 'interventional-radiology' },
  { label: 'IVF and Infertility', value: 'ivf-and-infertility' },
  { label: 'Laboratories', value: 'laboratories' },
  { label: 'Nephrology', value: 'nephrology' },
  { label: 'Neurosurgery', value: 'neurosurgery' },
  { label: 'Obesity and Laparoscopic Surgery', value: 'obesity-and-laparoscopic-surgery' },
  { label: 'Oncology', value: 'oncology' },
  { label: 'Oncology Surgery', value: 'oncology-surgery' },
  { label: 'Ophthalmology', value: 'ophthalmology' },
];

const DoctorInfoUpdateSchema = Yup.object().shape({
  drSpecialties: Yup.string()
    .oneOf(specialtiesOptions.map(option => option.value), "Invalid Specialty") // Use map to extract values
    .required("Required"),
  drLocation: Yup.string().required("Required"),
  drWorkingHours: Yup.string().required("Required"),
  drBio: Yup.string().max(1000, "Bio cannot exceed 1000 characters"),
  drSessionFees: Yup.number()
    .typeError("Session fee must be a number")
    .min(0, "Session fee must be a positive number")
    .required("Required"),
});

const DoctorInfoUpdateView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const submit_info = useCallback(async (values) => {
    
    // Create a FormData object
    const formData = new FormData();
    
    // Append each value to the FormData object
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
    
    try {
      const response = await dispatch(
        putWithTokenAction({
          userData: formData, // Use the FormData object here
          url: APP_BASE_URL+UPDATE_DR_INFO,
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzAxNmZjZWU0NjAwMzAwMjIzMjEzYTkiLCJyb2xlIjoiZG9jdG9yIiwiZW1haWwiOiJoYWR5NDRAZ21haWwuY29tIiwiaWF0IjoxNzI4MTQ3NDA2fQ._5PHoxJCw1GGjlThwf4ldYi-aJbcyWRwmIwitgX1vPs", // Replace with your actual token
        })
      ).unwrap();
  
      if (response ) {
      
        Alert.alert("Success", "Data Has been saved successfully");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", error.message || "Something went wrong");
    }
  }, [dispatch, navigation]);
  
  return (
    <SafeAreaView style={styles.container}>

                  <View style={styles.backbutton}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.backbuttontouch}
            onPress={() => navigation.goBack()}>
            <BACK_Arrow />
          </TouchableOpacity>
        </View>
                {/* Header Texts */}
                <CustomText
          text={'Complete Your Profile'}
          color='GREY'
          fontFamily='bold'
          size={24}
          style={styles.logoText}
        />
        <CustomText
          text={'Please provide the following information to become a verified doctor'}
          color="TEXT_GREY"
          fontFamily='Medium'
          size={14}
          style={styles.Text}
        />
      <Formik
        initialValues={{
          drSpecialties: "",
          drLocation: "",
          drWorkingHours: "",
          drBio: "",
          drSessionFees: "",
        }}
        validationSchema={DoctorInfoUpdateSchema}
        onSubmit={submit_info}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.inputcontainerView}>
            <Text style={styles.label}>Specialty</Text>
            <RNPickerSelect
              onValueChange={handleChange('drSpecialties')}
              onBlur={handleBlur('drSpecialties')}
              items={specialtiesOptions}
              style={{ inputIOS: styles.input, inputAndroid: styles.input }} // Style the picker input
              placeholder={{ label: "Select your specialty", value: null }} // Optional placeholder
            />
            {touched.drSpecialties && errors.drSpecialties && <Text>{errors.drSpecialties}</Text>}
            
            <Text style={styles.label}>Location</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('drLocation')}
              onBlur={handleBlur('drLocation')}
              value={values.drLocation}
              placeholder="Enter your location"
            />
            {touched.drLocation && errors.drLocation && <Text>{errors.drLocation}</Text>}
            
            <Text style={styles.label}>Working Hours</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('drWorkingHours')}
              onBlur={handleBlur('drWorkingHours')}
              value={values.drWorkingHours}
              placeholder="Enter your working hours"
            />
            {touched.drWorkingHours && errors.drWorkingHours && <Text>{errors.drWorkingHours}</Text>}
            
            <Text style={styles.label}>Bio</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('drBio')}
              onBlur={handleBlur('drBio')}
              value={values.drBio}
              placeholder="Enter a brief bio"
              multiline
            />
            {touched.drBio && errors.drBio && <Text>{errors.drBio}</Text>}
            
            <Text style={styles.label}>Session Fees</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('drSessionFees')}
              onBlur={handleBlur('drSessionFees')}
              value={values.drSessionFees}
              placeholder="Enter your session fees"
              keyboardType="numeric"
            />
            {touched.drSessionFees && errors.drSessionFees && <Text>{errors.drSessionFees}</Text>}
            
            <CustomButton
                text={'Submit'}
                containerStyle={styles.buttonStyle}
                onPress={handleSubmit}
              />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default DoctorInfoUpdateView;
