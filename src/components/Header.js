import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

import {Header} from 'react-native-elements';

const CenterComponent = () => (
  <Text style={{textAlign: 'center'}}>Foodstuffs</Text>
);

const HeaderBar = () => {
  return (
    <Header
      containerStyle={styles.conatainer}
      placement="left"
      leftComponent={{icon: 'menu', color: 'gray'}}
      centerComponent={CenterComponent}
      rightComponent={{icon: 'home'}}
    />
  );
};

const styles = StyleSheet.create({
  conatainer: {
    //flex: 1,
    backgroundColor: 'transparent',
  },
});

export default HeaderBar;
