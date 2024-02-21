import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Login = () => {
   
    const openPrivacyPolicy = () => {
      Linking.openURL('http://www.yourprivacypolicyurl.com');
    };
  
    return (
      <ImageBackground
        source={require('../../assets/images/Vector.png')}
        style={styles.container}
        resizeMode="cover"
      >
         <Text style={styles.title}>Treasure Hunt Experience</Text>
        <Image
          source={require('../../assets/images/ezgif3.png')}
          style={styles.mainImage}
        />
        <TouchableOpacity style={styles.connectButton}>
          <Icon name="facebook" size={24} color="#FFF" />
          <Text style={styles.connectButtonText}>Connect with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.connectButton}>
          <Icon name="google" size={24} color="#FFF" />
          <Text style={styles.connectButtonText}>Connect with Google</Text>
        </TouchableOpacity>
        <Text style={styles.disclaimerText}>
          By proceeding you confirm you have read our{' '}
          <Text style={styles.linkText} onPress={openPrivacyPolicy}>
            Terms of Service
          </Text>
          {' and '}
          <Text style={styles.linkText} onPress={openPrivacyPolicy}>
            Privacy Policy
          </Text>
        </Text>
      </ImageBackground>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: "#161615",
    },

    title: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        margin: 20,
        color: "#D4A75B",
      },
    mainImage: {
      width: 300,
      height: 200,
      marginBottom: 40, 
    },
    connectButton: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#FFF',
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 5,
      marginVertical: 10,
      width:"70%"
    },
    connectButtonText: {
      color: '#FFF',
      marginLeft: 10,
    },
    disclaimerText: {
      color: '#FFF',
      textAlign: 'center',
      marginTop: 20,
    },
    linkText: {
      color: 'green',
      textDecorationLine: 'underline',
    },
  });
  

export default Login;
