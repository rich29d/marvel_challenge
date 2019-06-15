import React, { Component } from 'react';
import Button from './Form/Button.jsx';
import service from '../services/auth';
import character from '../api/character';

class Charecters extends Component {
	constructor(props) {
    super(props);

    this.list = [];
    this.loadList()
  }
  
  async loadList() {
    this.list = await character.index();     
  }

  mountList() {
    const result = this.list;
    let Lines = [];

    for (const i in result) {      
      Lines.push(this.CreateItem(result[i], i));
    }
  
    if (Lines.length === 0) {
      return <div className='NotFound Message'>Nothing found</div>;
    }
  
    return Lines;
  }

  CreateItem(character, index) {
    const {
      thumbnail: {
        path: image
      },
      name = 'Name not found',
      description = 'Description not found',
      modified = 'Date not found',
    } = character
    
    return (
      <div className='Line' key={`Line--${index}`}>
        <div className="Line__Image" style={{backgroundImage: 'url(' + image + ')'}}></div>
        <div className="Line__Name">{name}</div>
        <div className="Line__Desc">{description}</div>
        <div className="Line__modified">{modified}</div>
      </div>
    );
  }

	render() {
    const line = this.mountList()

		return (
			<div className='Charecters'>
        { this.list }
				<Button text={'Logout'} onClickEvent={() => service.logout()}></Button>
			</div>
		);
	}
}

export default Charecters;
