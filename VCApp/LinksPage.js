import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const LinksPage = ({ navigation }) => {
  const navigateToPage = (page) => {
    navigation.navigate(page);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Links Page</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigateToPage('Humidity')}>
        <Text style={styles.buttonText}>Humidity</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateToPage('Formaldehyde')}>
        <Text style={styles.buttonText}>Formaldehyde</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateToPage('Particulates')}>
        <Text style={styles.buttonText}>Particulate Matter (PM 1.0, 2.5, 10)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateToPage('Temperature')}>
        <Text style={styles.buttonText}>Temperature</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateToPage('VOC')}>
        <Text style={styles.buttonText}>Volatile Organic Compounds (VOC)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateToPage('CO2')}>
        <Text style={styles.buttonText}>Carbon Dioxide (CO2)</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default LinksPage;

