import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useStore } from "../../Store/useStore";

const CodeRoom = () => {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [error, setError] = useState(null);
  const inputRefs = useRef(code.map(() => React.createRef()));
  const navigation = useNavigation();
  const store = useStore()
  const handleCodeInput = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < code.length - 1) {
      inputRefs.current[index + 1].current.focus();
    }

    if (!text && index > 0) {
      inputRefs.current[index - 1].current.focus();
    }
  };

  const handleSubmitCode = async () => {
    const codeString = code.join("");
    try {
      const response = await axios.get(`http://srv417723.hstgr.cloud:3001/api/trip/trip/${codeString}`);
      
      if (response.data && response.data._id) {
        const tripData = {
          id: response.data._id,
          tripType: response.data.tripType || '',
          tripname: response.data.tripname || '',
          startingDate: response.data.startingDate ? new Date(response.data.startingDate) : null,
          fixedTime: response.data.fixedTime || '',
          gameOverMsg: response.data.gameOverMessage || '',
          returnLocation: response.data.returnLocation || '',
          emergencyContact: response.data.EmergencyContact || '',
          instruction: response.data.instruction || [],
          qrCode: {
            data: response.data.qrCode.data || null,
            createdAt: response.data.qrCode.createdAt ? new Date(response.data.qrCode.createdAt) : null
          },
          participants: response.data.participants || [],
          missions: response.data.missions || [],
          memoryMail: response.data.memoryMail || [],
          teams: response.data.teams.map(team => ({
            teamName: team.teamName,
            participants: team.participants
          })) || [],
          createdAt: response.data.createdAt ? new Date(response.data.createdAt) : null,
          updatedAt: response.data.updatedAt ? new Date(response.data.updatedAt) : null,
          accessCode: response.data.accessCode || '',
        };
        store.setCurrentTrip(tripData)
        if (store.currentUser!==null){
          navigation.navigate('Loading');
        }else{
          navigation.navigate('Connect');
        }
      } else {
        setError("Invalid code, please try again.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/images/Vector.png")}
      resizeMode="cover"
    >
      <Text style={styles.title}>Treasure Hunt Experience</Text>
      <Image
        source={require("../../assets/images/bajoreux_pirate_wallpaper_png_for_mobile_application_b36f88c8-d22a-4a34-b634-467a43a5bd11 1.png")}
        style={styles.image}
      />
      <Text style={styles.codeRoomText}>Enter Your Code Room</Text>
      <TouchableOpacity
        style={styles.scanButton}
        onPress={() => {
          navigation.navigate('QRCodeScanner')
        }}
      >
        <Icon name="qrcode-scan" size={24} color="#D4A75B" />
        <Text style={styles.scanButtonText}>Scan QR Code</Text>
      </TouchableOpacity>
      <View style={styles.codeInputContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={inputRefs.current[index]}
            style={styles.codeInput}
            maxLength={1}
            onChangeText={(text) => handleCodeInput(text, index)}
            value={digit}
          />
        ))}
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmitCode}
      >
        <Icon name="qrcode-scan" size={24} color="white" />
        <Text style={styles.buttonText}>Join the Adventure</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#161615",
  },
  errorText:{
    color:"red"
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    margin: 20,
    color: "#D4A75B",
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginVertical: 50,
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    marginVertical: 10,
    color: "white",
  },
  iconText: {
    marginLeft: 10,
    textAlign: "left",
    fontSize: 18,
    color: "white",
  },
  pointedBorder: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#000",
    borderStyle: "dotted",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#D4A75B",
    padding: 20,
    borderRadius: 5,
    marginTop: 40,
  },
  submitButton:{
    width:"70%",
    backgroundColor: "#D4A75B",
    padding: 20,
    borderRadius: 5,
    marginTop: 40,
    flexDirection:"row",
    justifyContent:'center',
    alignItems:"center"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize:20,
    marginLeft:10
  },
  flagIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 8,
  },
  dashedLine: {
    height: 0,
    width: "95%",
    borderWidth: 1,
    borderColor: "white",
    borderStyle: "dashed",
    borderRadius: 1,
    marginVertical: 10,
  },
  checkIcon: {
    marginLeft: "auto",
  },
  codeRoomText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginVertical: 20,
  },
  codeInputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 50,
  },
  codeInput: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 5,
  },
  scanButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical:20,
    
  },
  
  scanButtonText: {
    marginLeft: 10,
    color: '#D4A75B',
    fontSize: 22,
    fontWeight:"700",
  },
});

export default CodeRoom;
