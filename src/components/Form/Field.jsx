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
      value = '',
      className = '',
    } = this.props;
    
    return (
      <div className={`Field ${className}`}>
        <label>{label}</label>
        <div className="Flex Middle Field__Text">
          <i class="fas fa-key"></i>
          <input type="text" placeholder={placeholder} onChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}

export default Field;
