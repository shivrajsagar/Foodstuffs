import React from 'react';

import food from '../../api';
import {FETCH_SEARCH, LOADING, USER_VALUE} from './types';

const userValue = ({prop, value}) => {
  return {
    type: USER_VALUE,
    payload: {prop, value},
  };
};

const fetchSearch = text => async dispatch => {
  try {
    dispatch({type: LOADING});
    const response = await food.get('recipes/complexSearch', {
      params: {
        query: text,
      },
    });
    dispatch({type: FETCH_SEARCH, payload: response.data.results});
  } catch (e) {
    throw e;
  }
};

export {userValue, fetchSearch};
