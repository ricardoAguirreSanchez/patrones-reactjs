import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Funciones from './Funciones';

class App extends Funciones {

  constructor(){
    super();
    this.generatorInputByText = this.generatorInputByText.bind(this);
    this.generatorByComponent = this.generatorByComponent.bind(this);
  }

  generatorInputByText(text) {
    const nomreTexto = 'My App: ' + text;
    return <input value={nomreTexto}/>
  }
   
  generatorByComponent(ComponenteRecibido){
    return class extends Component{
      render(){
        return(
          <ComponenteRecibido>{this.props.valor}</ComponenteRecibido>
        )
      }
    }
  }
  
  render(){
    //puedo pasarle letras (podriamos tener un factory)
    const newInput = this.generatorInputByText('Resultados');

    //puedo pasar un componente
    const NewComponent = this.generatorByComponent(Button);

    //usando herencia
    const nuevoNumero = this.generatorNumero(5);
    console.log(nuevoNumero);
    return(
      <div>
        {newInput}
        <NewComponent valor="BOTON"></NewComponent>
      </div>
      
    );



  }

}

export default App;
