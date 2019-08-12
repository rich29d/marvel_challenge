import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './assets/style/general.css';
import './assets/style/field.css';
import './assets/style/button.css';

import Login from './components/Login.jsx';
import Register from './components/Register';
import Dashboard from './components/Dashboard/Base.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Notification from './components/Notification.jsx';

const hist = createBrowserHistory();

class App extends Component {  
  render() {
    return (
      <div className="App">
        <Router history={hist}>
          <Notification path="/" />
          <Route path="/login" component={Login}/>
          <Route path="/cadastro" component={Register}/>
          <PrivateRoute path="/dashboard" component={Dashboard}/>
        </Router>
      </div>
    );
  }
}

export default App;
