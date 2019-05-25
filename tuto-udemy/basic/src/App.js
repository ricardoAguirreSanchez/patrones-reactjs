import React from 'react'
import Lista from './componentes/Lista'
import FormularioFC from './componentes/FormularioFC'

import Footer from './componentes/Footer'

class App extends React.Component{

    constructor(props){
        super();
        this.state = {
            productos : []
        }

    }

    //una vez que el componente se cargo en el dom
    componentDidMount(){
        this.setState({
            //lugar adecuado para cargar el state
            productos : [
                {
                    nombre:"mesa_state",
                    peso: 5
                },
                {
                    nombre:"carpeta_state",
                    peso:1
                }
            ]
        })
    }


    render(){

        const elemtos = [
            {
                nombre: "piedra",
                peso: 4
            },
            {
                nombre:"mesa",
                peso: 5
            },
            {
                nombre:"carpeta",
                peso:1
            }
        ]
        return(
            <div>
                
                <FormularioFC></FormularioFC>
                {/* Trabaja con props */}
                <Lista elemtos={elemtos}></Lista>
                {/* Trabaja con state */}
                <Lista elemtos={this.state.productos}></Lista>

                <Footer leyenda="Condiciones · Privacidad · Políticas de programa"></Footer>
            </div>
        )
    }
}

export default App