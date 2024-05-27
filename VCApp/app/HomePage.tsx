// HomePage.tsx

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to the Home Page</Text>
      {/* Add more content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default HomePage;
