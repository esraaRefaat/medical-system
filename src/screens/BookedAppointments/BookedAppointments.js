import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    SMS,
    PASSWORD,
    BACK_Arrow,
    User,
    ALERT_MSG,
} from "../../assets/svgIcons";
import { GREY, PRIMARY, TEXT_GREY } from "../../styles/colors";
import styles from "./styles";
import routes from "../../utils/routes";
import { useDispatch, useSelector } from "react-redux";
import { APP_BASE_URL, GET_APPOINTMENTS } from "@env";
import { appointmentsAction } from "../../redux/store/slices/appointmentsSlice";
import axios from 'axios';
import moment from 'moment'

export default function BookedAppointments({ navigation }) {
    const { user } = useSelector((state) => state.auth);
    const [records, setRecords] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Replace with your actual API endpoint
                const response = await axios.get(`https://medical-system-server.onrender.com/api/v1/users/${user.user_id}`);
                setRecords(response.data.document[0].bookedAppointments)
            } catch (err) {
                console.error(err);
                setError('Failed to fetch user data.');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [user.user_id]);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                // console.log(item.patient._id);
                // navigation.navigate(routes.medicalrecords, {
                //     patientId: item.patient._id,
                // });
            }}
        >
            <View style={styles.card}>
                <View style={styles.recordContent}>
                    <Text style={styles.recordSubtitle}> Date: {moment(item.date).format('MM/DD/YYYY')}</Text>
                    <Text style={styles.recordSubtitle}>Time: {item.time}</Text>
                </View>
                {item.status == 'done' && (<View style={styles.dateContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(routes.rating, { docId: item.doctor, apponId: item._id });
                        }}
                        style={{ width: 48, height: 48, backgroundColor: PRIMARY, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                        <Text style={{ color: '#fff' }}>review</Text>
                    </TouchableOpacity>
                </View>)}

            </View>
        </TouchableOpacity>
    );
    const EmptyListComponent = () => (
        <View>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../../assets/medical.png")}
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
                <Text style={styles.headerText}>Past Appointments</Text>
                <Text style={styles.notificationIcon}></Text>
            </View>
            <FlatList
                data={records}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
                ListEmptyComponent={<EmptyListComponent />}
                style={styles.list}
            />
        </SafeAreaView>
    );
}

