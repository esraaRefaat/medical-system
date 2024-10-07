import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SMS, PASSWORD, BACK_Arrow, User, ALERT_MSG } from '../../assets/svgIcons';
import { GREY, PRIMARY, TEXT_GREY } from '../../styles/colors';
import styles from './styles';
import routes from '../../utils/routes';

export default function AppointmentsToday({ navigation }) {
    const [records, setRecords] = useState([
        { id: '1', title: 'Record for Luke' },
        { id: '2', title: 'Record for Sara Doe' },
        { id: '3', title: 'Record for Robert' },
        { id: '4', title: 'Record for Jhon' },
    ]);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate(routes.medicalrecords)}
        >
            <View style={styles.card}>
                {/* <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>{item.date}</Text>
                    <Text style={styles.newBadge}>NEW</Text>
                </View> */}
                <View style={styles.recordContent}>
                    {/* <Text ellipsizeMode='tail' numberOfLines={1} style={styles.recordTitle}>Records added by {item.by}</Text>
                     */}
                    <Text style={styles.recordSubtitle}>{item.title}</Text>
                    {/* <Text style={styles.prescription}>1 Prescription</Text> */}
                </View>
                <TouchableOpacity style={styles.moreButton}>
                    <Text style={styles.moreIcon}>•••</Text>
                </TouchableOpacity>
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




