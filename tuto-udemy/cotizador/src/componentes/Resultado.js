import React from 'react';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';//npm install --save-dev react-transition-group

class Resultado extends React.Component{
  render(){

    const resultado = this.props.valor;
    return(
      <div>
        <TransitionGroup component="span">
          <CSSTransition  timeout={{enter:500,exit:500}}>
            <span>{resultado}</span>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
}

export default Resultado;
