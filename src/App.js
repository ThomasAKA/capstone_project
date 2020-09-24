import React, { Component } from 'react';

import './App.css';
import { createStore } from '@spyna/react-store'
import Routes from './routes';

class App extends Component {

 
constructor(props) {
  super(props)
}

  render() {
    return (
      <Routes/>
    );
  }
}

const initialValue = {
  isloggedIn: false,
}


export default createStore(App,initialValue);



