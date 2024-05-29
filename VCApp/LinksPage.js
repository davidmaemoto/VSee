// LinksPage.js
import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

const LinksPage = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Links Page</Text>
      <Button
        title="Humidity"
        onPress={() => navigation.navigate('Humidity')}
      />
      <Button
        title="Formaldehyde"
        onPress={() => navigation.navigate('Formaldehyde')}
      />
      <Button
        title="Particulates (PM 1.0, 2.5, 10) "
        onPress={() => navigation.navigate('Particulates')}
      />
      <Button
        title="Temperature"
        onPress={() => navigation.navigate('Temperature')}
      />
      <Button
        title="Volatile Organic Compounds (VOC)"
        onPress={() => navigation.navigate('VOC')}
      />
      <Button
        title="Carbon Dioxide (CO2)"
        onPress={() => navigation.navigate('CO2')}
      />
    </ScrollView>
  );
};

export default LinksPage;
