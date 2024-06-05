
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Particulates = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Particulates</Text>
      <Text style={styles.text}>
        PM1.0, PM 2.5, PM10
        {"\n\n"}
        All stand for “particulate matter” followed by the size in micrometers of each particle. The smaller the particle size, the more harmful to human health.
        {"\n\n"}
        Associated Illnesses:
        {"\n"}
        - Worsened heart and lung issues
        {"\n"}
        - Visibility impairment
        {"\n"}
        - Nonfatal heart attacks
        {"\n"}
        - Worsened asthma
        {"\n\n"}
        Ways to reduce harm:
        {"\n"}
        - Avoid indoor burning
        {"\n"}
        - Close windows if levels are high outdoors
        {"\n"}
        - Wear respirator masks when high levels are detected.
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

export default Particulates;
