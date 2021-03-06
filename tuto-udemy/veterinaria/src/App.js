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
    this.borraCita = this.borraCita.bind(this);

  }

  //se ejecuta luego de cargar los componentes
  componentDidMount(){
    const citasLS = localStorage.getItem("citas");
    if (citasLS){
      this.setState({
        citas : JSON.parse(citasLS)
      })
    }
    
  }

  //se ejecuta luego de actualizar el state
  componentDidUpdate(){
    localStorage.setItem("citas",JSON.stringify(this.state.citas))
  }

  agregarCita(nuevaCita){
    //creo copia de mi state actual
    let stateOld = [...this.state.citas]
    stateOld.push(nuevaCita)

    this.setState({
      citas : stateOld
    })
  }

  borraCita(id){
    const citasActuales = [...this.state.citas]
    const citasFinales = citasActuales.filter((unCita) => {
      return unCita.id !== id
    })

    this.setState({
      citas : citasFinales
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
            <Listador citas={this.state.citas} borraCita={this.borraCita}></Listador>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
