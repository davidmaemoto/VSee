import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InfoPage = () => {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;

  const navigateToPage = (page) => {
    navigation.navigate(page);
  };

  const navigateToInfoPage = () => {
    //nothing should happen
  };

  const navigateToHomePage = () => {
    navigation.navigate('Home');
  };

  const navigateToMapPage = () => {
    navigation.navigate('Map');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./VSeeLogo.png')} style={styles.logo} />
      </View>
      <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Investigate health conditions and diseases in the Philippines 
            to learn more about diagnosis, symptoms, and prevalence.
            
          </Text>
      </View>
      <View style={styles.searchContainer}>
          <Text style={styles.infoText}>Disease or Condition</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity style={styles.buttonGreen} onPress={() => navigateToPage('Humidity')}>
          <Text style={styles.buttonText}>Humidity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGreen} onPress={() => navigateToPage('Formaldehyde')}>
          <Text style={styles.buttonText}>Formaldehyde</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGreen} onPress={() => navigateToPage('Particulates')}>
          <Text style={styles.buttonText}>Particulate Matter (PM 1.0, 2.5, 10)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGreen} onPress={() => navigateToPage('Temperature')}>
          <Text style={styles.buttonText}>Temperature</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGreen} onPress={() => navigateToPage('VOC')}>
          <Text style={styles.buttonText}>Volatile Organic Compounds (VOC)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGreen} onPress={() => navigateToPage('CO2')}>
          <Text style={styles.buttonText}>Carbon Dioxide (CO2)</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={navigateToInfoPage} style={styles.buttonBackground}>
          <Text style={styles.selectedText}>Info</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToHomePage} style={styles.tab}>
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToMapPage} style={styles.tab}>
          <Text style={styles.tabText}>Map</Text>
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
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  logoContainer: {
    width: '100%',
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
  },
  infoContainer: {
    paddingHorizontal: 30,

  },
  searchContainer: {
    borderColor: "#005F37",
    borderWidth: 2.5,
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginBottom: 20,
    marginTop:5
  },
  infoText: {
    paddingVertical: 15,
    color: "#646464",
    fontSize: 20,
    marginBottom: 0,
  },
  buttonGreen: {
    backgroundColor: '#16B860',
    padding: 15,
    borderRadius: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
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
  buttonBackground: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderRadius: 37,
    flex: 1,
  },
  
  tab: {
    flex: 1,
    alignItems: "center",
    height: 50,
    justifyContent: "center",
  },
  selectedText: {
    color: 'black',
    fontSize: 18,
  },
  tabText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default InfoPage;
