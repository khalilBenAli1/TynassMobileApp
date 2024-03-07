import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 

const CameraBased = ({ navigation }) => {
  return (
    <ImageBackground 
      source={require('../../assets/images/Vector.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#FFF" />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.topRightIcons}>
        <TouchableOpacity  onPress={() => {}}>
          <Icon name="compass" size={35} color="#31D191" />
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => {}}>
          <Icon name="lightbulb" size={35} color="#D4A75B" style={styles.rightIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/150' }} 
          style={styles.centerImage}
        />
      </View>

      <ImageBackground 
        source={require('../../assets/images/Textbg.png')}
        style={styles.scrollableTextBackground}
      >
        <ScrollView style={styles.scrollableView}>
        <Text style={styles.scrollableTitle}>
            Title
          </Text>
          <Text style={styles.scrollableText}>
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </Text>
        </ScrollView>
      </ImageBackground>

      <TouchableOpacity style={styles.actionButton} onPress={() => {/* Handle action */}}>
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
    backgroundColor: "#161615",
  },
  topBar: {
    marginTop:60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    color:"white"
  },
  backButtonText: {
    color: 'white',
    marginLeft: 8,
  },
  topRightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightIcon: {
    marginLeft: 16,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerImage: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  scrollableTextBackground: {
    marginTop:-40,
    marginVertical: 20,
    paddingHorizontal: 20,
    height: 200,
    borderRadius:50
   
    
  },
  scrollableView: {
    maxHeight: 200,
  },
  scrollableText: {
    color: 'black',
    padding:10,
  },
  actionButton: {
    backgroundColor: '#D4A75B',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom:10,
    marginTop:20,
    width:'80%',
    alignSelf:"center",
  },
  buttonText: {
    color: '#FFF',
  },
  scrollableTitle:{
    marginTop:10,
    textAlign:"center",
    fontSize:20,
    fontWeight:'bold'
  }
});

export default CameraBased;
