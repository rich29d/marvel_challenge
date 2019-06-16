import { combineReducers } from 'redux';

const initialState = {
  privateKey: 'd09022779ec5382a35b5c0f23db8e159d7f04c43',
  publicKey: '22b7cc3cf9db4a746e0ef6ae0f10e4bb',
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