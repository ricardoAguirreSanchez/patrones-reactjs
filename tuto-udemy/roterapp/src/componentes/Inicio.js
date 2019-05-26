import React, { Component } from 'react';

class Inicio extends Component {
    render() {
        return (
            <div>
                <h1>DESDE EL INICIIOOOOO</h1>    
                <ul>
                    <li>Coffee <a href="/info/1">+</a> </li>
                    <li>Tea <a href="/info/2">+</a> </li>
                    <li>Milk <a href="/info/3">+</a> </li>
                </ul>            
            </div>
        );
    }
}

export default Inicio;