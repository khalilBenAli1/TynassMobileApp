import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, ImageBackground, Linking } from 'react-native';
import SolutionModal from '../../Modals/SolutionModal';
import TimerComponent from '../../components/Timer';
import MissionTemplate from '../../components/MissionTamplate';
import SubmitAnswerModal from '../../Modals/SubmitAnswerModal';
const CodeBasedScreen = ({ navigation, photo, scrollText, externalLink,latitude, longitude }) => {
  const [missionStarted, setMissionStarted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [solutionmodalVisible, setSolutionModalVisible] = useState(false);

  const openSolutionModal = () => {
    setSolutionModalVisible(true);
  };

  const closeSolutionModal = () => {
    setSolutionModalVisible(false);
  };
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const startMission = () => {
    setMissionStarted(true);
  };

  const submitSolution = () => {
    setMissionStarted(false);
    alert('Solution submitted!');
    // Handle submission logic here
  };

  const openLink = () => {
    Linking.openURL(externalLink);
  };

  const openDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };
  const handleSubmitAnswer = (answer) => {
    console.log('Answer Submitted:', answer); // Handle answer here
    closeModal(); // Close modal after submission
  };
  


  return (
    <MissionTemplate
      navigation={navigation}
      directionOnClick={openDirections}
      hint="More info about the code"
      hintOnClick={openModal}
    >
       <SolutionModal
        isVisible={modalVisible}
        onClose={closeModal}
        cancel={closeModal} 
      />
      <SubmitAnswerModal
        isVisible={solutionmodalVisible}
        onClose={closeModal}
        onSubmit={handleSubmitAnswer}
      />
      <View style={styles.textContainer}>
        
        {missionStarted ? (
          <TimerComponent initialMinutes={3} initialSeconds={0} />
        ) : (
          <>
          <Text style={styles.titleText}>Caution</Text>
          <Text style={styles.descriptionText}>
            This mission will be timed. So to make sure that you are on time you need to be on the mission location to start, but here's the riddle to think about:
          </Text>
          </>
        )}
      </View>

      {photo && (
        <Image 
          source={{ uri: photo }}
          style={styles.photo}
          resizeMode="cover"
        />
      )}

      <ImageBackground 
        source={require('../../assets/images/missionBg.png')} // Replace with your actual background image path
        style={styles.scrollableTextBackground}
      >
        <ScrollView style={styles.scrollableText}>
          <Text>{scrollText}</Text>
        </ScrollView>
      </ImageBackground>

      {externalLink && (
        <TouchableOpacity onPress={openLink} style={styles.linkButton}>
          <Text style={styles.linkButtonText}>Click Me</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.actionButton} onPress={missionStarted ? openSolutionModal : startMission}>
        <Text style={styles.buttonText}>{missionStarted ? 'Submit Solution' : 'Start Mission'}</Text>
      </TouchableOpacity>
    </MissionTemplate>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    padding: 10,
    marginVertical:6,
  },
  titleText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf:"center",
    marginVertical:6,
  },
  descriptionText: {
    color: '#FFF',
    fontSize: 16,
    marginTop: 10,
    marginVertical:6,
  },
  photo: {
    width: '100%',
    height: 200,
    marginTop: 10,
    marginVertical:6,
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
    marginVertical:6,
  },
  linkButton: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 5,
    borderColor:"white",
    borderWidth: 0.5,  
    borderStyle: 'solid',
    marginTop: 10,
    alignItems: 'center',
    width: '80%',
    marginVertical:6,
  },
  linkButtonText: {
    color: '#FFF',
  },
  actionButton: {
    backgroundColor: '#D4A75B',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    marginVertical:6,
  },
  buttonText: {
    color: '#FFF',
  }
});

export default CodeBasedScreen;
