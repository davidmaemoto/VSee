// LinksPage.js
import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

const LinksPage = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Links Page</Text>
      <Button
        title="Go to Humidity"
        onPress={() => navigation.navigate('Humidity')}
      />
      <Button
        title="Go to Formaldehyde"
        onPress={() => navigation.navigate('Formaldehyde')}
      />
      <Button
        title="Go to Particulates"
        onPress={() => navigation.navigate('Particulates')}
      />
      <Button
        title="Go to Temperature"
        onPress={() => navigation.navigate('Temperature')}
      />
      <Button
        title="Go to VOC"
        onPress={() => navigation.navigate('VOC')}
      />
      <Button
        title="Go to CO2"
        onPress={() => navigation.navigate('CO2')}
      />
    </ScrollView>
  );
};

export default LinksPage;
