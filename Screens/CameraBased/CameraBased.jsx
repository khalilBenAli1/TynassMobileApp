import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, ImageBackground } from 'react-native';
import MissionTemplate from '../../components/MissionTamplate';
import SolutionModal from '../../Modals/SolutionModal';

const CameraBasedScreen = ({ navigation, photo, scrollText, externalLink, latitude, longitude }) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);


  const openCamera = () => {
    console.log("Camera Opened");
  };

  const openDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  return (
    <MissionTemplate
      navigation={navigation}
      directionOnClick={openDirections}
      hint="More info about the camera usage"
      hintOnClick={openModal}
    >
      <SolutionModal
        isVisible={modalVisible}
        onClose={closeModal}
        cancel={closeModal}
      />

      {photo && (
        <Image 
          source={{ uri: photo }}
          style={styles.photo}
          resizeMode="cover"
        />
      )}

      <ImageBackground 
        source={require('../../assets/images/missionBg.png')} // Adjust this path as needed
        style={styles.scrollableTextBackground}
      >
        <ScrollView style={styles.scrollableText}>
          <Text>{scrollText}</Text>
        </ScrollView>
      </ImageBackground>

      <TouchableOpacity style={styles.actionButton} onPress={openCamera}>
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>
    </MissionTemplate>
  );
};

const styles = StyleSheet.create({
  photo: {
    width: '100%',
    height: 200,
    marginTop: 10,
    marginVertical: 6,
  },
  scrollableTextBackground: {
    marginTop: 10,
    padding: 20,
    height: 150,
    borderRadius: 20,
    overflow: 'hidden',
  },
  scrollableText: {
    maxHeight: 150,
    marginVertical: 6,
  },
  actionButton: {
    backgroundColor: '#D4A75B',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    marginVertical: 6,
  },
  buttonText: {
    color: '#FFF',
  }
});

export default CameraBasedScreen;

{/* <CameraBasedScreen
scrollText={
  "This mission will be timed So to make sure that you are on time you need to be on the mission location to start but here the riddle to think about it"
}
externalLink={"test"}
/> */}