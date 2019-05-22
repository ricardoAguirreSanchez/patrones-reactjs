import React from 'react'
import Formulario from './componentes/Formulario'
import FormularioFC from './componentes/FormularioFC'

import Footer from './componentes/Footer'

class App extends React.Component{

    render(){
        return(
            <div>
                <Formulario></Formulario>
                <FormularioFC></FormularioFC>
                <Footer leyenda="..::---- Derechos Reservados ----::.."></Footer>
            </div>
        )
    }
}

export default App