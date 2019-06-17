import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './assets/style/general.css';
import './assets/style/field.css';
import './assets/style/button.css';

import Login from './components/Login.jsx';
import CharactersList from './components/Character/List.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Display from './components/Character/Display.jsx';
import Notification from './components/Notification.jsx';

class App extends Component {  
  render() {
    return (
      <div className="App">
        <Notification />

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
