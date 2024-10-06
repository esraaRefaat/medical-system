import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RecordDetailsScreen({ route }) {
  const { record } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Record Details for {record.name}</Text>
      <Text style={styles.detail}>Date: {record.date}</Text>
      <Text style={styles.detail}>Added By: {record.addedBy}</Text>
      <Text style={styles.detail}>Prescription: {record.prescription}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
  },
});
