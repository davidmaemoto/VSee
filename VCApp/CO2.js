import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const CO2 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>CO2</Text>
      <Text style={styles.text}>
        Associated illnesses:
        {"\n\n"}
        - Increased risk of arrhythmias
        {"\n"}
        - Elevated blood pressure
        {"\n"}
        - Confusion
        {"\n"}
        - Rapid breathing
        {"\n"}
        - Increased cardiac output
        {"\n\n"}
        Safe range: Starting at 1,000-2000 ppm, drowsiness and poor air complaints begin.
        {"\n\n"}
        Ways to reduce harm:
        {"\n"}
        - HVAC systems
        {"\n"}
        - Use protective equipment (masks) when entering enclosed spaces, especially those with decomposing manure or organic waste.
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

export default CO2;
