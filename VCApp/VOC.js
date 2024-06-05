import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const VOC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>VOC (Volatile Organic Compounds)</Text>
      <Text style={styles.text}>
        Associated illnesses:
        {"\n\n"}
        - Breathing them in can irritate the eyes, nose, and throat
        {"\n"}
        - Nausea
        {"\n"}
        - Damage to CNS and organs
        {"\n"}
        - Can sometimes cause cancer
        {"\n\n"}
        Safe range: Unsafe levels start at 2,200 - 30,000 ppb.
        {"\n\n"}
        Ways to reduce harm:
        {"\n"}
        - Avoid remaining in enclosed spaces with the following sources:
        {"\n"}
        - Paint, paint thinners
        {"\n"}
        - Cleaners, pesticides, gasoline
        {"\n"}
        - Tobacco smoke
        {"\n"}
        - Gas and wood stoves
        {"\n"}
        - Diesel
        {"\n"}
        - Industrial processes
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'Arial', // Match font family
    color: '#450', // Match text color
  },
  text: {
    fontSize: 16,
    fontFamily: 'Arial', // Match font family
    color: '#450', // Match text color
  },
});

export default VOC;
