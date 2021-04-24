import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';

import {theme} from './src/constants';
import {Provider} from 'react-redux';

import store from './src/redux';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <ThemeProvider theme={theme}>
            <AppNavigator />
          </ThemeProvider>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
