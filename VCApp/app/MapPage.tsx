import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
  const { height } = Dimensions.get('window');
  const formContainerHeight = height * 0.6;
  const navigation = useNavigation();


  const navigateToInfoPage = () => {
    navigation.navigate('Info');
  };

  const navigateToHomePage = () => {
    navigation.navigate('Home');
  };

  const navigateToMapPage = () => {
    // nothing should happen
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./VSeeLogo.png')} style={styles.logo} />
      </View>
      <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Plotted data from sensors deployed around the rural Philippines.
          </Text>
      </View>
      <View style={styles.mapContainer}>
        <Image source={currentMap.source} style={[styles.mapImage, { height: formContainerHeight * 0.6 }]} />
      </View>
      <View style={styles.centered}>
        <View style={styles.nameContainer}>
          <Text style={styles.title}>{currentMap.name}</Text>
        </View>
      </View>
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
      <View style={styles.footer}>
        <TouchableOpacity onPress={navigateToInfoPage} style={styles.tab}>
          <Text style={styles.tabText}>Info</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToHomePage} style={styles.tab}>
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToMapPage} style={styles.buttonBackground}>
          <Text style={styles.selectedText}>Map</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 480,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingTop: 20,
    paddingBottom: 10,
  },
  centered: {
    alignItems:"center",
  },
  title: {
    fontSize: 24,
    color: '#333',
  },
  nameContainer: {
    borderColor: "#005F37",
    borderWidth: 2.5,
    borderRadius: 30,
    paddingHorizontal: 0,
    paddingVertical: 3,
    marginBottom: 4,
    marginTop:-15,
    alignItems:"center",
    width:250,
  },
  logoContainer: {
    width: '100%',
    alignItems: "center",
    marginBottom:-20,
  },
  logo: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
    marginTop:0,
  },
  infoContainer: {
    paddingHorizontal: 30,
  },
  infoText: {
    paddingVertical: 15,
    color: "#646464",
    fontSize: 20,
  },
  mapContainer:{
    marginTop:-20,
    alignItems:"center",
  },
  mapImage: {
    width: '90%',
    resizeMode: 'contain',
    marginBottom: 0,
    borderRadius: 10,
    borderWidth: 2.5,
    borderColor: '#005F37',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#16B860',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  buttonBackground: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 2,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderRadius: 37,
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#008B51",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    height: 50,
    justifyContent: "center",
  },
  selectedText: {
    color: "black",
    fontSize: 18,
  },
  tabText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default MapPage;
