import { View } from "react-native";
import LoginPage from "./LoginPage"; // Import your component

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LoginPage /> {/* Use your React Native component here */}
    </View>
  );
}
