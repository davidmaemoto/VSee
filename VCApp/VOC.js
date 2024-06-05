import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const VOC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>VOC (Volatile Organic Compounds)</Text>
      </View>
      <Text style={styles.text}>
        <Text style={styles.boldUnderline}>Associated illnesses:</Text>
        {"\n\n"}
        - Breathing them in can irritate the eyes, nose, and throat
        {"\n"}
        - Nausea
        {"\n"}
        - Damage to CNS and organs
        {"\n"}
        - Can sometimes cause cancer
        {"\n\n"}
        <Text style={styles.boldUnderline}>Safe range:</Text> Unsafe levels start at 2,200 - 30,000 ppb.
        {"\n\n"}
        <Text style={styles.boldUnderline}>Ways to reduce harm:</Text>
        {"\n"}
        - Avoid remaining in enclosed spaces with the following sources:
        {"\n"}
        - Paint, paint thinners
        {"\n"}
        - Cleaners, pesticides, gasoline
        {"\n"}
        - Tobacco smoke
        {"\n"}
        - Gas and wood stoves
        {"\n"}
        - Diesel
        {"\n"}
        - Industrial processes
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

export default VOC;
