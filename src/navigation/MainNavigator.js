import React from 'react';
import {Icon} from 'react-native-elements';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Header} from '../components';

//screens
import Home from '../screens/Home';
import Likes from '../screens/Likes';
import User from '../screens/User';
import History from '../screens/History';
import Search from '../screens/Search';
import theme from '../constants/theme';

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{header: () => <Header {...props} />}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{header: () => <Header {...props} />}}
      />
    </Stack.Navigator>
  );
}

export default function MainNavigator() {
  return (
    <Bottom.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: theme.colors.primary,
      }}>
      <Bottom.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="home" type="antdesign" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="Likes"
        component={Likes}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="hearto" type="antdesign" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="user" type="feather" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="refresh-cw" type="feather" color={color} size={size} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}
