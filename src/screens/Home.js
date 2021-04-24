import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SearchBar, Icon} from 'react-native-elements';

const Home = ({navigation}) => {
  return (
    <View>
      <Text style={styles.heading}>Delicious</Text>
      <Text style={styles.heading}>food for you</Text>
      <SearchBar
        round={true}
        lightTheme={true}
        placeholder="Type here ..."
        onFocus={() => navigation.navigate('Search')}
        containerStyle={{
          backgroundColor: 'transparent',
          borderBottomWidth: 0,
          borderTopWidth: 0,
          margin: 20,
        }}
        inputContainerStyle={{borderRadius: 20, backgroundColor: '#efeeee'}}
        searchIcon={() => <Icon name="search" size={30} />}
      />
      <Text>Food Jokes </Text>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    marginHorizontal: 20,
    fontWeight: '500',
  },
});

export default Home;
