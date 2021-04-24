import React from 'react';

import {StyleSheet} from 'react-native';

import {Header} from 'react-native-elements';

const HeaderBar = () => {
  return (
    <Header
      placement="left"
      leftComponent={{icon: 'menu', color: '#fff'}}
      centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
      rightComponent={{icon: 'home', color: '#fff'}}
    />
  );
};

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
  },
});

export default HeaderBar;
