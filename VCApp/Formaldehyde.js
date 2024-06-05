import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Formaldehyde = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Formaldehyde</Text>
      <Text style={styles.text}>
        HCHO (CH₂O, Formaldehyde)
        {"\n\n"}
        Associated Illnesses:
        {"\n"}
        - Eye irritation
        {"\n"}
        - Damage to lungs
        {"\n"}
        - Asthma
        {"\n"}
        - Allergies
        {"\n"}
        - Cancer (particularly leukemia)
        {"\n\n"}
        Safe Ranges: Exposure starting between 50-123 micrograms/milliliter cubed becomes harmful.
        {"\n\n"}
        Ways to reduce harm:
        {"\n"}
        - Avoid long-term exposure to industrial emissions in air sources
        {"\n"}
        - Avoid incense-burning, smoking, heating, or cooking without ventilation
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

export default Formaldehyde;
