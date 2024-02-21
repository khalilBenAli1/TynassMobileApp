import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const LanguageItem = ({ language, flagSource }) => (
    <TouchableOpacity
      style={styles.iconTextContainer}
      onPress={() => setSelectedLanguage(language)}
    >
      <Image source={flagSource} style={styles.flagIcon} />
      <Text style={styles.iconText}>{language}</Text>
      {selectedLanguage === language && (
        <Icon name="check" size={20} color="white" style={styles.checkIcon} />
      )}
    </TouchableOpacity>
  );
  return (
    <ImageBackground
      source={"../../assets/images/Vector.png"}
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.title}>Treasure Hunt Experience</Text>
      <Image
        source={require("../../assets/images/ezgif1.png")}
        style={styles.image}
      />
      <View style={styles.iconTextContainer}>
        <Text style={styles.iconText}>Choose Your Preferred Language</Text>
      </View>

      <View style={styles.pointedBorder} />

      <LanguageItem
        language="Arabic"
        flagSource={require("../../assets/images/arabic_flag.png")}
      />
      <View style={styles.dashedLine} />
      <LanguageItem
        language="French"
        flagSource={require("../../assets/images/french_flag.png")}
      />
      <View style={styles.dashedLine} />
      <LanguageItem
        language="English"
        flagSource={require("../../assets/images/english_flag.png")}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Let's Start</Text>
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
    backgroundColor: "black",
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
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
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
    marginLeft: 'auto',
  },
});

export default Language;
