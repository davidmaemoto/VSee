import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Humidity = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Humidity</Text>
      <Text style={styles.text}>
        Associated illnesses:
        {"\n\n"}
        - See temperature-related risks above
        {"\n"}
        - Increased growth of mold and fungus
        {"\n"}
        - Can worsen air quality, see lower air quality-related indicators
        {"\n"}
        - Chronic kidney disease associated with increased sweating
        {"\n\n"}
        Safe range: Indoor humidity between 30 and 50% is ideal for human health.
        {"\n\n"}
        Ways to reduce harm:
        {"\n"}
        - Dehumidify
        {"\n"}
        - See reducing high temperature harms
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

export default Humidity;


