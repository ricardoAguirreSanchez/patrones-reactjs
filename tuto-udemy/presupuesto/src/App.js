import React, { Component } from 'react';
import './css/App.css'
import Header from './componentes/Header'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header ></Header> 
        <div className="contenido-principal contenido">
          <div className="one-half column">

          </div>
          <div className="one-half column">

          </div>
        </div>
      </div>
    );
  }
}

export default App;
