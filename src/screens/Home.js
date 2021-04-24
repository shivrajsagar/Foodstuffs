import React, {useState} from 'react';
import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import {SearchBar} from 'react-native-elements';

//redux
import {userValue, fetchSearch} from '../redux/action/recipeAction';
import {connect} from 'react-redux';

import {Card} from '../components';

const Home = ({navigation}) => {
  return (
    <View>
      <SearchBar
        placeholder="Type here ..."
        onFocus={() => navigation.navigate('Search')}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  loading: state.recipe.loading,
  searchtext: state.recipe.searchtext,
  search: state.recipe.search,
});

export default connect(mapStateToProps, {userValue, fetchSearch})(Home);
