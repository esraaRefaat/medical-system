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
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Formik } from "formik";
import RNPickerSelect from "react-native-picker-select";
import * as ImagePicker from "expo-image-picker";
import { APP_BASE_URL, UPDATE_USER_INFO } from "@env";
import { putWithTokenAction } from "../../../redux/store/slices/putWithTokenSlice.js";
import styles from "./styles.js";
import CustomButton from "../../../components/customButton.js";
import CustomText from "../../../components/customText.js";
import { BACK_Arrow } from "../../../assets/svgIcons.js";
import routes from "../../../utils/routes.js";
import axios from "axios";

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
  drBio: Yup.string()
    .max(1000, "Bio cannot exceed 1000 characters")
    .required("Required"),
  drSessionFees: Yup.number()
    .typeError("Session fee must be a number")
    .min(0, "Session fee must be a positive number")
    .required("Required"),
  profilePicture: Yup.mixed().required("Profile picture is required"),
});

const EditProfileInfoView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

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
    const fetchUserData = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get(
          `https://medical-system-server.onrender.com/api/v1/users/${user.user_id}`
        );
        setUserData(response.data.document[0]);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

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
        allowsMultipleSelection: true,
        aspect: [4, 4],
        quality: 0.7,
        selectionLimit: 10, // Allow selecting up to 10 images
      });

      if (!result.canceled) {
        // Append new selected docs to existing ones
        const selectedDocs = [...values.verifyingDocs, ...result.assets];

        // Limit the total number of verifyingDocs to 10
        if (selectedDocs.length > 10) {
          Alert.alert(
            "Limit Reached",
            "You can only upload up to 10 documents."
          );
          return;
        }

        setFieldValue("verifyingDocs", selectedDocs);
      }
    } catch (E) {
      console.log(E);
    }
  };

  const submit_info = useCallback(
    async (values) => {
      setLoading(true); // Set loading to true when request starts

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

        formData.append(`verifyingDocs`, {
          uri: uri,
          name: `verifyingDoc_${Date.now()}.jpg`,
          type: doc.type || "image/jpeg",
        });
      });

      try {
        const response = await dispatch(
          putWithTokenAction({
            userData: formData,
            url: APP_BASE_URL + UPDATE_USER_INFO,
            token: user.token,
          })
        ).unwrap();

        if (response) {
          Alert.alert("Success", "Your info has been saved successfully");
          navigation.navigate(routes.mainapp);
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
      } finally {
        setLoading(false); // Set loading to false after request completes
      }
    },
    [dispatch, navigation, user]
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {/* <CustomText
          text={
            "You can change your information from here: "
          }
          color="TEXT_GREY"
          fontFamily="Medium"
          size={14}
          style={styles.Text}
        /> */}
        <Formik
          enableReinitialize // Allows Formik to reset initialValues when they change
          initialValues={{
            drSpecialties: userData?.drSpecialties || "",
            drLocation: userData?.drLocation || "",
            drWorkingHours: userData?.drWorkingHours || "",
            drBio: userData?.drBio || "",
            drSessionFees: userData?.drSessionFees
              ? userData.drSessionFees.toString()
              : "",
            profilePicture: userData?.profilePicture
              ? {
                  uri: userData.profilePicture,
                  name: `profile_${Date.now()}.jpg`,
                  type: "image/jpeg",
                }
              : null,
            verifyingDocs: userData?.verifyingDocs
              ? userData.verifyingDocs.map((doc, index) => ({
                  uri: doc, // Adjust based on actual data structure
                  name: `verifyingDoc_${index}_${Date.now()}.jpg`,
                  type: "image/jpeg",
                }))
              : [], // Add verifyingDocs field as an empty array
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
              <View style={styles.container}>
                <Text style={styles.label}>Choose Profile Picture</Text>
                <TouchableOpacity
                  style={styles.profileImagePicker}
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
                  <View style={styles.overlay}>
                    <Text style={styles.plusText}>+</Text>
                  </View>
                </TouchableOpacity>
              </View>

              {/* Specialty */}
              <Text style={styles.label}>Specialty</Text>
              <RNPickerSelect
                onValueChange={handleChange("drSpecialties")}
                onBlur={handleBlur("drSpecialties")}
                items={specialtiesOptions}
                value={values.drSpecialties}
                style={{
                  inputIOS: styles.input,
                  inputAndroid: styles.input,
                }}
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
                    <View key={index} style={styles.docWrapper}>
                      <Image
                        source={{ uri: doc.uri }}
                        style={styles.docImage}
                      />
                      <TouchableOpacity
                        style={styles.removeDocButton}
                        onPress={() => {
                          // Create a function to handle removing the document from Formik values
                          const updatedDocs = values.verifyingDocs.filter(
                            (_, i) => i !== index
                          );
                          setFieldValue("verifyingDocs", updatedDocs); // Set the new array without the removed doc
                        }}
                      >
                        <Text style={styles.removeDocText}>X</Text>
                      </TouchableOpacity>
                    </View>
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
      {/* Loading overlay */}
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default EditProfileInfoView;

