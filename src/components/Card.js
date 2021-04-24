import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {} from 'react-native-elements';

const CardComponent = ({item}) => {
  const {title, image} = item;
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} resizeMode="cover" style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 30,
    padding: 10,
    marginBottom: 20,
    height: 200,
    justifyContent: 'space-around',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'red',
    marginTop: -30,
    zIndex: 100,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default CardComponent;
