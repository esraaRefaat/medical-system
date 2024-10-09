import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SMS, PASSWORD, BACK_Arrow, User, ALERT_MSG } from '../../assets/svgIcons';
import { GREY, PRIMARY, TEXT_GREY } from '../../styles/colors';
import styles from './styles';
import routes from '../../utils/routes';
import { useDispatch, useSelector } from "react-redux";
import { APP_BASE_URL, Get_Medical_Records } from "@env";
import { medicalRecordAction } from "../../redux/store/slices/getMedicalRecordSlice";
import { useRoute } from '@react-navigation/native';

export default function MedicalRecords({ navigation }) {
    const [records, setRecords] = useState([]);
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const route = useRoute()


    useEffect(() => {
        dispatch(medicalRecordAction({
            url: APP_BASE_URL + Get_Medical_Records,
            id: route.params.patientId,
            token: user.token
        }))
            .unwrap()
            .then((response) => {
                setRecords(response.records)
            })
            .catch((error) => {
                console.log(error.error)
            });
    }, [])



    const renderItem = ({ item }) => (

        <TouchableOpacity
            onPress={() => navigation.navigate(routes.recorddetails, { record: item, patientId: route.params.patientId })}
        >
            <View style={styles.card}>
                <View style={styles.recordContent}>
                    <Text ellipsizeMode='tail' numberOfLines={1} style={styles.recordTitle}>{item.diagnosis}</Text>
                    <Text style={styles.prescription}>{new Date(item.appointmentDate * 1000).toLocaleDateString()}</Text>
                </View>

            </View>
        </TouchableOpacity>
    );
    const EmptyListComponent = () => (
        <View>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/medical.png')}
                    style={styles.image}
                />
            </View>
            <Text style={styles.title}>Add a medical record.</Text>
            <Text style={styles.description}>
                A detailed health history helps a doctor diagnose you better.
            </Text>
        </View>
    );


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BACK_Arrow />
                </TouchableOpacity>
                <Text style={styles.headerText}>All Records</Text>
                <Text style={styles.notificationIcon}></Text>
            </View>
            <FlatList
                data={records}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={<EmptyListComponent />}
                style={styles.list}
            />
            <View style={styles.footerButtons}>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => navigation.navigate(routes.addrecordscreen , {patientId:route.params.patientId})}
                >
                    <Text style={styles.footerButtonText}>Add a new record</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}




