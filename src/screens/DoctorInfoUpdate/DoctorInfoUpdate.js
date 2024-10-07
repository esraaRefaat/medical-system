// src/screens/DoctorInfoUpdateView/DoctorInfoUpdateView.js

import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
  Image,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Formik } from "formik";
import RNPickerSelect from "react-native-picker-select";
import * as ImagePicker from "expo-image-picker";
import { APP_BASE_URL, UPDATE_DR_INFO } from "@env";
import { putWithTokenAction } from "../../redux/store/slices/putWithTokenSlice.js";
import styles from "./styles";
import CustomButton from "../../components/customButton.js";
import CustomText from "../../components/customText.js";
import { BACK_Arrow } from "../../assets/svgIcons.js";
import routes from "../../utils/routes.js";

// Define your specialties options
const specialtiesOptions = [
  { label: "Dermatology", value: "dermatology" },
  { label: "Dentistry", value: "dentistry" },
  { label: "Psychiatry", value: "psychiatry" },
  { label: "Pediatrics and New Born", value: "pediatrics-and-new-born" },
  { label: "Neurology", value: "neurology" },
  { label: "Orthopedics", value: "orthopedics" },
  {
    label: "Gynaecology and Infertility",
    value: "gynaecology-and-infertility",
  },
  { label: "Ear, Nose and Throat", value: "ear-nose-and-throat" },
  {
    label: "Cardiology and Vascular Disease",
    value: "cardiology-and-vascular-disease",
  },
  { label: "Internal Medicine", value: "internal-medicine" },
  { label: "Allergy and Immunology", value: "allergy-and-immunology" },
  {
    label: "Andrology and Male Infertility",
    value: "andrology-and-male-infertility",
  },
  { label: "Audiology", value: "audiology" },
  {
    label: "Cardiology and Thoracic Surgery",
    value: "cardiology-and-thoracic-surgery",
  },
  { label: "Chest and Respiratory", value: "chest-and-respiratory" },
  { label: "Diabetes and Endocrinology", value: "diabetes-and-endocrinology" },
  { label: "Diagnostic Radiology", value: "diagnostic-radiology" },
  { label: "Dietitian and Nutrition", value: "dietitian-and-nutrition" },
  { label: "Family Medicine", value: "family-medicine" },
  {
    label: "Gastroenterology and Endoscopy",
    value: "gastroenterology-and-endoscopy",
  },
  { label: "Geriatrics", value: "geriatrics" },
  { label: "Hematology", value: "hematology" },
  { label: "Hepatology", value: "hepatology" },
  { label: "Interventional Radiology", value: "interventional-radiology" },
  { label: "IVF and Infertility", value: "ivf-and-infertility" },
  { label: "Laboratories", value: "laboratories" },
  { label: "Nephrology", value: "nephrology" },
  { label: "Neurosurgery", value: "neurosurgery" },
  {
    label: "Obesity and Laparoscopic Surgery",
    value: "obesity-and-laparoscopic-surgery",
  },
  { label: "Oncology", value: "oncology" },
  { label: "Oncology Surgery", value: "oncology-surgery" },
  { label: "Ophthalmology", value: "ophthalmology" },
];

const DoctorInfoUpdateSchema = Yup.object().shape({
  drSpecialties: Yup.string()
    .oneOf(
      specialtiesOptions.map((option) => option.value),
      "Invalid Specialty"
    )
    .required("Required"),
  drLocation: Yup.string().required("Required"),
  drWorkingHours: Yup.string().required("Required"),
  drBio: Yup.string().max(1000, "Bio cannot exceed 1000 characters"),
  drSessionFees: Yup.number()
    .typeError("Session fee must be a number")
    .min(0, "Session fee must be a positive number")
    .required("Required"),
  profilePicture: Yup.mixed().required("Profile picture is required"),
});

const DoctorInfoUpdateView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token); // Ensure correct path
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Permission Denied",
            "Sorry, we need camera roll permissions to make this work!"
          );
        }
      }
    })();
  }, []);

  const pickProfilePicture = async (setFieldValue) => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [4, 4],
        quality: 0.7,
      });

      if (!result.canceled) {
        const asset = result.assets[0];
        setFieldValue("profilePicture", asset);
      }
    } catch (E) {
      console.log(E);
    }
  };

  const pickVerifyingDocs = async (setFieldValue, values) => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [4, 4],
        quality: 0.7,
        selectionLimit: 10, // Allow selecting up to 10 images
      });
  
      if (!result.canceled) {
        // Append new selected docs to existing ones
        const selectedDocs = [...values.verifyingDocs, ...result.assets];
  
        // Limit the total number of verifyingDocs to 10
        if (selectedDocs.length > 10) {
          Alert.alert("Limit Reached", "You can only upload up to 10 documents.");
          return;
        }
  
        setFieldValue('verifyingDocs', selectedDocs);
      }
    } catch (E) {
      console.log(E);
    }
  };
  

  const submit_info = useCallback(
    async (values) => {
      const formData = new FormData();

      formData.append("drSpecialties", values.drSpecialties);
      formData.append("drLocation", values.drLocation);
      formData.append("drWorkingHours", values.drWorkingHours);
      formData.append("drBio", values.drBio);
      formData.append("drSessionFees", values.drSessionFees);

      if (values.profilePicture) {
        let uri = values.profilePicture.uri;
        if (Platform.OS === "ios") {
          uri = values.profilePicture.uri.replace("file://", "");
        }

        formData.append("profilePicture", {
          uri: uri,
          name: `profile_${Date.now()}.jpg`,
          type: values.profilePicture.type || "image/jpeg",
        });
      }

      // Append verifying documents
      values.verifyingDocs.forEach((doc, index) => {
        let uri = doc.uri;
        if (Platform.OS === "ios") {
          uri = doc.uri.replace("file://", "");
        }

        formData.append(`verifyingDocs[${index}]`, {
          uri: uri,
          name: `verifyingDoc_${Date.now()}_${index}.jpg`,
          type: doc.type || "image/jpeg",
        });
      });

      try {
        console.log("FormData:", formData);

        const response = await dispatch(
          putWithTokenAction({
            userData: formData,
            url: APP_BASE_URL + UPDATE_DR_INFO,
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzAyYzg5YTYzMjc0MmIxMTk0MmVjZDkiLCJyb2xlIjoiZG9jdG9yIiwiZW1haWwiOiJoYWR5NDg5NGZkQGdtYWlsLmNvbSIsImlhdCI6MTcyODIzNTY3NH0.xgu1n4u0PFj129avgs-eBUCVCoVbionyedPA2W7fBqk", // Use dynamic token
          })
        ).unwrap();

        if (response) {
          Alert.alert("Success", "Your info has been saved successfully");
          navigation.navigate(routes.home);
        }
      } catch (error) {
        if (error.response) {
          console.error("Error Response:", error.response.data);
          Alert.alert(
            "Error",
            error.response.data.message || "Something went wrong"
          );
        } else if (error.request) {
          console.error("Error Request:", error.request);
          Alert.alert("Error", "No response from server");
        } else {
          console.error("Error Message:", error.message);
          Alert.alert("Error", error.message || "Something went wrong");
        }
      }
    },
    [dispatch, navigation, token]
  );

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
            activeOpacity={0.7}
            style={styles.backbuttontouch}
            onPress={() => navigation.goBack()}
          >
            <BACK_Arrow />
          </TouchableOpacity>
        </View>
        {/* Header Texts */}
        <CustomText
          text={"Complete Your Profile"}
          color="GREY"
          fontFamily="bold"
          size={24}
          style={styles.logoText}
        />
        <CustomText
          text={
            "Please provide the following information to become a verified doctor"
          }
          color="TEXT_GREY"
          fontFamily="Medium"
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
            profilePicture: null,
            verifyingDocs: [], // Add verifyingDocs field as an empty array
          }}
          validationSchema={DoctorInfoUpdateSchema}
          onSubmit={submit_info}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.inputcontainerView}>
              {/* Specialty */}
              <Text style={styles.label}>Specialty</Text>
              <RNPickerSelect
                onValueChange={handleChange("drSpecialties")}
                onBlur={handleBlur("drSpecialties")}
                items={specialtiesOptions}
                style={{ inputIOS: styles.input, inputAndroid: styles.input }}
                placeholder={{ label: "Select your specialty", value: null }}
              />
              {touched.drSpecialties && errors.drSpecialties && (
                <Text style={styles.errorText}>{errors.drSpecialties}</Text>
              )}

              {/* Location */}
              <Text style={styles.label}>Location</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("drLocation")}
                onBlur={handleBlur("drLocation")}
                value={values.drLocation}
                placeholder="Enter your location"
              />
              {touched.drLocation && errors.drLocation && (
                <Text style={styles.errorText}>{errors.drLocation}</Text>
              )}

              {/* Working Hours */}
              <Text style={styles.label}>Working Hours</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("drWorkingHours")}
                onBlur={handleBlur("drWorkingHours")}
                value={values.drWorkingHours}
                placeholder="Enter your working hours"
              />
              {touched.drWorkingHours && errors.drWorkingHours && (
                <Text style={styles.errorText}>{errors.drWorkingHours}</Text>
              )}

              {/* Bio */}
              <Text style={styles.label}>Bio</Text>
              <TextInput
                style={[styles.input, { height: 100 }]}
                onChangeText={handleChange("drBio")}
                onBlur={handleBlur("drBio")}
                value={values.drBio}
                placeholder="Enter a brief bio"
                multiline
              />
              {touched.drBio && errors.drBio && (
                <Text style={styles.errorText}>{errors.drBio}</Text>
              )}

              {/* Session Fees */}
              <Text style={styles.label}>Session Fees</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("drSessionFees")}
                onBlur={handleBlur("drSessionFees")}
                value={values.drSessionFees}
                placeholder="Enter your session fees"
                keyboardType="numeric"
              />
              {touched.drSessionFees && errors.drSessionFees && (
                <Text style={styles.errorText}>{errors.drSessionFees}</Text>
              )}

              {/* Profile Picture */}
              <Text style={styles.label}>Profile Picture</Text>
              <TouchableOpacity
                style={styles.imagePicker}
                onPress={() => pickProfilePicture(setFieldValue)}
              >
                {values.profilePicture ? (
                  <Image
                    source={{ uri: values.profilePicture.uri }}
                    style={styles.profileImage}
                  />
                ) : (
                  <Text>Select Profile Picture</Text>
                )}
              </TouchableOpacity>
              {touched.profilePicture && errors.profilePicture && (
                <Text style={styles.errorText}>{errors.profilePicture}</Text>
              )}

              {/* Verifying Documents */}
              <Text style={styles.label}>Verifying Documents</Text>
              <TouchableOpacity
                style={styles.imagePicker}
                onPress={() => pickVerifyingDocs(setFieldValue, values)}
              >
                <Text>Select Verifying Documents (up to 10)</Text>
              </TouchableOpacity>

              {/* Display Selected Verifying Documents */}
              <View style={styles.docsContainer}>
                {values.verifyingDocs.length > 0 &&
                  values.verifyingDocs.map((doc, index) => (
                    <Image
                      key={index}
                      source={{ uri: doc.uri }}
                      style={styles.docImage}
                    />
                  ))}
              </View>
              {touched.verifyingDocs && errors.verifyingDocs && (
                <Text style={styles.errorText}>{errors.verifyingDocs}</Text>
              )}

              {/* Submit Button */}
              <CustomButton
                text={"Submit"}
                containerStyle={styles.buttonStyle}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorInfoUpdateView;
