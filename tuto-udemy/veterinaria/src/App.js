import React, { Component } from 'react';
import Header from './componentes/Header'
import NuevaCita from './componentes/NuevaCita';
import Listador from './componentes/Listador';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      citas : []
    }
    this.agregarCita = this.agregarCita.bind(this);
  }

  agregarCita(nuevaCita){
    //creo copia de mi state actual
    let stateOld = [...this.state.citas]
    stateOld.push(nuevaCita)

    this.setState({
      citas : stateOld
    })
  }

  render() {
    return (
      <div className="container">
        <Header titulo="Administrador de veterinaria" ></Header> 
        <div className="row">
          <div className="col-md-10  mx-auto">
            <NuevaCita agregar={this.agregarCita}></NuevaCita>
          </div>
          <div className="col-md-10 mt-10  mx-auto">
            <Listador citas={this.state.citas}></Listador>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
