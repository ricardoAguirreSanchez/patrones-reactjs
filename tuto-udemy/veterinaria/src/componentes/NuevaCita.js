import React, { Component } from 'react';

class NuevaCita extends Component {

    /*TIPS
    1.- usar el atributo name igual q el del state
    2.- usar como nomnbre handler<ETC>
    3.- usar el [] para manejar solo un metodo handlerChange
    
    */
    constructor(props) {
        super(props);

        this.state =  {
            cita : {
                mascota:'',
                propietario:'',
                fecha:'',
                hora:'',
                sintoma:''
            },
            total: 500,
            error : false
        };
        
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerSendForm = this.handlerSendForm.bind(this);
    }

    

    handlerChange(e){
        this.setState({
            //si no agrego campos como total, no lo pisa
            cita:{
                ...this.state.cita,//para preservar los otros campos de cita
                [e.target.name] : e.target.value //tomo el valor como nombre de campo
            }
        })
    };

    handlerSendForm(e){
        e.preventDefault();
       
        const {mascota , sintoma } = this.state.cita;
        debugger;
        if (mascota === '' || sintoma === ''){
            this.setState({
                error : true
            });

            console.log("con error");
            return
        }

        this.props.agregar(this.state.cita)
        console.log("sin error")
        return
    };


    render() {
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-tittle md-5 text-center">
                        Llena el formulario
                    </h2>

                    <form onSubmit={this.handlerSendForm}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" placeholder="Nombre" className="form-control" name="mascota" onChange={this.handlerChange} value={this.state.cita.mascota}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Dueño
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="text" placeholder="Nombre Dueño" className="form-control" name="propietario" onChange={this.handlerChange} value={this.state.cita.propietario}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Fecha
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="date" placeholder="Nombre Dueño" className="form-control" name="fecha" onChange={this.handlerChange} value={this.state.cita.fecha}></input>
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Hora
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="time" placeholder="Nombre Dueño" className="form-control" name="hora" onChange={this.handlerChange} value={this.state.cita.hora}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Sintomas
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea className="form-control" name="sintoma" placeholder="Sintomas" onChange={this.handlerChange} value={this.state.cita.sintoma}></textarea>
                            </div>
                        </div>
                        <div className="form-group row">
                            <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar cita"></input>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default NuevaCita;