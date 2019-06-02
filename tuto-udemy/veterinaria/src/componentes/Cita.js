import React, { Component } from 'react';

class Cita extends Component {

    borrarCita(id){
        this.props.borraCita(id)
    }

    render() {
        return (
            <div className="form-group row">
                Nombre: {this.props.dato.mascota} - Sintoma: {this.props.dato.sintoma} - 
                <button className="btn btn-danger" onClick={() => this.borrarCita(this.props.dato.id)}>Borrar</button> {/*TIP: para pasar un parametro tiene q estar
                la funcion como arrow sino ocurre que se ejecuta sola y no espera al click*/}
            </div>
        );
    }
}

export default Cita;