import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const mapImages = [
  { label: 'Default', name: 'Sensor Map', source: require('./map_img/default.jpeg') },
  { label: 'Humidity Map', name: 'Humidity Map', source: require('./map_img/Humidity.jpeg') },
  { label: 'CO2 Map', name: 'CO2 Map', source: require('./map_img/CO2.jpeg') },
  { label: 'CH2O Map', name: 'CH2O Map', source: require('./map_img/CH2O.jpeg') },
  { label: 'Temperature Map', name: 'Temperature Map', source: require('./map_img/Temperatures.jpeg') },
  { label: 'VOC Map', name: 'VOC Map', source: require('./map_img/VOC.jpeg') },
  { label: 'PM 2.5 Map', name: 'PM 2.5 Map', source: require('./map_img/PM25.jpeg') },
];

const MapPage: React.FC = () => {
  const [currentMap, setCurrentMap] = useState(mapImages[0]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{currentMap.name}</Text>
      <Image source={currentMap.source} style={styles.mapImage} />
      <View style={styles.buttonContainer}>
        {mapImages.map((map, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => setCurrentMap(map)}
          >
            <Text style={styles.buttonText}>{map.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f4f7',
  },
  title: {
    fontSize: 24,
    color: '#333',
    marginBottom: 20,
  },
  mapImage: {
    width: '100%',
    height: 300, // Set an appropriate height
    resizeMode: 'contain', // Adjust the image to fit within the container
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default MapPage;
