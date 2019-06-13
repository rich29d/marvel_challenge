import React, { Component } from 'react';
import Button from './Form/Button.jsx';
import service from '../services/auth';

class Charecters extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='Charecters'>
				<Button text={'Logout'} onClickEvent={() => service.logout()}></Button>
			</div>
		);
	}
}

export default Charecters;
