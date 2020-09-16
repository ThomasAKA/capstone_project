import React, { Component } from 'react';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Program from './pages/Program';
import{
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './pages/Program.js';
import './App.css';

//import SocialLogIn from './SocialLogIn';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="Body">
          <Route exact path="/" component={LogIn}/>
        </div>
        <div className="App">
          <div className="App__Form">
        <Route exact path="/signup" component={SignUp}/>
        
        </div>
        </div>
        <div>
          <Route exact path="/program" component={Program}/>
        </div>
      </Router>
    );
  }
}



export default App;



