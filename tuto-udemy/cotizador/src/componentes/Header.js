import React from 'react';

class Header extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
    <header>
      {this.props.titulo}
    </header>
    )
  }
}

export default Header;
