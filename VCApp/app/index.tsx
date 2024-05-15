import React from "react";
import { View, StyleSheet } from "react-native";
import LoginPage from "./LoginPage"; // Ensure the path is correct

const Index: React.FC = () => {
  return (
    <View style={styles.container}>
      <LoginPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Index;
