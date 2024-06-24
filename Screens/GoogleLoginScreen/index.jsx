// GoogleLoginScreen.js
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import * as Linking from 'expo-linking';

const GoogleLoginScreen = () => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const handleNavigationStateChange = (event) => {
    if (event.url.includes('exp://192.168.0.214:8081')) { 
      const url = new URL(event.url);
      const token = url.searchParams.get('token');

      if (token) {
        navigation.navigate('Home', { token });
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <WebView
        source={{ uri: 'http://srv417723.hstgr.cloud:3001/api/user/auth/google' }}
        onLoadEnd={() => setLoading(false)}
        onNavigationStateChange={handleNavigationStateChange}
      />
    </View>
  );
};

export default GoogleLoginScreen;
