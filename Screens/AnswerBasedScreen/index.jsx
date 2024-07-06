import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, ImageBackground, Linking } from 'react-native';
import Video from 'react-native-video';
import SolutionModal from '../../Modals/SolutionModal.jsx';
import TimerComponent from '../../components/Timer/index.jsx';
import MissionTemplate from '../../components/MissionTamplate/index.jsx';

import { Audio } from 'expo-av';

import { useRoute } from '@react-navigation/native';

const AnswerBasedScreen = ({ navigation }) => {
  const route = useRoute();
  const { mission } = route.params;
  
  const {
    coverImage,
    missionImage,
    description,
    hint,
    hintCost,
    lat,
    long,
    experienceURL,
    scorePoint,
    difficulty,
    numberOfTrials,
    quizType,
    answers,
    englishAudio,
    frenchAudio,
    arabeAudio,
    mediaType
  } = mission;

  const [missionStarted, setMissionStarted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [solutionModalVisible, setSolutionModalVisible] = useState(false);
  const [answerModalVisible, setAnswerModalVisible] = useState(false);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerFeedback, setAnswerFeedback] = useState('');

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

  const openAnswerModal = () => {
    setAnswerModalVisible(true);
  };

  const closeAnswerModal = () => {
    setAnswerModalVisible(false);
  };

  const startMission = () => {
    setMissionStarted(true);
  };

  const submitSolution = () => {
    const correctAnswer = answers.find(answer => answer.isCorrect);
    if (selectedAnswer === correctAnswer.answer) {
      setAnswerFeedback('Solved');
    } else {
      setAnswerFeedback('Try Again');
    }
    openAnswerModal();
  };

  const openLink = () => {
    Linking.openURL(experienceURL);
  };

  const openDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${long}`;
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  const handleAudioPress = async (audioUrl) => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    } else {
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: audioUrl },
        { shouldPlay: true }
      );
      setSound(newSound);
      setIsPlaying(true);
    }
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <ScrollView>
    <MissionTemplate
      navigation={navigation}
      directionOnClick={openDirections}
      hint={hint}
      hintOnClick={openModal}
    >
      <SolutionModal
        isVisible={modalVisible}
        onClose={closeModal}
        cancel={closeModal}
        text={hint}
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

      {mediaType === 'video' ? (
        <Video
          source={{ uri: missionImage }}
          style={styles.media}
          controls
          resizeMode="cover"
        />
      ) : mediaType === 'audio' ? (
        <View style={styles.audioContainer}>
          <TouchableOpacity onPress={() => handleAudioPress(englishAudio)} style={styles.playButton}>
            <Text style={styles.buttonText}>{isPlaying ? 'Pause' : 'Play'}</Text>
          </TouchableOpacity>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: '50%' }]} />
          </View>
        </View>
      ) : coverImage && (
        <Image
          source={{ uri: coverImage }}
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
          <Text style={{ fontSize: 18 }}>{description}</Text>
        </ScrollView>
      </ImageBackground>

      {experienceURL && (
        <TouchableOpacity onPress={openLink} style={styles.linkButton}>
          <Text style={styles.linkButtonText}>Click Me</Text>
        </TouchableOpacity>
      )}

      {missionStarted && (
        <View style={styles.choicesContainer}>
          {answers.map((choice, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.choiceButton,
                selectedAnswer === choice.answer && styles.selectedChoiceButton
              ]}
              onPress={() => handleAnswerSelect(choice.answer)}
            >
              <Text style={styles.choiceText}>{choice.answer}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <TouchableOpacity style={styles.actionButton} onPress={missionStarted ? submitSolution : startMission}>
        <Text style={styles.buttonText}>{missionStarted ? 'Submit Answer' : 'Start Mission'}</Text>
      </TouchableOpacity>
    </MissionTemplate>
    </ScrollView>
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
  choicesContainer: {
    marginVertical: 10,
    width:'100%'
  },
  choiceButton: {
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
  },
  selectedChoiceButton: {
    backgroundColor: '#D4A75B',
  },
  choiceText: {
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

export default AnswerBasedScreen;

