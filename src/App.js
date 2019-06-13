import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Login from './components/Login.jsx';
import Characters from './components/Characters.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Characters} />
        </Router>
      </div>
    );
  }
}

export default App;
