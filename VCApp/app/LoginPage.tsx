import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const LoginPage: React.FC = () => {
  const navigation = useNavigation();
  const screenHeight = height;
  const formContainerHeight = screenHeight * 0.6;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    if (username === 'user@gmail.com' && password === 'password1') {
      // Navigate to Home on successful login
      navigation.navigate('Home');
    } else {
      // Display error message
      alert('Invalid credentials. Please enter correct username and password.');
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#16B860', '#005F37']} // Define your gradient colors here
        style={styles.gradient}
      >
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a42e37cf8b06532e31b2617d4d8256bbfac1f94e8dc649ad81efe2bd39b37d46?apiKey=b4909f7066c74c2baa63c57786d2a37c&',
          }}
          style={styles.image}
        />
        <Text style={styles.heading}>Climate, health, and patient information.</Text>
        <View style={[styles.formContainer, { height: formContainerHeight }]}>
          <View style={styles.form}>
            <Text style={styles.title}>LOGIN</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(text) => setUsername(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
              <Text style={styles.loginButtonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupText}>
              Don’t have an account? <Text style={styles.signupLink}>Sign up.</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: 480,
    backgroundColor: 'transparent',
  },
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  image: {
    marginTop: 12,
    width: 160,
    aspectRatio: 2.78,
  },
  heading: {
    marginTop: 13,
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
  formContainer: {
    alignSelf: 'stretch',
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: 70,
    marginTop: 40,
    paddingVertical: 20,
    marginBottom: -50,
  },
  form: {
    paddingHorizontal: 40,
    paddingTop: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'green',
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#333',
  },
  loginButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginTop: 12,
    backgroundColor: '#008B51',
    borderRadius: 37,
  },
  loginButtonText: {
    fontSize: 22,
    color: 'white',
  },
  signupButton: {
    alignSelf: 'center',
    marginTop: 56,
  },
  signupText: {
    fontSize: 20,
    color: 'green',
    textAlign: 'center',
  },
  signupLink: {
    fontWeight: 'bold',
    color: '#008B51',
    textDecorationLine: 'underline',
  },
  
});

export default LoginPage;
