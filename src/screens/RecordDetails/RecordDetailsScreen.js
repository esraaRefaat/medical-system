import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SMS, PASSWORD, BACK_Arrow, User, ALERT_MSG } from '../../assets/svgIcons';
import { GREY, PRIMARY, TEXT_GREY } from '../../styles/colors';
import styles from './styles';
import routes from '../../utils/routes';
import CustomText from '../../components/customText';

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
        <CustomText
          text={record.title}
          color="PRIMARY"
          fontFamily="bold"
          size={24}
          style={styles.Viewheader}
        />
        <CustomText
          text={'Date'}
          color="GREY"
          fontFamily="bold"
          size={16}
        />
        <CustomText
          text={record.date}
          color="TEXT_GREY"
          fontFamily='medium'
          size={12}
          style={{marginBottom:5}}
        />
        <CustomText
          text={'Doctor Notes'}
          color="GREY"
          fontFamily="bold"
          size={16}
        />
        <CustomText
          text={'Patient has shown significant improvement.'}
          color="TEXT_GREY"
          fontFamily='medium'
          size={12}
          style={{marginBottom:5}}
        />
        <CustomText
          text={'Diagnosis'}
          color="GREY"
          fontFamily="bold"
          size={16}
        />
        <CustomText
          text={'Mild fever and cough.'}
          color="TEXT_GREY"
          fontFamily='medium'
          size={12}
          style={{marginBottom:5}}
        />
        <CustomText
          text={'Prescriptions'}
          color="GREY"
          fontFamily="bold"
          size={16}
        />
        <CustomText
          text={'Paracetamol 500mg, Vitamin C.'}
          color="TEXT_GREY"
          fontFamily='medium'
          size={12}
          style={{marginBottom:5}}
        />
        <CustomText
          text={'Follow-Up Plan'}
          color="GREY"
          fontFamily="bold"
          size={16}
        />
        <CustomText
          text={'Follow-up after 2 weeks.'}
          color="TEXT_GREY"
          fontFamily='medium'
          size={12}
        />

      </View>
    </SafeAreaView>
  );
}

