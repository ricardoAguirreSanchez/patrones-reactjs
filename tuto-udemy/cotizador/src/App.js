import React from 'react';
import './css/App.css';
import Header from './componentes/Header'
import Formulario from './componentes/Formulario'
import Resultado from './componentes/Resultado'

import {calcularValor} from './Helper'

class App extends React.Component{
  constructor(props){
    super();
    this.cotizador = this.cotizador.bind(this);

    this.state = {
      valorFinal: ""
      };

  }

  cotizador(infoDelAuto){
    const valor = calcularValor(infoDelAuto.anio);
    this.setState({
      valorFinal : "$" + valor
    })
  }

  render(){
    const titulo = "Cotizador de autos"
    return(
    <div className="contenedor">
      <Header titulo={titulo}></Header>
      <div>
        <Formulario cotizador={this.cotizador}></Formulario>
        <Resultado valor={this.state.valorFinal}></Resultado>
      </div>
    </div>
    )
  }
}

export default App;
