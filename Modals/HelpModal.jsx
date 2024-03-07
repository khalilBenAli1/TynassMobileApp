import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import CustomModal from "../components/Modal/Modal";

const HelpModal = ({ isVisible, onClose, cancel }) => {
  return (
    <CustomModal isVisible={isVisible} onClose={onClose} cancel>
      <Text style={styles.subtitle}>You need Help !</Text>

      <Image
        source={require("../assets/Modals/Modal3.png")}
        style={styles.image}
      />

      <Text style={styles.normalText}>
        Looks like your struggling we can help you but that will cost you 20 PT
      </Text>

      <TouchableOpacity
        style={styles.customButton}
        onPress={() => {
          /*  */
        }}
      >
        <Text style={styles.buttonText}>Pay the price</Text>
      </TouchableOpacity>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#31D191",
    marginBottom: 16,
    textAlign: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  normalText: {
    fontSize: 13,
    color: "#000",
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "300",
  },
  customButton: {
    backgroundColor: "#D4A75B",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 4,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default HelpModal;
