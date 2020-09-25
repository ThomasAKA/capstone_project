import React, { Component } from 'react';
import GLOBAL from '../src/Global'
import './App.css';
import { createStore } from '@spyna/react-store'
import Routes from './routes';

class App extends Component {

  
  

  render() {
    return (
      <Routes/>
    );
  }
}



export default App;



