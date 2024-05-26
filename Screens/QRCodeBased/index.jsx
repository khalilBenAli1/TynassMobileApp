import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  Linking,
} from "react-native";
import MissionTemplate from "../../components/MissionTamplate";
import TimerComponent from "../../components/Timer";
import SubmitAnswerModal from "../../Modals/SubmitAnswerModal";

const QRCodeBasedScreen = ({
  navigation,
  photo,
  scrollText,
  externalLink,
  latitude,
  longitude,
}) => {
  const [scanning, setScanning] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const startScanning = () => {
    setScanning(true);
  };

  const submitSolution = () => {
    setScanning(false);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSubmitAnswer = (answer) => {
    console.log("Answer Submitted:", answer);
    closeModal();
  };

  return (
    <MissionTemplate
      navigation={navigation}
      directionOnClick={
        scanning ? startScanning : () => console.log("Direction Action")
      }
      hint="More info about QR scanning"
      hintOnClick={() => console.log("Hint Clicked")}
    >
      <SubmitAnswerModal
        isVisible={modalVisible}
        onClose={closeModal}
        onSubmit={handleSubmitAnswer}
      />

      {photo && (
        <Image
          source={{ uri: photo }}
          style={styles.photo}
          resizeMode="cover"
        />
      )}

      {scanning && <TimerComponent initialMinutes={3} initialSeconds={0} />}

      <ImageBackground
        source={require("../../assets/images/missionBg.png")}
        style={styles.scrollableTextBackground}
      >
        <ScrollView style={styles.scrollableText}>
          <Text>{scrollText}</Text>
        </ScrollView>
      </ImageBackground>
      {scanning && (
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => {
          
          }}
        >
          <Text style={styles.linkButtonText}>Start Scanning</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        onPress={scanning ? submitSolution : startScanning}
        style={styles.actionButton}
      >
        <Text style={styles.buttonText}>
          {scanning ? "Submit Answer" : "Start Scanning"}
        </Text>
      </TouchableOpacity>
    </MissionTemplate>
  );
};

const styles = StyleSheet.create({
  photo: {
    width: "100%",
    height: 200,
    marginTop: 10,
    marginVertical: 6,
  },
  scrollableTextBackground: {
    marginTop: 10,
    padding: 20,
    height: 150,
    borderRadius: 20,
    overflow: "hidden",
  },
  scrollableText: {
    maxHeight: 150,
    marginVertical: 6,
  },
  actionButton: {
    backgroundColor: "#D4A75B",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
    marginVertical: 6,
  },
  buttonText: {
    color: "#FFF",
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
    alignSelf: 'center',
    marginVertical: 6,
},
linkButtonText: {
    color: '#FFF',
},
});

export default QRCodeBasedScreen;
