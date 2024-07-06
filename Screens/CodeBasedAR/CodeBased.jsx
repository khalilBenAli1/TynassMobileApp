import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, ImageBackground, Linking } from 'react-native';
import Video from 'react-native-video';
import SolutionModal from '../../Modals/SolutionModal';
import TimerComponent from '../../components/Timer';
import MissionTemplate from '../../components/MissionTamplate/index.jsx';
import SubmitAnswerModal from '../../Modals/SubmitAnswerModal';
import { Audio } from 'expo-av';

const CodeBasedScreen = ({ navigation, route }) => {
  const { mission } = route.params;
  const { photo, video, audio, scrollText, externalLink, latitude, longitude, hint, codeSolution } = mission;

  const [missionStarted, setMissionStarted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [solutionModalVisible, setSolutionModalVisible] = useState(false);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  const submitSolution = (inputSolution) => {
    if (inputSolution === codeSolution) {
      // Handle correct solution
      console.log('Correct solution!');
      navigation.navigate('Mission');
    } else {
      // Handle incorrect solution
      console.log('Incorrect solution!');
    }
    setMissionStarted(false);
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
    submitSolution(answer);
  };

  const handleAudioPress = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    } else {
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: audio },
        { shouldPlay: true }
      );
      setSound(newSound);
      setIsPlaying(true);
    }
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
        text={hint}
      />
      <SubmitAnswerModal
        isVisible={solutionModalVisible}
        onClose={closeSolutionModal}
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

      {video ? (
        <Video
          source={{ uri: video }}
          style={styles.media}
          controls
          resizeMode="cover"
        />
      ) : audio ? (
        <View style={styles.audioContainer}>
          <TouchableOpacity onPress={handleAudioPress} style={styles.playButton}>
            <Text style={styles.buttonText}>{isPlaying ? 'Pause' : 'Play'}</Text>
          </TouchableOpacity>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: '50%' }]} />
          </View>
        </View>
      ) : photo && (
        <Image
          source={{ uri: photo }}
          style={styles.photo}
          resizeMode="cover"
        />
      )}

      <ImageBackground
        source={require('../../assets/images/missionBg.png')} // Replace with your actual background image path
        style={styles.scrollableTextBackground}
        resizeMode='contain'
      >
        <ScrollView style={styles.scrollableText}>
          <Text style={{ fontSize: 18 }}>Find the code{scrollText}</Text>
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
  media: {
    width: '100%',
    height: 200,
    marginTop: 10,
    marginVertical: 6,
  },
  audioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  playButton: {
    backgroundColor: '#D4A75B',
    padding: 10,
    borderRadius: 5,
  },
  progressBarContainer: {
    flex: 1,
    height: 5,
    backgroundColor: '#555',
    marginLeft: 10,
  },
  progressBar: {
    height: 5,
    backgroundColor: '#D4A75B',
  },
  scrollableTextBackground: {
    marginTop: 10,
    padding: 20,
    minHeight: 200,
    borderRadius: 20,
    overflow: 'hidden',
    minWidth: '100%',
    justifyContent: "center",
    alignItems: "center"
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

export default CodeBasedScreen;
