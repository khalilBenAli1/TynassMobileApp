import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SubmitAnswerModal = ({ isVisible, onClose, onSubmit }) => {
  const [answer, setAnswer] = useState('');

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>You can do it!</Text>
          <TextInput
            style={styles.input}
            onChangeText={setAnswer}
            value={answer}
            placeholder="Your answer here"
            placeholderTextColor="#8C8C8C"
          />
          <TouchableOpacity style={styles.button} onPress={() => onSubmit(answer)}>
            <Text style={styles.buttonText}>Submit Answer</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width:'80%',

    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    marginBottom: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3DD598',
  },
  input: {
    width: '80%',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#8C8C8C',
    padding: 10,
  },
  button: {
    backgroundColor: '#D4A75B',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cancelText: {
    marginTop: 20,
    color: '#8C8C8C',
  }
});

export default SubmitAnswerModal;
