import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MapPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Map Page</Text>
      <Image source={require('./map.jpeg')} style={styles.mapImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mapImage: {
    width: '100%',
    height: 300, // Set an appropriate height
    resizeMode: 'contain', // Adjust the image to fit within the container
  },
});

export default MapPage;
