import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { Store } from "./share/store";

// const initialState = {
//   count: 0
// };

// function reducer(state = initialState, action) {
//   console.log('reducer', state, action);
//   return state;
// }

// const store = createStore(reducer);

// store.dispatch({ type: "INCREMENT" });

console.log(Store)

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
