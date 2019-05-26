import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from './Inicio';
import Nosotros from './Nosotros';
import Header from './Header';
import Producto from './Producto';


class Ruteador extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                <Header></Header>

                <Switch>
                    <Route exact path="/" component={Inicio}></Route>
                    <Route exact path="/nosotros" component={Nosotros}></Route>
                    <Route exact path="/info/:productoID" render={ (props) => { 
                        let id = props.location.pathname.replace('/info/','');
                        return(<Producto idProducto={id}></Producto>)
                    }}>
                    </Route>
                </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Ruteador;