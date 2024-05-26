import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 

const MissionTemplate = ({ navigation, directionOnClick, hint, hintOnClick, children }) => {
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
          <TouchableOpacity  onPress={directionOnClick}>
            <Icon name="compass" size={35} color="#31D191" />
          </TouchableOpacity>
         {hint && <TouchableOpacity  onPress={hintOnClick}>
            <Icon name="lightbulb" size={35} color="#D4A75B" style={styles.rightIcon} />
          </TouchableOpacity>}
        </View>
      </View>
      <View style={styles.contentContainer}>
        {children}
      </View>
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
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
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
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hintButton: {
    backgroundColor: '#31D191',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  hintText: {
    color: '#FFF',
  },
  directionButton: {
    backgroundColor: '#D4A75B',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
  }
});

export default MissionTemplate;
