import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../Store/useStore'; 

const Instruction = observer(() => {
  const navigation = useNavigation();
  const store = useStore();
  const instructions = store.currentTrip ? store.currentTrip.instruction : [];

  return (
    <ImageBackground
      source={require('../../assets/images/Vector.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <ImageBackground
        source={require('../../assets/images/oldPaper.png')}
        style={styles.innerContainer}
        resizeMode="cover"
      >
        <ScrollView>
          <Text style={styles.title}>Instruction</Text>
          {console.log(instructions)}
          {instructions.map((instruction, index) => (
            <View key={index} style={styles.instructionBlock}>
              <Text style={styles.instructionTitle}>{index + 1}. {instruction.title}</Text>
              {instruction.rules.map((rule, ruleIndex) => (
                <Text key={ruleIndex} style={styles.instructionRule}>{rule}</Text>
              ))}
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TeamSelect')}>
        <Text style={styles.buttonText}>Loud & Clear</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#161615",
    
  },
  innerContainer: {
    height: "90%",
    width:"98%",
    borderRadius: 10,
    alignSelf:"center",
    marginTop:20
  },
  instructionsText: {
    color: 'black',
    fontSize: 14,
    lineHeight: 25,
    padding: 20
  },
  title: {
    padding: 20,
    fontWeight: "bold",
    fontSize: 24,
    alignSelf: "center",
    marginVertical: 10
  },
  instructionBlock: {
    margin: 10,
    
  },
  instructionTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  instructionRule: {
    color: 'black',
    fontSize: 14,
    marginLeft: 10,
    padding:5,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#D4A75B',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default Instruction;
