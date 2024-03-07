import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import CustomModal from "../components/Modal/Modal";

const SolutionModal = ({ isVisible, onClose, cancel }) => {
  return (
    <CustomModal isVisible={isVisible} onClose={onClose} cancel>
      <Image
        source={require("../assets/Modals/Modal4.png")}
        style={styles.image}
      />

      <Text style={styles.normalText}>
        Its here but it not you can see it maybe it’s like the air and hiding on
        the fog ,you will need item 6 in the bag to find the answer
      </Text>

      <TouchableOpacity
        style={styles.customButton}
        onPress={() => {
          /*  */
        }}
      >
        <Text style={styles.buttonText}>Go to solution</Text>
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
    height: 200,
    marginBottom: 16,
  },
  normalText: {
    fontSize: 13,
    color: "#000",
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "300",
    lineHeight:30,
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

export default SolutionModal;
