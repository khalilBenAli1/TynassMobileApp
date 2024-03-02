import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import Language from '../Screens/Language';
import CodeRoom from '../Screens/CodeRoom';
import Loading from '../Screens/Loading';
import Login from '../Screens/Login';
import { StoreContext } from '../Store/StoreContext';

const Stack = createStackNavigator();

const AppNavigation = observer(() => {
  const store = useContext(StoreContext);


  const initialRouteName = store && store.language ? "CodeRoom" : "Language";

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="CodeRoom" component={CodeRoom} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Connect" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default AppNavigation;
