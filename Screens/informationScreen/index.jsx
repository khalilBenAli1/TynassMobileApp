import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, StyleSheet, Linking } from 'react-native';
import MissionTemplate from '../../components/MissionTamplate';

const InformationBasedScreen = ({ route }) => {
  const { mission } = route.params;

  const openLink = () => {
    Linking.openURL(mission.experienceURL);
  };

  const openDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${mission.latitude},${mission.longitude}`;
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  return (
    <MissionTemplate
      directionOnClick={openDirections}
      hint={mission.hint}
      hintOnClick={() => {}}
    >
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{mission.missionName}</Text>
        <Text style={styles.descriptionText}>{mission.description}</Text>
      </View>

      {mission.coverImage && (
        <Image 
          source={{ uri: mission.coverImage }}
          style={styles.photo}
          resizeMode="cover"
        />
      )}

      <ImageBackground 
        source={require('../../assets/images/missionBg.png')}
        style={styles.scrollableTextBackground}
        resizeMode='contain'
      >
        <ScrollView style={styles.scrollableText}>
          <Text style={{ fontSize: 18 }}>{mission.description}</Text>
        </ScrollView>
      </ImageBackground>

      {mission.experienceURL && (
        <TouchableOpacity onPress={openLink} style={styles.linkButton}>
          <Text style={styles.linkButtonText}>Click Me</Text>
        </TouchableOpacity>
      )}
    </MissionTemplate>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    padding: 10,
    marginVertical: 6,
  },
  titleText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: "center",
    marginVertical: 6,
  },
  descriptionText: {
    color: '#FFF',
    fontSize: 16,
    marginTop: 10,
    marginVertical: 6,
  },
  photo: {
    width: '100%',
    height: 200,
    marginTop: 10,
    marginVertical: 6,
  },
  scrollableTextBackground: {
    marginTop: 10,
    padding: 20,
    minHeight: 200,
    borderRadius: 20,
    overflow: 'hidden',
    minWidth: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  scrollableText: {
    maxHeight: 150,
    marginVertical: 6,
    fontSize: 23,
  },
  linkButton: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 0.5,  
    borderStyle: 'solid',
    marginTop: 10,
    alignItems: 'center',
    width: '80%',
    marginVertical: 6,
  },
  linkButtonText: {
    color: '#FFF',
  },
});

export default InformationBasedScreen;
