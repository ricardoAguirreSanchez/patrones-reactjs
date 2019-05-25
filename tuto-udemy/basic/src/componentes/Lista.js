import React from 'react'
import Elemento from './Elemento';


class Lista extends React.Component{

    render(){
        return(
            <div>
                LISTA DE ELEMENTOS
                {Object.keys(this.props.elemtos).map((key) => 
                    <Elemento  key={key}  elemento={this.props.elemtos[key]}></Elemento>)}
            </div>
        )
    }
}

export default Lista


