import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { PRIMARY, TEXT_GREY } from '../styles/colors';
const CustomCheckbox = ({ field, form, label }) => {
  const { name, value } = field;
  const { setFieldValue } = form;

  return (
    <>
    <TouchableOpacity
      style={styles.checkboxContainer}
      onPress={() => setFieldValue(name, !value)} 
    >
      <View style={styles.checkbox}>
        {value && <Ionicons name="checkmark" size={20} color={PRIMARY} />} 
      </View>
      </TouchableOpacity>
      {label && <Text style={styles.checkboxLabel}>{label}</Text>}
      </>
  );
};

const styles = {
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxLabel: {
    fontFamily:'SemiBold',
    color:TEXT_GREY,
    fontSize:14
  },
};

export default CustomCheckbox;
