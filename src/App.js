import React, { Component } from 'react';
import SignUp from './pages/SignUp';
<<<<<<< HEAD
import LogIn from './pages/LogIn';
=======
import LogIn from './pages/logIn';
>>>>>>> 4fe6221c8f99aa46536f19ca110d4463272ce0ca
import Program from './pages/Program';
import{
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
<<<<<<< HEAD
import './pages/Program.js';
=======
>>>>>>> 4fe6221c8f99aa46536f19ca110d4463272ce0ca
import './App.css';

//import SocialLogIn from './SocialLogIn';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="Body">
          <Route exact path="/" component={LogIn}/>
<<<<<<< HEAD
        </div>
        <div className="App">
          <div className="App__Form">
        <Route exact path="/signup" component={SignUp}/>
        
        </div>
        </div>
        <div>
=======
          <Route exact path="/signup" component={SignUp}/>
>>>>>>> 4fe6221c8f99aa46536f19ca110d4463272ce0ca
          <Route exact path="/program" component={Program}/>
        </div>
      </Router>
    );
  }
}



export default App;
<<<<<<< HEAD



=======
>>>>>>> 4fe6221c8f99aa46536f19ca110d4463272ce0ca
