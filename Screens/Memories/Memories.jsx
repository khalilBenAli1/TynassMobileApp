import React, { useState } from 'react'; 
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

const Memories = () => {
  const [inputText, setInputText] = useState(''); 

  return (
    <ImageBackground
      source={require("../../assets/images/Vector.png")}
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.title}>Immortalize your moments</Text>
      <Text style={styles.subtitle}>Your happy moments will be saved and shared with you later via our email</Text>

      <Image
        source={require("../../assets/images/memory.png")}
        style={styles.largeRoundedImage}
      />
      <TextInput 
        style={styles.textInput} 
        onChangeText={setInputText} 
        value={inputText}
        placeholder="Example@email.com" 
        placeholderTextColor="gray"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirm & start</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#161615",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "white",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: "#FFFFFF",
    marginBottom: 20,
  },
  largeRoundedImage: {
    width: 300, 
    height: 300,
    borderRadius: 100,
    alignSelf: 'center',
    margin: 40,
  },
  textInput: {
    width: '80%', 
    borderBottomWidth: 1,
    borderColor: 'white',
    padding: 10,
    marginBottom: 20,
    color: 'white',
    fontSize: 16,
  },
  button: {
    backgroundColor: "#D4A75B",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
export default Memories