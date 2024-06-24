import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { StoreProvider } from "./Store/StoreProvider.jsx";
import AppNavigation from "./navigation/AppNav.jsx";



const lobbyData = [
  { number: 1, avatar: "http://example.com/avatar1.png", name: "Player One" },
  { number: 2, avatar: "http://example.com/avatar2.png", name: "Player Two" },
];

export default function App() {
  return (
  <StoreProvider>
      <AppNavigation/>
   </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
