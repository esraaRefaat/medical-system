import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SMS, PASSWORD, BACK_Arrow, User, ALERT_MSG } from '../../assets/svgIcons';
import { GREY, PRIMARY, TEXT_GREY, INACTIVE } from '../../styles/colors';
import styles from './styles';
import routes from '../../utils/routes';
import AddRecord from '../../components/AddRecord';
import CustomButton from '../../components/customButton';
import CalendarInput from '../../components/CalendarInput';
import Input from '../../components/Input';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { APP_BASE_URL, Add_New_Record } from "@env";
import { newRecordAction } from "../../redux/store/slices/addNewRecord";

const AddRecordScreen = ({ navigation }) => {
    const route = useRoute();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const [doctorNotes, setDoctorNotes] = useState('');
    const [diagnosis, setDiagnosis] = useState('');
    const [prescriptions, setPrescriptions] = useState('');
    const [followUpPlan, setFollowUpPlan] = useState('');



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BACK_Arrow />
                </TouchableOpacity>
                <Text style={styles.headerText}>Add New Record</Text>
                <Text style={styles.notificationIcon}></Text>
            </View>
            <View style={{ paddingHorizontal: 16, marginTop: 25 }}>
                <Input
                    lable={"Doctor's Notes"}
                    Placeholder={"Enter doctor's notes"}
                    containerStyle={{ marginBottom: 15 }}
                    onChangeText={(text) => {
                        setDoctorNotes(text)
                    }}
                    Value={doctorNotes}
                />
                <Input
                    lable={"Diagnosis"}
                    Placeholder={"Enter diagnosis"}
                    containerStyle={{ marginBottom: 15 }}
                    onChangeText={(text) => {
                        setDiagnosis(text)
                    }}
                    Value={diagnosis}
                />
                <Input
                    lable={"Prescriptions"}
                    Placeholder={"Enter prescriptions"}
                    containerStyle={{ marginBottom: 15 }}
                    onChangeText={(text) => {
                        setPrescriptions(text)
                    }}
                    Value={prescriptions}
                />
                <Input
                    lable={"Follow-Up Plan"}
                    Placeholder={"Enter follow-up plan"}
                    containerStyle={{ marginBottom: 15 }}
                    onChangeText={(text) => {
                        setFollowUpPlan(text)
                    }}
                    Value={followUpPlan}
                />
            </View>
            <CustomButton
                text={'Add Record'}
                containerStyle={styles.buttonStyle}
                onPress={() => {

                    const url=APP_BASE_URL + Add_New_Record;
                    const userData = {
                        "patientId": route.params.patientId,
                        "appointmentDate": String(Math.floor(Date.now() / 1000)),
                        "doctorNotes": doctorNotes,
                        "diagnosis": diagnosis,
                        "prescriptions": prescriptions,
                        "followUpPlan": followUpPlan
                    }


                    dispatch(newRecordAction({
                        url: url,
                        userData,
                        token: user.token
                    }))
                        .unwrap()
                        .then((response) => {
                            navigation.navigate(routes.medicalrecords, { patientId: route.params.patientId })
                        })
                        .catch((error) => {
                            console.log(error.error)
                        });
                }}
            />
        </SafeAreaView>
    );
}



export default AddRecordScreen;
