import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import Login from './components/Login.jsx';
import CharactersList from './components/Character/List.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Display from './components/Character/Display.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <PrivateRoute path="/characters/:id" component={Display}/>

          <Switch>
            <Route path="/login" component={Login}/>
            <PrivateRoute path="/characters" component={CharactersList}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
