import {FETCH_SEARCH, LOADING, USER_VALUE} from '../action/types';

const initial_state = {
  loading: false,
  searchtext: '',
  search: [],
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case LOADING:
      return {...state, loading: true};
    case USER_VALUE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
        loading: false,
      };
    case FETCH_SEARCH:
      return {...state, search: action.payload, loading: false};
    default:
      return state;
  }
};
