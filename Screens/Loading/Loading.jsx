import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Loading = ({ backgroundColor = "#0049B5", logoImage = require("../../assets/images/WhiteLogoVersion.png") }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev < 1) {
          return prev + 0.01;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 100);

    const timeout = setTimeout(() => {
      navigation.navigate('Instruction');
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigation]);

  return (
    <ImageBackground source={require("../../assets/images/Vector.png")} style={[styles.container, { backgroundColor }]}>
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
    backgroundColor: '#31D191',
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
    color: "white"
  },
  logo: {
    width: "80%",
    height: "80%",
    resizeMode: 'contain',
  },
  footer: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "white"
  },
});

export default Loading;
