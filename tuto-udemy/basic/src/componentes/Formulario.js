import React from 'react';

class Formulario extends React.Component{

    //constructor
    render(){
        const formulario_basico = {
            titulo : "Carga Inicial - Class component",
            campo1 : "Unidad de negocio",
            campo2: "Cantidad empleados"
        }
        return(
            <div>
                <h1>{formulario_basico.titulo}</h1>

                {formulario_basico.campo1}: <input type="text" id="campo1"></input>
                <br/>
                {formulario_basico.campo2}: <input type="text" id="campo2"></input>
            </div>
        )
    }
}

export default Formulario