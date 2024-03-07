import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import CustomModal from '../components/Modal/Modal';


const NoModal = ({ isVisible, onClose ,cancel}) => {
  return (
    <CustomModal isVisible={isVisible} onClose={onClose} cancel>
      
      <Text style={styles.title}>OH NO</Text>
      
      <Image 
        source={require("../assets/Modals/Modal2.png")} 
        style={styles.image}
      />
      
      <Text style={styles.normalText}>Its so close focus more and you can do it</Text>
      
      <TouchableOpacity style={styles.customButton} onPress={() => {/*  */}}>
        <Text style={styles.buttonText}>Try Again</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.HintButton} onPress={() => {/*  */}}>
        <Text style={styles.HintText}>Ask For Hint</Text>
      </TouchableOpacity>
      
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF2F12', 
    marginBottom: 8,
  },
 
  image: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  normalText: {
    fontSize: 13,
    color: '#000', 
    textAlign: 'center',
    marginBottom: 16,
    fontWeight:"300",
    
  },
  customButton: {
    backgroundColor: '#D4A75B', 
    paddingVertical: 10,
    paddingHorizontal: 46,
    borderRadius: 4,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  HintButton:{
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 0.5,
    borderColor: "#D4A75B",
    borderStyle: "solid",
    marginBottom: 16,
  },
  HintText:{
    color:"#D4A75B"
  }
 
});

export default NoModal;
