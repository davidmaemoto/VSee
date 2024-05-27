import React from "react";
import {
 View,
 StyleSheet,
 Image,
 Text,
 TextInput,
 TouchableOpacity,
 Dimensions,
} from "react-native";
import { useNavigation } from '@react-navigation/native';


function LoginPage() {
 const navigation = useNavigation();
 const screenHeight = Dimensions.get("window").height;
 const screenWidth = Dimensions.get("window").width;
 const formContainerHeight = screenHeight * 0.6;


 const handleLoginPress = () => {
   // Navigate to HomePage on login press
   navigation.navigate('Home');
 };


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
     <View style={[styles.formContainer, { height: formContainerHeight }]}>
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
         <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
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
}


const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: "flex-end",
   alignItems: "center",
   paddingTop: 20,
   paddingHorizontal: 20,
   width: "100%",
   maxWidth: 480,
   backgroundColor: "#00741A",
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
   width: 160, // Increased size
   aspectRatio: 2.78,
 },
 heading: {
   marginTop: 4, // Moved up
   fontSize: 24, // Increased font size
   color: "white",
   textAlign: "center", // Center the text
 },
 formContainer: {      // White rectangle
   alignSelf: "stretch",
   overflow: "hidden",
   backgroundColor: "white",
   borderRadius: 40,   // rounded edges of white section
   marginTop: 20, // Adjusted to move the section up/down
   paddingVertical: 20, // Increased padding for more space
   shadowColor: "#000",
   shadowOffset: {
     width: 0,
     height: -3,
   },
   shadowOpacity: 0.5,
   shadowRadius: 10,
 },
 form: {
   paddingHorizontal: 20,
   paddingTop: 20,
 },
 title: {
   fontSize: 34, // Increased font size
   fontWeight: "bold",
   color: "#000",
   marginBottom: 10,
   // textAlign: "center", // Removed to align to the left
 },
 inputContainer: {
   flexDirection: "row",
   alignItems: "center",
   paddingHorizontal: 20,
   paddingVertical: 12, // Increased padding
   marginTop: 10, // Increased margin
   backgroundColor: "white",
   borderRadius: 20,
   borderWidth: 2,
   borderColor: "green",
 },
 input: {
   flex: 1,
   fontSize: 18, // Increased font size
   color: "#333",
 },
 loginButton: {
   flexDirection: "row",
   justifyContent: "center",
   alignItems: "center",
   paddingHorizontal: 20,
   paddingVertical: 12, // Increased padding
   marginTop: 12, // Increased margin
   backgroundColor: "green",
   borderRadius: 37,
 },
 loginButtonText: {
   fontSize: 22, // Increased font size
   color: "white",
 },
 signupButton: {
   alignSelf: "center",
   marginTop: 56,
 },
 signupText: {
   fontSize: 20, // Increased font size
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
