import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Humidity = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Humidity</Text>
      </View>
      <Text style={styles.text}>
        <Text style={styles.boldUnderline}>Associated illnesses:</Text>
        {"\n\n"}
        - See temperature-related risks above
        {"\n"}
        - Increased growth of mold and fungus
        {"\n"}
        - Can worsen air quality, see lower air quality-related indicators
        {"\n"}
        - Chronic kidney disease associated with increased sweating
        {"\n\n"}
        <Text style={styles.boldUnderline}>Safe range:</Text> Indoor humidity between 30 and 50% is ideal for human health.
        {"\n\n"}
        <Text style={styles.boldUnderline}>Ways to reduce harm:</Text>
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

export default Humidity;
