import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Instruction = () => {
  const navigation=useNavigation()
  return (
    <ImageBackground
      source={require('../../assets/images/Vector.png')}
      style={styles.container}
      resizeMode="cover"
    >
       <ImageBackground
        source={require('../../assets/images/oldPaper.png')} // Make sure to replace this with your actual image path
        style={styles.innerContainer}
        resizeMode="cover"
      >
        <ScrollView>
        <Text style={styles.title}>Instruction</Text>
        <Text style={styles.instructionsText}>
          1. Finding Clues{"\n"}
          {"\n"}
          Once you have arrived at the location of the first clue, use the mobile application to scan the QR code or enter the clue code to receive the next clue.
          {"\n"}
          {"\n"}
          2. Solving Puzzles{"\n"}
          {"\n"}
          Some of the clues you encounter will require you to solve puzzles or riddles. Read the clues carefully and use your problem-solving skills to progress through the treasure hunt.
          {"\n"}

          3. Completing Challenges{"\n"}
          {"\n"}
          Other clues will require you to complete challenges or tasks in order to progress. These challenges can be physical or mental and will require you to work together with your team to succeed.
        </Text>
        </ScrollView>
      </ImageBackground>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TeamSelect')}>
        <Text style={styles.buttonText}>Loud & Clear</Text>
      </TouchableOpacity>
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
  innerContainer: {
    maxHeight:"70%",
    padding: 30,
    borderRadius: 10,
    marginVertical: 20,
  },
  instructionsText: {
    color: 'black',
    fontSize: 14,
    lineHeight: 25,
    padding:10
  },
  title:{
    fontWeight:"bold",
    fontSize:24,
    alignSelf:"center",
    marginVertical:10
  },
  button: {
    backgroundColor: '#D4A75B',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default Instruction;
