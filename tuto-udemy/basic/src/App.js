import React from 'react';
import './App.css';

//dentro del codigo HTML, si usamos variables
//js van dentro de {}
class App extends React.Component {
  render(){

    const empleado = {
      nomre : "juan",
      edad: 4
    }

    return (
      <div className="App">
        <h1>Hola {empleado.nomre} de edad {empleado.edad}</h1>
      </div>
    );
  }
  
}

export default App;
