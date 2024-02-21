import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ActivityIndicator } from 'react-native';

const Loading = ({ backgroundColor, logoImage, backgroundImage }) => {
    const loadingProgress = 0.5;
  return (
    <ImageBackground source={backgroundImage} style={[styles.container, { backgroundColor }]}>
      <View style={styles.content}>
        <Text style={styles.madeByText}>Made By</Text>
        <Image source={logoImage} style={styles.logo} />
      </View>
      <View style={styles.footer}>
      <View style={styles.loadingBarContainer}>
          <View style={[styles.loadingBar, { width: `${loadingProgress * 100}%` }]} />
        </View>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
  },
  loadingBarContainer: {
    height: 20,
    width: '80%',
    backgroundColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
  },
  loadingBar: {
    height: '100%',
    backgroundColor: '#007bff', 
    borderRadius: 10, 
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  madeByText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"white"
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  footer: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color:"white"
  },
});

export default Loading;
