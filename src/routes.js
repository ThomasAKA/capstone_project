import React, { Component } from 'react';
import SignUp from './pages/SignUp';
import LogIn from './pages/logIn';
import Program from './pages/Program';
import Main from './pages/Main';
import Dashboard from './pages/Dashboard';
import{
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './App.css';
import GLOBAL from '../src/Global'


class Routes extends Component {

 
  constructor(props) {
    super(props);
    this.state = {
      isloggedIn: localStorage.getItem('isloggedIn') || false
    };
    GLOBAL.appState = this;
  }
  
  render() {
    return (
      <Router>
        <div className="Body">
        <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/login" component={LogIn}/>
        <Route exact path="/signup" component={SignUp}/>
      
        <Route exact path="/events" component={Program}/>
 
        <Route exact path="/dashboard">
        {GLOBAL.appState.state.isloggedIn===false? <Redirect to="/login" /> : <Dashboard />}
        </Route>
      </Switch>
        </div>
      </Router>
    );
  }
}



export default Routes;
