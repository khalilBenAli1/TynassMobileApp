// useFacebookLogin.js
import { useState, useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { ResponseType, makeRedirectUri } from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

export function useFacebookLogin() {
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: '425724636786174', // Your Facebook App ID
    responseType: ResponseType.Token,
    redirectUri: makeRedirectUri({
      useProxy: true,
    }),
  });

  useEffect(() => {
    if (response?.type === 'success') {
      // The token can be used to authenticate against your backend
      console.log(response.params.access_token);
      // Perform any actions needed after successful login
    }
  }, [response]);

  return { promptFacebookLogin: promptAsync, request };
}
