import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { get } from 'lodash';

import Button from '../Form/Button.jsx';
import service from '../../services/auth';
import character from '../../api/character';
import Line from './Line';

class List extends Component {
	constructor(props) {
    super(props);
    this.state = {
      characterList: [],
      responseRequest: {},
      searching: false,
    };
  }

  loading(searching) { this.setState({searching}); }

  componentDidMount() { this.getCharacters(); }

  async getCharacters() {
    this.loading(true);

    const responseRequest = await character.index();
    this.setState({ responseRequest });

    this.loading(false);
  }

  mountCharacterList(responseRequest) {
    return get(responseRequest, 'results', []).length > 0 ?
      responseRequest.results.map((item, index)=> <Link to={`/characters/${item.id}`} key={index}><Line item={item}/></Link>) :
      <div className='NotFound Message'>Nothing found</div>;
  }

	render() {
    const list = this.state.searching ? 'Loading' : this.mountCharacterList(this.state.responseRequest);

		return (
			<div className='Characters'>
        { list }
				<Button text={'Logout'} onClickEvent={() => service.logout()}></Button>
			</div>
		);
	}
}

export default List;
