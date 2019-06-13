import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onClickEvent(true);
  }

  render() {
    return (
      <div className='Button'>
        <button type="text" onClick={this.handleChange}>{this.props.text}</button>
      </div>
    );
  }
}

export default Button;
