// useGoogleAuth.js
import * as React from 'react';
import * as AuthSession from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import * as Linking from 'expo-linking';



const useGoogleAuth = () => {


  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '980268757113-2vn5kg0qdtifc3j9ciqbe5gsp6u4psve.apps.googleusercontent.com', // Web Client ID used for Expo
    iosClientId: '980268757113-luucl8nott5p2quq1gpp64maua9nbm98.apps.googleusercontent.com', // iOS-specific client ID
    androidClientId: '980268757113-60bofav0fdl5jpngk5a393s4k422hgq7.apps.googleusercontent.com', // Android-specific client ID
    webClientId: '980268757113-2vn5kg0qdtifc3j9ciqbe5gsp6u4psve.apps.googleusercontent.com', // Same as Expo client ID if used for web
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      // Here you can handle the authentication token, e.g., send it to your backend or store it
      console.log(authentication);
    }
  }, [response]);

  return { request, promptAsync };
};

export default useGoogleAuth;
