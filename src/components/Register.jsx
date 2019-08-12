import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleNotification } from "../share/actions";

import service from '../services/auth';
import Field from './Form/Field.jsx';
import Button from './Form/Button.jsx';

import '../assets/style/login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      estado: '',
      email: 'rdsilva_richard@hotmail.com',
      senha: '123qwe',
      loading: false
    }
  }

  notification(options) {
    options.show = true;
    this.props.toggleNotification(options);

    setTimeout(() => {
      this.props.notification.show = false;
      this.props.toggleNotification(this.props.notification);
    }, 5000);
  }

  setNome(nome) {
    this.setState({ nome });
  }

  setEstado(estado) {
    this.setState({ estado });
  }

  setEmail(email) {
    this.setState({ email });
  }

  setSenha(senha) {
    this.setState({ senha });
  }

  async register(email, senha) {
    this.setState({ loading: true });
    const resp = await service.register(email, senha);
    this.responseMessage(resp);
    this.setState({ loading: false });
    resp.success && setTimeout(() => window.location.assign('#/login'), 1000);
  }

  responseMessage({ success, messages }) {
    this.notification({
      icon: success ? 'check' : 'exclamation-triangle',
      text: messages || [],
    });
  }

  render() {
    const {
      nome,
      estado,
      email,
      senha,
      loading,
    } = this.state;

    return (
      <div className='Width--12 Height__window--100 Flex Center Middle'>
        <div className='Login Width--11 Width__Max--4'>
          <img className='Margin__Bottom--25' src={require('../assets/images/logo.png')} alt="Logo" />

          <div className='Margin__Bottom--25 Width--12 Size--20'>Dados de acesso</div>

          <Field className='Margin__Bottom--25' label={'Nome'} type={'text'}
            onTextChange={value => this.setNome(value)} icon={'user-circle'}></Field>

          <Field className='Margin__Bottom--25' label={'Estado'} type={'text'}
            onTextChange={value => this.setEstado(value)} icon={'map-marker-alt'}></Field>

          <Field className='Margin__Bottom--25' label={'Email'} type={'text'}
            onTextChange={value => this.setEmail(value)} icon={'envelope'}></Field>

          <Field className='Margin__Bottom--45' label={'Senha'} type={'password'} value={senha}
            onTextChange={value => this.setSenha(value)} icon={'key'}></Field>

          <div className="Width--12 Flex Middle SpaceBetween">
            <a href="#/login">Já tenho uma conta.</a>
            <Button text='Entrar' loading={loading} onClickEvent={() => this.register(nome, estado, email, senha)}></Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  notification: store.rootReducer.notification
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleNotification }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
