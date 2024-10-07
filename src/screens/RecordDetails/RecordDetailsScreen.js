import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SMS, PASSWORD, BACK_Arrow, User, ALERT_MSG } from '../../assets/svgIcons';
import { GREY, PRIMARY, TEXT_GREY } from '../../styles/colors';
import styles from './styles';
import routes from '../../utils/routes';

export default function RecordDetailsScreen({ route, navigation }) {
  const { record } = route.params;
  console.log('record', record)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BACK_Arrow />
        </TouchableOpacity>
        <Text style={styles.headerText}>Record Details</Text>
        <Text style={styles.notificationIcon}></Text>
      </View>
      <View style={styles.Viewcontainer}>
        <Text style={styles.Viewheader}>{record.title}</Text>
        <Text style={styles.detail}>Date: {record.date}</Text>
        <Text style={styles.detail}>Added By: {record.by}</Text>
        <Text style={styles.detail}>Prescription: {record.prescriptions}</Text>
      </View>
    </SafeAreaView>
  );
}

