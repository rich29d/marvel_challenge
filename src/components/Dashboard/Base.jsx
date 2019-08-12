import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { get } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '../Form/Button.jsx';
import service from '../../services/auth';
import character from '../../api/users';
import Header from './Header';
import Graphic from './Graphic';
import { changeLoading } from '../../share/actions';

class List extends Component {
	constructor(props) {
    super(props);
    this.state = {
      characterList: [],
      responseRequest: {},
      loaded: false
    };
  }

	render() {
    return (
      <div>
        <Header/>
        <Graphic/>
      </div>			
		);
	}
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeLoading }, dispatch);

export default connect(null, mapDispatchToProps)(List);
