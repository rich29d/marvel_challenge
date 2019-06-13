import { combineReducers } from 'redux';

const initialState = {
  privateKey: '',
  publicKey: '',
};

const tokens = {
  ADD_PRIVATE_KEY: 'privateKey',
  ADD_PUBLIC_KEY: 'publicKey',
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