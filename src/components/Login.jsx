import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import service from '../services/auth';
import {
  addPublicKey,
  addPrivateKey,
} from '../share/actions';

import Field from './Form/Field.jsx';
import Button from './Form/Button.jsx';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      addPublicKey,
      addPrivateKey,
      publicKey,
      privateKey
    } = this.props;

    return (
      <div className='Login'>
        <Field onTextChange={addPublicKey} placeholder={'Public key'}></Field>
        <Field onTextChange={addPrivateKey} placeholder={'Private key'}></Field>
        <Button text={'Login'} onClickEvent={() => service.login(publicKey, privateKey)}></Button>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  publicKey: store.rootReducer.publicKey,
  privateKey: store.rootReducer.privateKey,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    addPublicKey,
    addPrivateKey,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
