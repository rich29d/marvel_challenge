import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { get } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '../Form/Button.jsx';
import installationsService from '../../services/installations';
import Header from './Header';
import Graphic from './Graphic';
import { periodGraphic } from '../../share/actions';

import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-BR');

class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  async loadNumberInstallations() {
    const countInstallations = await installationsService.countInstallations();
  }

  async loadBiggerCostInstallations() {
    const biggerCostInstallations = await installationsService.biggerCostInstallations();
  }

  async loadBiggersSumInstallations() {
    const biggerCostInstallations = await installationsService.biggersSumInstallations();
  }

  componentDidMount() {
    //this.loadSumSystemSizeByPeriod('dia');
    //this.loadSumSystemSizeByPeriod('semana');
    //this.loadSumSystemSizeByPeriod('mes');
    //this.loadSumSystemSizeByPeriod('ano');
    //this.loadNumberInstallations();
    //this.loadBiggerCostInstallations();
    //this.loadBiggersSumInstallations();
  }

  changePeriod(period) {
    this.loadSumSystemSizeByPeriod(period);
  }

  render() {
    return (
      <div>
        <Header />
        <Graphic/>
      </div>
    );
  }
}

const mapStateToProps = store => {
  const period = store.rootReducer.period;

  return { period }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ periodGraphic }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Base);
