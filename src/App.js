import React, { Component } from 'react';

import Header from './template/header'
import Footer from './template/footer'
import Router from './main/routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Router/>
        <Footer/>
      </div>
    )
  }
}

export default App;
