// App.tsx or index.tsx

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './LoginPage'; // Ensure the path is correct
import HomePage from './HomePage'; // Ensure the path is correct
import MapPage from './MapPage'; // Ensure the path is correct
import InfoPage from './InfoPage'; // Ensure the path is correct

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Map" component={MapPage} />
        <Stack.Screen name="Info" component={InfoPage} />
      </Stack.Navigator>
  );
};

export default App;
