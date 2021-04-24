import {combineReducers} from 'redux';

import recipeReducer from './recipeReducer';
import foodReducer from './foodReducer';

export default combineReducers({
  food: foodReducer,
  recipe: recipeReducer,
});
