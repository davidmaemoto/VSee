import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const HomePage: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const navigation = useNavigation();
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=Manila,PH&appid=210cbef66f175b64953b53ba0c41642c&units=metric`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  const navigateToInfoPage = () => {
    navigation.navigate('Info');
  };

  const navigateToHomePage = () => {
    //nothing should happen
  };

  const navigateToMapPage = () => {
    navigation.navigate('Map');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./VSeeLogo.png')} style={styles.logo} />
      </View>
      <View style={styles.locationView}>
      < Text style={styles.mapViewHeading}>Sensor View</Text>
      </View>
      <View style={styles.mapView}>
          <Image source={require('./plainmaphome.png')} style={styles.mapImage} />
      </View>
      <View style={styles.locationView}>
        <Text style={styles.locationText}>Conditions in: </Text>        
      </View>
      <View style={styles.searchContainer}>
        <Text style={styles.locationText}>Manila, Philippines </Text>        
      </View>
      {weather && (
        <View style={styles.locationView}>
          <Text style={styles.weatherText}>Description: {weather.weather[0].description}</Text>
          <Text style={styles.weatherText}>Temperature: {weather.main.temp}°C</Text>
          <Text style={styles.weatherText}>Feels Like: {weather.main.feels_like}°C</Text>
          <Text style={styles.weatherText}>Humidity: {weather.main.humidity}%</Text>
          <Text style={styles.weatherText}>Wind Speed: {weather.wind.speed} m/s</Text>
        </View>
      )}
      <View style={styles.footer}>
        <TouchableOpacity onPress={navigateToInfoPage} style={styles.tab}>
          <Text style={styles.tabText}>Info</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToHomePage} style={styles.buttonBackground}>
          <Text style={styles.selectedText}>Home</Text>
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
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingTop: 20,
    paddingBottom: 10,
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
  },
  searchContainer: {
    borderColor: "#005F37",
    borderWidth: 2.5,
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginBottom: 20,
  },
  locationView: {
    marginTop: -5, // Added to move the mapView higher
    marginLeft:5,
  },
  locationText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  weatherText: {
    fontSize: 20,
    marginBottom: 5,
  },
  mapView: {
    alignItems: "center",
    marginTop: 0, // Added to move the mapView higher
  },
  mapViewHeading: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems:"center",
    marginBottom:0,
    marginTop: 0, // Reduced to move the heading higher
  },
  mapImage: {
    width: 430,
    height: 350,
    marginTop: -10, // Reduced to move the image higher
    borderColor: "#005F37",
    borderWidth:3,
    borderRadius: 30,
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

export default HomePage;
