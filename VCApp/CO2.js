import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const CO2 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>CO2</Text>
      </View>
      <Text style={styles.text}>
        <Text style={styles.boldUnderline}>Associated illnesses:</Text>
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
        <Text style={styles.boldUnderline}>Safe range:</Text> Starting at 1,000-2000 ppm, drowsiness and poor air complaints begin.
        {"\n\n"}
        <Text style={styles.boldUnderline}>Ways to reduce harm:</Text>
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

export default CO2;
