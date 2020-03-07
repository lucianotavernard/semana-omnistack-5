import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderButtonRight from './components/HeaderButtonRight';

import Login from './pages/Login';
import Timeline from './pages/Timeline';
import New from './pages/New';

const Stack = createStackNavigator();

function AppStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Timeline"
        component={Timeline}
        options={{
          title: 'Início',
          headerRight: () => <HeaderButtonRight />,
        }}
      />

      <Stack.Screen
        name="New"
        component={New}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="App" component={AppStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
