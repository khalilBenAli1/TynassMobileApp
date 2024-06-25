import React, { useState } from "react";
import { StyleSheet, View, Text, ImageBackground, ScrollView, TouchableOpacity, Image } from "react-native";
import MissionCard from "../../components/missionCard/MissionCard";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SolutionModal from "../../Modals/SolutionModal";
import { useNavigation } from "@react-navigation/native";
import { useStore } from "../../Store/useStore";

const Mission = () => {
  const store = useStore();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const team = store.currentTrip.teams.find(team => team.teamName === store.selectedTeam);
  const teamName = team ? team.teamName : 'Unknown Team';
  const missions = store.currentTrip.missions;

  return (
    <ImageBackground
      source={require("../../assets/images/Vector.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView style={{ flex: 1 }} bounces={false}>
        <View style={styles.header}>
          <Image
            source={require("../../assets/images/team2.png")}
            style={styles.roundedImage}
          />
          <View style={{ flexDirection: "row", marginRight: 19 }}>
            <TouchableOpacity style={styles.icon} onPress={() => setModalVisible(true)}>
              <Icon name="information-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Icon name="trophy-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.header2}>
          <Text style={styles.teamName}>{teamName}</Text>
          <Text style={styles.points}>{team ? team.points : 0} P</Text>
        </View>
        <View style={styles.header3}>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText}>Missions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText}>Map</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.missionContainer}>
          {missions.map((mission, index) => (
            <MissionCard
              key={index}
              name={mission.missionName}
              difficulty={mission.difficulty}
              image={mission.coverImage}
              onPress={() => navigation.navigate("CodeBasedScreen")}
              completed={mission.completed}
            />
          ))}
        </View>
        <SolutionModal isVisible={modalVisible} onClose={() => setModalVisible(false)} cancel={true} />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: "#161615",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 50,
  },
  header2: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 20,
    marginHorizontal: 5,
  },
  header3: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    width: "100%",
    marginVertical: 20,
  },
  teamName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  roundedImage: {
    width: 50,
    height: 50,
    borderRadius: 3,
    alignSelf: "center",
    marginBottom: 10,
  },
  points: {
    color: "#31D191",
    fontWeight: "bold",
    fontSize: 24,
    marginRight: 19,
  },
  missionContainer: {
    width: "95%"
  },
  icon: {
    marginHorizontal: 5,
  },
  button1: {
    backgroundColor: "#D4A75B",
    padding: 15,
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
    margin: 5
  },
  button2: {
    padding: 15,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "white",
    borderStyle: "solid",
    width: "45%",
    alignItems: "center",
    margin: 5
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Mission;
