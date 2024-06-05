import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Formaldehyde = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Formaldehyde</Text>
      </View>
      <Text style={styles.text}>
        HCHO (CH₂O, Formaldehyde)
        {"\n\n"}
        <Text style={styles.boldUnderline}>Associated Illnesses:</Text>
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
        <Text style={styles.boldUnderline}>Safe Ranges:</Text> Exposure starting between 50-123 micrograms/milliliter cubed becomes harmful.
        {"\n\n"}
        <Text style={styles.boldUnderline}>Ways to reduce harm:</Text>
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
    backgroundColor: '#fff', // Change background color to white
  },
  banner: {
    width: '100%',
    padding: 10,
    backgroundColor: 'green',
    alignItems: 'center',
    marginBottom: 20,
  },
  bannerText: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Arial',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Arial',
    color: '#450',
  },
  boldUnderline: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default Formaldehyde;
