import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const HomePage: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const navigation = useNavigation();
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
        {weather && (
        <View style={styles.weatherContainer}>
        <Text style={styles.weatherText}>Current weather in Manila, Philippines</Text>
        <Text style={styles.weatherText}>Description: {weather.weather[0].description}</Text>
        <Text style={styles.weatherText}>Temperature: {weather.main.temp}°C</Text>
        <Text style={styles.weatherText}>Feels Like: {weather.main.feels_like}°C</Text>
        <Text style={styles.weatherText}>Humidity: {weather.main.humidity}%</Text>
        <Text style={styles.weatherText}>Wind Speed: {weather.wind.speed} m/s</Text>
       </View>

      )}
      <View style={styles.mapView}>
        <Text style={styles.mapViewHeading}>Sensor Map View:</Text>
        <Image source={require('./plainmaphome.png')} style={styles.mapImage} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={navigateToInfoPage} style={styles.tab}>
          <Text style={styles.tabText}>Info</Text>
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
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  weatherContainer: {
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  weatherText: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'Arial', // Change font family
    color: '#450', // Change text color
  },
  mapView: {
    alignItems: "center",
  },
  mapViewHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  mapImage: {
    width: 300,
    height: 200,
    marginTop: 10,
    resizeMode: 'contain',
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    height: 50,
    justifyContent: "center",
  },
  tabText: {
    color: "#fff",
    fontSize: 18,
  },
});


export default HomePage;
