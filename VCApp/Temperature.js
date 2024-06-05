import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Temperature = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Temperature</Text>
      <Text style={styles.text}>
        Associated illnesses:
        {"\n\n"}
        - Heat cramps
        {"\n"}
        - Heat exhaustion
        {"\n"}
        - Heatstroke
        {"\n"}
        - Hyperthermia
        {"\n"}
        - Worsened chronic conditions, particularly pulmonary and cardiovascular-related conditions.
        {"\n\n"}
        Safe range: In the range of 90-105 degrees F, the risk of heat exhaustion and heat cramps begins. With strenuous work, this risk begins at 77 degrees F.
        {"\n\n"}
        Ways to reduce harm:
        {"\n"}
        - Apply sunscreen
        {"\n"}
        - Wear loose, lightweight clothing
        {"\n"}
        - Take breaks if possible
        {"\n"}
        - Drink fresh water
        {"\n"}
        - Seek shade
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

export default Temperature;
