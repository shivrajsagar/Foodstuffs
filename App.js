import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ThemeProvider>
          <AppNavigator />
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
