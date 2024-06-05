import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Particulates = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Particulates</Text>
      </View>
      <Text style={styles.text}>
        PM1.0, PM 2.5, PM10
        {"\n\n"}
        All stand for “particulate matter” followed by the size in micrometers of each particle. The smaller the particle size, the more harmful to human health.
        {"\n\n"}
        <Text style={styles.boldUnderline}>Associated Illnesses:</Text>
        {"\n"}
        - Worsened heart and lung issues
        {"\n"}
        - Visibility impairment
        {"\n"}
        - Nonfatal heart attacks
        {"\n"}
        - Worsened asthma
        {"\n\n"}
        <Text style={styles.boldUnderline}>Ways to reduce harm:</Text>
        {"\n"}
        - Avoid indoor burning
        {"\n"}
        - Close windows if levels are high outdoors
        {"\n"}
        - Wear respirator masks when high levels are detected.
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

export default Particulates;