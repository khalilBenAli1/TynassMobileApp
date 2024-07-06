import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import { useNavigation, useRoute } from '@react-navigation/native';
import { useStore } from '../../Store/useStore';
import axios from 'axios';
import { io } from 'socket.io-client';

const ListItem = ({ number, avatar, name }) => (
  <View style={styles.listItem}>
    <Text style={styles.itemText}>{number}. </Text>
    <Image source={{ uri: avatar }} style={styles.avatar} />
    <Text style={styles.itemText}>{name}</Text>
  </View>
);

const Lobby = () => {
  const [listData, setListData] = useState([]);
  const [participantsChanged, setParticipantsChanged] = useState(false); // State to track participant changes
  const navigation = useNavigation();
  const route = useRoute();
  const { teamName } = route.params;
  const store = useStore();
  const tripId = store.currentTrip.id;

  useEffect(() => {
    const socket = io('http://srv417723.hstgr.cloud:3001');

    const handleParticipantJoined = ({ tripId: eventTripId, teamName: eventTeamName }) => {
      if (eventTripId === tripId && eventTeamName === teamName) {
        setParticipantsChanged(prevState => !prevState);
      }
    };

    socket.on('participantJoined', handleParticipantJoined);

    return () => {
      socket.off('participantJoined', handleParticipantJoined);
      socket.disconnect();
    };
  }, [tripId, teamName]);

  const fetchParticipants = async () => {
    try {
      const response = await axios.post("http://srv417723.hstgr.cloud:3001/api/trip/get-participants", {
        teamName,
        tripId
      });
      setListData(response.data.participants.map((participant, index) => ({
        number: index + 1,
        avatar: participant.userId.avatar || 'https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg', 
        name: participant.userId.username || 'Guest'
      })));
    } catch (error) {
      console.error("Error fetching participants:", error);
    }
  };

  useEffect(() => {
    fetchParticipants();
  }, [teamName, tripId, participantsChanged]); // Add participantsChanged to the dependency array

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/topImage.png")}
        style={styles.topImage}
        resizeMode="cover"
      >
        <Text style={styles.title}>Welcome To your team lobby</Text>
      </ImageBackground>
      <ImageBackground
        source={require("../../assets/images/Vector.png")}
        style={styles.contentSection}
        resizeMode="cover"
      >
        <View style={styles.iconTextContainer}>
          <Text style={styles.subtitle}>{teamName}</Text>
        </View>
        <FlatList
          data={listData}
          renderItem={({ item }) => <ListItem number={item.number} avatar={item.avatar} name={item.name} />}
          keyExtractor={item => item.number.toString()}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Memories")}>
          <Text style={styles.buttonText}>Set Ready</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  contentSection: {
    flex: 1,
    width: '100%', 
    backgroundColor: '#000',
    margin: "10px",
    paddingTop: 20, 
  },
  topImage: {
    width: '100%',
    height: 200, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    width: "80%",
    textAlign: "center"
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  subtitle: {
    color: 'white',
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  listItem: {
    flexDirection: 'row',
    width: '60%', 
    margin: 10, 
    alignItems: "center",
  },
  itemText: {
    color: 'white',
    marginRight: 10,
    fontSize: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: "#3DD598",
    padding: 15,
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
    alignSelf: "center",
    margin: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Lobby;
