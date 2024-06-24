import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";
import Language from "../Screens/Language/Language";
import CodeRoom from "../Screens/CodeRoom/CodeRoom";
import Loading from "../Screens/Loading/Loading";
import Login from "../Screens/Login/Login";
import { useStore } from "../Store/useStore";
import QRCodeScanner from "../Screens/QRCodeScanner";
import Instruction from "../Screens/Instructions/index.jsx";
import Memories from "../Screens/Memories/Memories.jsx";
import TeamSelect from "../Screens/TeamSelect/TeamSelect.jsx";
import Mission from "../Screens/Missions/Mission.jsx";
import Lobby from "../Screens/Lobby/Lobby.jsx";
import CodeBasedScreen from "../Screens/CodeBasedAR/CodeBased.jsx";
import GoogleLoginScreen from "../Screens/GoogleLoginScreen/index.jsx";

const Stack = createStackNavigator();

const AppNavigation = observer(() => {
  const store = useStore();

  const initialRouteName = store && store.language ? "CodeRoom" : "Language";

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Memories"
          component={Memories}
          screenOptions={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Lobby"
          component={Lobby}
          screenOptions={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TeamSelect"
          component={TeamSelect}
          screenOptions={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Mission"
          component={Mission}
          screenOptions={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="GoogleLogin" component={GoogleLoginScreen} />
        <Stack.Screen
          name="Language"
          component={Language}
          screenOptions={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CodeRoom"
          component={CodeRoom}
          screenOptions={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Instruction"
          component={Instruction}
          screenOptions={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Loading"
          component={Loading}
          screenOptions={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Connect"
          component={Login}
          screenOptions={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="QRCodeScanner"
          component={QRCodeScanner}
          screenOptions={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CodeBasedScreen"
          component={CodeBasedScreen}
          screenOptions={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default AppNavigation;
