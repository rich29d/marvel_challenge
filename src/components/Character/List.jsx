import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { get } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '../Form/Button.jsx';
import service from '../../services/auth';
import character from '../../api/character';
import Line from './Line';
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

  componentDidMount() { this.getCharacters(); }

  async getCharacters() {
    this.props.changeLoading(true);

    const responseRequest = await character.index();
    this.setState({ responseRequest });

    this.props.changeLoading(false);
    this.setState({ loaded: true });
  }

  mountCharacterList(responseRequest) {
    return get(responseRequest, 'results', []).length > 0 ?
      responseRequest.results.map((item, index)=> <Link to={`/characters/${item.id}`} key={index}><Line item={item}/></Link>) :
      <div className='NotFound Message'>Nothing found</div>;
  }

	render() {
    const list = this.state.loaded ? this.mountCharacterList(this.state.responseRequest): 'loading';

		return (
			<div className='Characters'>
        { list }
				<Button text={'Logout'} onClickEvent={() => service.logout()}></Button>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeLoading }, dispatch);

export default connect(null, mapDispatchToProps)(List);
