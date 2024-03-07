// useGoogleLogin.js
import { useEffect } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import { makeRedirectUri, useAuthRequest, ResponseType } from 'expo-auth-session';

export function useGoogleLogin() {
  
      
    const redirectUri = "https://auth.expo.io/khalil55/treasurehaunt";

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: '980268757113-2vn5kg0qdtifc3j9ciqbe5gsp6u4psve.apps.googleusercontent.com',
    redirectUri
  });
  console.log("Generated Redirect URI:", redirectUri);
  useEffect(() => {
    if (response?.type === 'success') {
        
      
      const { id_token } = response.params;
      console.log("id token :",id_token , "response:",response);
     
    }
   
  }, [response]);

  return { promptAsync };
}
