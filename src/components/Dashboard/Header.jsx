import React, { Component } from 'react';

import '../../assets/style/header.css';

class Header extends Component {
  render() {    
    return (
      <div className='Header'>
        <div className="Flex SpaceBetween MaxWidth">
          <img src={require('../../assets/images/logo.png')} alt="Logo" />
          <div className="Header__Menu Flex SpaceBetween">
            <a href="javascript: void(0);">Meu consumo</a>
            <a href="javascript: void(0);">Minha área</a>
            <a href="javascript: void(0);">Perfil</a>
            <a href="javascript: void(0);">Dados Pessoais</a>
          </div>
        </div>        
      </div>
    );
  }
}

export default Header;
