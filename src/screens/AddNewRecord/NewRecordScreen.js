import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SMS, PASSWORD, BACK_Arrow, User, ALERT_MSG } from '../../assets/svgIcons';
import { GREY, PRIMARY, TEXT_GREY, INACTIVE } from '../../styles/colors';
import styles from './styles';
import routes from '../../utils/routes';
import AddRecord from '../../components/AddRecord';
import CustomButton from '../../components/customButton';


const AddRecordScreen = ({ navigation }) => {
    const [appointmentDate, setAppointmentDate] = useState('');
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
            <View style={{ paddingHorizontal: 16, }}>
                <Text style={styles.label}>Appointment Date</Text>

                <AddRecord
                onPress={()=>{setAppointmentDate}}
                text={"Enter appointment date"}
                Value={appointmentDate}
                />
              

                <Text style={styles.label}>Doctor's Notes</Text>
                <AddRecord
                onPress={()=>{setDoctorNotes}}
                text={"Enter doctor's notes"}
                Value={doctorNotes}
                />
               
                <Text style={styles.label}>Diagnosis</Text>
                <AddRecord
                onPress={()=>{setDiagnosis}}
                text={"Enter diagnosis"}
                Value={diagnosis}
                />

                <Text style={styles.label}>Prescriptions</Text>
                <AddRecord
                onPress={()=>{setPrescriptions}}
                text={"Enter prescriptions"}
                Value={prescriptions}
                />
               

                <Text style={styles.label}>Follow-Up Plan</Text>
                <AddRecord
                onPress={()=>{setFollowUpPlan}}
                text={"Enter follow-up plan"}
                Value={followUpPlan}
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
