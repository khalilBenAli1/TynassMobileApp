import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground ,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useStore } from '../../Store/useStore';
import axios from 'axios';
const TeamSelect = () => {
  const navigation=useNavigation()
  const [selectedTeam, setSelectedTeam] = useState('');
  const store=useStore()
  const tripId=store.currentTrip.id
  const participantId=store.currentUser.id
  
  const handleTeamSelection = async (teamName) => {
    setSelectedTeam(teamName);
    store.setSelectedTeam(teamName)
    try {
      const response = await axios.post("http://srv417723.hstgr.cloud:3001/api/trip/add-participant", {
        tripId,
        participantId,
        teamName
      });
      console.log(response.data);

      navigation.navigate("Lobby", { teamName });
    } catch (error) {
      console.error("Error adding participant to team:", error);
    }
  };

  return (
    <ImageBackground
    source={require("../../assets/images/Vector.png")}
    style={styles.container}
    resizeMode="cover"
  >
      <Text style={styles.title}>Welcome To the games</Text>
      <Text style={styles.subtitle}>join your team to be victorious</Text>
      
      <Image
        source={require("../../assets/images/team1.png")}
        style={styles.roundedImage}
      />
      <Text style={styles.text}>{store.currentTrip.teams[0].teamName}</Text>
      <Text style={styles.text}>{store.currentTrip.teams[0].participants.length}/5</Text>
      <TouchableOpacity style={styles.button} onPress={()=>handleTeamSelection(store.currentTrip.teams[0].teamName)}>
        <Text style={styles.buttonText}>Join Team</Text>
      </TouchableOpacity>
      <View style={styles.dashedLine} />

      <Image
        source={require("../../assets/images/team2.png")}
        style={styles.roundedImage}
      />
      <Text style={styles.text}>{store.currentTrip.teams[1].teamName}</Text>
      <Text style={styles.text}>{store.currentTrip.teams[1].participants.length}/5</Text>
      <TouchableOpacity style={styles.button} onPress={()=>handleTeamSelection(store.currentTrip.teams[1].teamName)}>
        <Text style={styles.buttonText}>Join Team</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color:"white"
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
    color:"#FFFFFF"
  },
  roundedImage: {
    width: 100,
    height: 100,
    borderRadius: 23,
    alignSelf: 'center',
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    margin: 10,
    color:"white",
    fontWeight:"bold"
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
  button: {
    backgroundColor: "#D4A75B",
    padding: 20,
    borderRadius: 5,
    margin: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default TeamSelect