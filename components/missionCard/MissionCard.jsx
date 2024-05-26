import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const MissionCard = ({ image, difficulty, name, onPress , completed=false }) => {
  const difficultyColor =
    difficulty.toUpperCase() === "HARD"
      ? "red"
      : difficulty.toUpperCase() === "MEDIUM"
      ? "orange"
      : "green";

      const difficultyIcon =
    difficulty.toUpperCase() === "HARD"
      ? "account-group"
      : difficulty.toUpperCase() === "MEDIUM"
      ? "account-multiple"
      :  difficulty.toUpperCase() === "EASY"?"account":
      "party-popper";
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <ImageBackground
        source={{ uri: image }}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.mask} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.difficultyContainer}>
            <Icon name={difficultyIcon} size={24} color="white" />
            <Text style={styles.difficulty}>{difficulty.toUpperCase()}</Text>
          </View>
        </View>
        {completed && (
          <View style={styles.completedIcon}>
            <Icon name="check-circle" size={24} color="white" />
          </View>
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 90,
    justifyContent: "flex-end",
  },
  mask: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  textContainer: {
    height: "100%",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  difficulty: {
    marginHorizontal: 10,
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  difficultyIndicator: {
    width: 20,
    height: "100%",
    
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  difficultyContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  completedIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});

export default MissionCard;
