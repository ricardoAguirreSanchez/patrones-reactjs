import React from 'react'
import Formulario from './componentes/Formulario'
import FormularioFC from './componentes/FormularioFC'

class App extends React.Component{

    render(){
        return(
            <div>
                <Formulario></Formulario>
                <FormularioFC></FormularioFC>
            </div>
        )
    }
}


export default App