import React, { Component } from 'react';

class Producto extends Component {
    render() {
        return (
            <div>
                ID:{this.props.idProducto}
            </div>
        );
    }
}

export default Producto;