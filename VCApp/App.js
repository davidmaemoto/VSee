import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from 'app./LoginPage'; // Adjust the path if needed
import HomePage from 'app./HomePage'; // Adjust the path if needed
import LinksPage from './LinksPage'; // Adjust the path if needed
import Humidity from './Humidity'; // Adjust the path if needed
import Formaldehyde from './Formaldehyde'; // Adjust the path if needed
import Particulates from './Particulates'; // Adjust the path if needed
import Temperature from './Temperature'; // Adjust the path if needed
import VOC from './VOC'; // Adjust the path if needed
import CO2 from './CO2'; // Adjust the path if needed


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}}/>

      <Stack.Navigator
        initialRouteName="Login"
              screenOptions={{
          headerMode:'none',
          headerShown: false, // This hides the default header
        }}
      >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Links" component={LinksPage} />
        <Stack.Screen name="Humidity" component={Humidity} />
        <Stack.Screen name="Formaldehyde" component={Formaldehyde} />
        <Stack.Screen name="Particulates" component={Particulates} />
        <Stack.Screen name="Temperature" component={Temperature} />
        <Stack.Screen name="VOC" component={VOC} />
        <Stack.Screen name="CO2" component={CO2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
