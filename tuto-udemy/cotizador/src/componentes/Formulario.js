import React from 'react'

class Formulario extends React.Component{

    constructor(props){
        super();
        this.cotizarSeguro = this.cotizarSeguro.bind(this);


        //refs se usa para leer campos de un form
        this.marcaRef = React.createRef();
        this.anioRef = React.createRef();
        this.planBasicoRef = React.createRef();
        this. planCompletoRef = React.createRef();
    }

    
    cotizarSeguro(e){
        e.preventDefault(); //evita q al enviar mande a la url con los campos seleccionados

        //leo el plan
        const plan = this.planBasicoRef.current.checked ? 'basico' : 'completo'

        //armo el objeto
        const infoAuto = {
            marca : this.marcaRef.current.value,
            anio : this.anioRef.current.value,
            plan : plan
        }

        //envio al padre
        this.props.cotizador(infoAuto);


    }

    render(){
        return(
            <form onSubmit={this.cotizarSeguro}>
                    <div>
                        <label>Marca:</label>
                        <select name="marca" ref={this.marcaRef}>
                            <option value="Asiatico">Asiatico</option>
                            <option value="Americano">Americano</option>
                            <option value="Aleman">Aleman</option>
                        </select>
                    </div>
                    <div>
                        <label>Año:</label>
                        <select name="anio" ref={this.anioRef}>
                            <option value="2008">2008</option>
                            <option value="2009">2009</option>
                            <option value="2010">2010</option>
                        </select>
                    </div>
                    <div>
                        <label>Plan:</label>
                        <input type="radio" name="plan" value="basico" ref={this.planBasicoRef}/> Basico
                        <input type="radio" name="plan" value="completo" ref={this.planCompletoRef}/> Completo
                    </div>

                    <button type="submit" >COTIZAR</button>
            </form>
        )
    }
}



export default Formulario