import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { StoreProvider } from "./Store/StoreProvider.jsx";
import Lobby from "./Screens/Lobby/Lobby.jsx";
import AppNavigation from "./navigation/AppNav.jsx";
import Mission from "./Screens/Missions/Mission.jsx";
import CameraBased from "./Screens/CameraBased/CameraBased.jsx";
import CodeBasedAR from "./Screens/CodeBasedAR/CodeBasedAR.jsx";
import Language from "./Screens/Language/Language.jsx";
import Memories from "./Screens/Memories/Memories.jsx";
import TeamSelect from "./Screens/TeamSelect/TeamSelect.jsx";
import Login from "./Screens/Login/Login.jsx";
import CodeRoom from "./Screens/CodeRoom/CodeRoom.jsx";


const lobbyData = [
  { number: 1, avatar: "http://example.com/avatar1.png", name: "Player One" },
  { number: 2, avatar: "http://example.com/avatar2.png", name: "Player Two" },
];

export default function App() {
  return (
    // <StoreProvider>
        // <Language/>
    // {/* </StoreProvider> */}
//  <Lobby listData={lobbyData}/>>
/* <TeamSelect/> */
    // <Mission/>
    // <CameraBased/>
    // <CodeBasedAR/>
    // <Login/>
    <CodeRoom/>
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
