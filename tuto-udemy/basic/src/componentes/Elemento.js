import React from 'react'


class Elemento extends React.Component{

    render(){

        const {nombre,peso} = this.props.elemento
        return(
            <div>
                <ol><h2>Nombre: {nombre}</h2>Peso: {peso}</ol>
            </div>
        )
    }
}

export default Elemento


