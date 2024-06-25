import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useStore } from '../../Store/useStore';

const QRCodeScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation();
  const store = useStore();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);

    const trimmedData = data.trim();


    const regex = /^https?:\/\/srv417723\.hstgr\.cloud(:\d+)?\//;
    const regexMatch = regex.test(trimmedData);


    if (regexMatch) {
      try {
        const response = await axios.get(trimmedData);
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
          store.setCurrentTrip(tripData);
          if (store.currentUser!==null){
            console.log(tripData.teams)
            navigation.navigate('Loading');
          }else{
            navigation.navigate('Connect');
          }
        
        } else {
          alert("Invalid code, please try again.");
        }
      } catch (error) {
        console.log(error);
        alert("Failed to fetch trip data. Please try again.");
      }
    } else {
      alert(`Scanned data: ${trimmedData}`);
    }
  };

  if (hasPermission === null) {
    return <View style={styles.container}><Text>Requesting camera permissions...</Text></View>;
  }

  if (hasPermission === false) {
    return <View style={styles.container}><Text>No camera access permission</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan QR Code</Text>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => setScanned(false)}
        >
          <Text style={styles.buttonText}>Tap to Scan Again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default QRCodeScanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#000',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
