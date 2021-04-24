import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/welcome/Splash';
import Welcome from '../screens/welcome/Welcome';
import Login from '../screens/login/Login';
import Register from '../screens/login/Register';

import MainNavigator from './MainNavigator';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={MainNavigator} />
    </Stack.Navigator>
  );
}
