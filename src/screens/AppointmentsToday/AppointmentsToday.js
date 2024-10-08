import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SMS, PASSWORD, BACK_Arrow, User, ALERT_MSG } from '../../assets/svgIcons';
import { GREY, PRIMARY, TEXT_GREY } from '../../styles/colors';
import styles from './styles';
import routes from '../../utils/routes';
import { useDispatch, useSelector } from "react-redux";
import { APP_BASE_URL, GET_APPOINTMENTS } from "@env";
import { appointmentsAction } from "../../redux/store/slices/appointmentsSlice";

export default function AppointmentsToday({ navigation }) {
    const [records, setRecords] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(appointmentsAction({
            url: APP_BASE_URL + GET_APPOINTMENTS,
            doctorId: '6701691de460030022321398',
            status: 'booked'
        }))
            .unwrap()
            .then((response) => {
                console.log("appointments", response.document[0].patient);
                let arr = [];
                arr.push(response.document[0].patient);
                setRecords(arr)
            })
            .catch((error) => {
                console.log(error.error)
            });
    }, [])



    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate(routes.medicalrecords)}
        >
            <View style={styles.card}>
                <View style={styles.dateContainer}>
                    <Image
                        source={{
                            uri: item.profilePicture,
                        }}
                        style={styles.imageStyle}
                    />
                </View>
                <View style={styles.recordContent}>
                    <Text style={styles.recordSubtitle}>{item.name}</Text>
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
            <Text style={styles.title}>There is no Appointments</Text>
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
                <Text style={styles.headerText}>Appointments Today</Text>
                <Text style={styles.notificationIcon}></Text>
            </View>
            <FlatList
                data={records}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListEmptyComponent={<EmptyListComponent />}
                style={styles.list}
            />
        </SafeAreaView>
    );
}




