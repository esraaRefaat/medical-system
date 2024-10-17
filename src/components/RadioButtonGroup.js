import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { PRIMARY} from '../styles/colors';


const RadioButtonGroup = ({ field, options, form }) => {
  const { name, value } = field;
  const { setFieldValue } = form;

  return (
    <View style={{marginTop:5 , flexDirection:"row" , }}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          onPress={() => setFieldValue(name, option.value)}
          style={styles.radioContainer}
        >
          <View style={styles.radioButton}>
            {value === option.value ? <View style={styles.radioButtonSelected} /> : null}
          </View>
          <Text style={styles.radioText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin:10
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioButtonSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: PRIMARY,
  },
  radioText: {
    fontSize: 14,
    fontFamily:'Medium',
    color:'#3F3F46'
  },
});

export default RadioButtonGroup;
