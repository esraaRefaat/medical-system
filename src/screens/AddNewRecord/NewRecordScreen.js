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


const AddRecordScreen = ({ navigation }) => {
    const [appointmentDate, setAppointmentDate] = useState('');
    const [doctorNotes, setDoctorNotes] = useState('');
    const [diagnosis, setDiagnosis] = useState('');
    const [prescriptions, setPrescriptions] = useState('');
    const [followUpPlan, setFollowUpPlan] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
       // console.warn("A date has been picked: ", date);
        setAppointmentDate(moment(date).format('MM/DD/YYYY'))
        hideDatePicker();

    };

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
                <CalendarInput
                    lable={"Appointment Date"}
                    value={appointmentDate}
                    containerStyle={{ marginBottom: 15 }}
                    onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                <Input
                    lable={"Doctor's Notes"}
                    Placeholder={"Enter doctor's notes"}
                    containerStyle={{ marginBottom: 15 }}
                    OnPress
                    Value
                />
                <Input
                    lable={"Diagnosis"}
                    Placeholder={"Enter diagnosis"}
                    containerStyle={{ marginBottom: 15 }}
                />
                <Input
                    lable={"Prescriptions"}
                    Placeholder={"Enter prescriptions"}
                    containerStyle={{ marginBottom: 15 }}

                />
                <Input
                    lable={"Follow-Up Plan"}
                    Placeholder={"Enter follow-up plan"}
                    containerStyle={{ marginBottom: 15 }}
                />
            </View>
            <CustomButton
                text={'Add Record'}
                containerStyle={styles.buttonStyle}
                onPress={() => { console.log('test') }}
            />
        </SafeAreaView>
    );
}



export default AddRecordScreen;
