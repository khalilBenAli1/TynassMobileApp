import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFacebookLogin } from "../../utils/facebookLogin";
import { useGoogleLogin } from "../../utils/googleLogin";

const Login = () => {
  const { promptFacebookLogin } = useFacebookLogin();
  const { promptAsync } = useGoogleLogin();

  const openPrivacyPolicy = () => {
    Linking.openURL('http://www.yourprivacypolicyurl.com');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/Vector.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.title}>Drak<Text style={{color:'white'}}>AR</Text></Text>
      <Text style={styles.subtitle}>Unleash Your Inner Explorer</Text>
      <Image
          source={require('../../assets/images/ezgif3.png')}
          style={styles.mainImage}
        />
      <TouchableOpacity style={styles.connectButton}>
        <Icon name="email" size={24} color="#FFF" />
        <Text style={styles.connectButtonText}>Continue with Email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.connectButton}>
        <Icon name="phone" size={24} color="#FFF" />
        <Text style={styles.connectButtonText}>Continue with Phone Number</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.connectButton}>
        <Icon name="account" size={24} color="#FFF" />
        <Text style={styles.connectButtonText}>Continue as Guest</Text>
      </TouchableOpacity>

      {/* OR Separator */}
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      {/* Social Media Buttons */}
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.iconsButtons} onPress={() => promptFacebookLogin()}>
          <Icon name="facebook" size={30} color="black" style={styles.roundedButton} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconsButtons} onPress={() => promptAsync()}>
          <Icon name="google" size={30} color="black" style={styles.roundedButton} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconsButtons}>
          <Icon name="apple" size={30} color="black" style={styles.roundedButton} />
        </TouchableOpacity>
      </View>

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
    fontSize: 55,
    fontWeight: "bold",
    margin: 20,
    color: "#D4A75B",
  },
  connectButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
    width: "90%"
  },
  mainImage: {
    width: 300,
    height: 200,
    marginBottom: 40, 
  },
  connectButtonText: {
    color: '#FFF',
    marginLeft: 10,
    fontWeight:"bold",
    fontSize:15
  },
  disclaimerText: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle:{
    color:"white",
    fontSize:25,
    fontWeight:700,
  },
  linkText: {
    color: 'green',
    textDecorationLine: 'underline',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#FFF',
    marginHorizontal: 10,
  },
  orText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: "60%"
  },
  roundedButton: {
    padding: 5,
    backgroundColor: "transparent",
    borderRadius: 50,
  },
  iconsButtons:{
    backgroundColor:"white",
    borderRadius:60
  }
});

export default Login;
