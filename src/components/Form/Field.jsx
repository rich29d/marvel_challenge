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
    const {
      label = '',
      placeholder = '',
      className = '',
      icon,
      value = '',
      type = 'text',
    } = this.props;

    return (
      <div className={`Field ${className}`}>
        <label>{label}</label>
        <div className="Flex Middle Field__Text">
          <i className={`fas fa-${icon}`}></i>
          <input type={type} value={value} placeholder={placeholder} onChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}

export default Field;
