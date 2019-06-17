import { combineReducers } from 'redux';

const initialState = {
  loading: false,
  
};

const tokens = {
  CHANGE_LOADING: 'loading',
}

const rootReducer = (state = initialState, action) => {
  const { type } = action;
  
  if (!tokens[type]) {
    return state 
  }

  const token = tokens[type];

  return {
    ...state,
    [token]: action[token],
  };
};

export default combineReducers({ rootReducer });