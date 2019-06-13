import React, { Component } from 'react';

class Field extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onTextChange(event.target.value);
  }

  render() {
    return (
      <div className='Field'>
        <input type="text" placeholder={this.props.placeholder} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Field;
