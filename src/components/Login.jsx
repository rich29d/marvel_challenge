import React, { Component } from 'react';

import service from '../services/auth';
import Field from './Form/Field.jsx';
import Button from './Form/Button.jsx';

import '../assets/style/login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      privateKey: 'd09022779ec5382a35b5c0f23db8e159d7f04c43',
      publicKey: '22b7cc3cf9db4a746e0ef6ae0f10e4bb',
    }
  }

  setPublicKey(publicKey) {
    this.setState({publicKey});
  }

  setPrivateKey(privateKey) {
    this.setState({privateKey});
  }

  render() {
    const {
      publicKey,
      privateKey,
    } = this.state;
    
    return (
      <div className='Width--12 Height__window--100 Flex Center Middle'>
        <div className='Login Width--11 Width__Max--4'>
          <img className='Margin__Bottom--25' src={require('../assets/images/Marvel.svg')} alt="Logo"/>
          <div className='Margin__Bottom--25 Width--12 Size--20'>Dados de acesso</div>
          <Field className='Margin__Bottom--25' label={'Public key'}
            onTextChange={value => this.setPublicKey(value)}></Field>
          <Field className='Margin__Bottom--25' label={'Private key'}
            onTextChange={value => this.setPrivateKey(value)}></Field>
          <div className="Width--12 Text--right">
            <Button text='Login' onClickEvent={() => service.login(publicKey, privateKey)} icon='arrow-right'></Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
