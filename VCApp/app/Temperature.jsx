import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Temperature = () => {
  return (
    <View style={styles.container}>

    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Temperature</Text>
      </View>
      <Text style={styles.text}>
        <Text style={styles.boldUnderline}>Associated illnesses:</Text>
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
        <Text style={styles.boldUnderline}>Safe range:</Text> In the range of 90-105 degrees F, the risk of heat exhaustion and heat cramps begins. With strenuous work, this risk begins at 77 degrees F.
        {"\n\n"}
        <Text style={styles.boldUnderline}>Ways to reduce harm:</Text>
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
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 480,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
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

export default Temperature;