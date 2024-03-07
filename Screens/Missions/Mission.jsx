import React,{useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import MissionCard from "../../components/missionCard/MissionCard";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomModal from "../../components/Modal/Modal";
import WellDoneModal from "../../Modals/WellDoneModal";
import NoModal from "../../Modals/NoModal";
import HelpModal from "../../Modals/HelpModal";

const Mission = () => {
  const missions = [
    {
      id: "1",
      name: "Find the mosque",
      difficulty: "Hard",
      image: "https://images.pexels.com/photos/358904/pexels-photo-358904.jpeg",
    },
    {
      id: "2",
      name: "Find the mosque",
      difficulty: "easy",
      image: "https://images.pexels.com/photos/358904/pexels-photo-358904.jpeg",
    },

    {
        id: "3",
        name: "Find the mosque",
        difficulty: "medium",
        image: "https://images.pexels.com/photos/358904/pexels-photo-358904.jpeg",
      },
      {
        id: "3",
        name: "Find the mosque",
        difficulty: "fun",
        image: "https://images.pexels.com/photos/358904/pexels-photo-358904.jpeg",
      },
  ];
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ImageBackground
      source={require("../../assets/images/Vector.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView
      style={{ flex: 1,}}
       bounces={false}>
        <View style={styles.header}>
          <Image
            source={require("../../assets/images/team2.png")}
            style={styles.roundedImage}
          />
          <View style={{ flexDirection: "row",marginRight:19 }}>
            <TouchableOpacity style={styles.icon} onPress={() => setModalVisible(true)}>
              <Icon name="information-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Icon name="trophy-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.header2}>
          <Text style={styles.teamName}>Team Winners</Text>
          <Text style={styles.points}>85 P</Text>
        </View>
        <View style={styles.header2}>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText}>Missions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText}>Map</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.missionContainer}>
          {missions.map((mission) => (
            <MissionCard
              key={mission.id}
              name={mission.name}
              difficulty={mission.difficulty}
              image={mission.image}
              onPress={() => {}}
            />
          ))}
        </View>
        <HelpModal isVisible={modalVisible} onClose={() => setModalVisible(false)} cancel={true}/>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
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
    marginRight:19,
  },
  missionContainer: {
    padding: 20,
  },
  icon: {
    marginHorizontal: 5,
  },
  button1: {
    backgroundColor: "#D4A75B",
    padding: 15,
    borderRadius: 5,
    width: "40%",
    alignItems: "center",
    margin: 20,
  },
  button2: {
    padding: 15,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "white",
    borderStyle: "solid",
    width: "40%",
    alignItems: "center",
    margin: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Mission;
