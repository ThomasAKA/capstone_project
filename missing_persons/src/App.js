import React, { Component } from 'react';
import SignUp from './pages/SignUp';
import{
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
              <Route exact path="/" component={SignUp}>
              </Route>
              
          </div>

        </div>
      </Router>
    );
  }
}



export default App;
