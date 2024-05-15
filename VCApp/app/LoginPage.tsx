import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a42e37cf8b06532e31b2617d4d8256bbfac1f94e8dc649ad81efe2bd39b37d46?apiKey=b4909f7066c74c2baa63c57786d2a37c&",
        }}
        style={styles.image}
      />
      <Text style={styles.heading}>
        Climate, health, and patient information.
      </Text>
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <Text style={styles.title}>LOGIN</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Email" />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText}>
            Don’t have an account?{" "}
            <Text style={styles.signupLink}>Sign up.</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 10,
    width: "100%",
    maxWidth: 480,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    marginTop: 12,
    width: 120,
    aspectRatio: 2.78,
  },
  heading: {
    marginTop: 8,
    fontSize: 20,
    color: "white",
  },
  formContainer: {
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: "white",
    minHeight: 659,
    borderRadius: 16,
    marginTop: 8,
  },
  form: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 6,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "green",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  loginButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 8,
    backgroundColor: "green",
    borderRadius: 37,
  },
  loginButtonText: {
    fontSize: 20,
    color: "white",
  },
  signupButton: {
    alignSelf: "center",
    marginTop: 56,
  },
  signupText: {
    fontSize: 18,
    color: "green",
    textAlign: "center",
  },
  signupLink: {
    fontWeight: "bold",
    color: "green",
    textDecorationLine: "underline",
  },
});

export default LoginPage;
