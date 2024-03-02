import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import Language from '../Screens/Language/Language';
import CodeRoom from '../Screens/CodeRoom/CodeRoom';
import Loading from '../Screens/Loading/Loading';
import Login from '../Screens/Login/Login';
import { useStore } from '../Store/useStore';

const Stack = createStackNavigator();

const AppNavigation = observer(() => {
  const store = useStore()

  const initialRouteName = store && store.language ? "CodeRoom" : "Language";

  return (
    <NavigationContainer
    >
      <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Language" component={Language} screenOptions={{
        headerShown: false,
      }}/>
        <Stack.Screen name="CodeRoom" component={CodeRoom} screenOptions={{
        headerShown: false,
      }}/>
        <Stack.Screen name="Loading" component={Loading} screenOptions={{
        headerShown: false,
      }}/>
        <Stack.Screen name="Connect" component={Login} screenOptions={{
        headerShown: false,
      }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default AppNavigation;
