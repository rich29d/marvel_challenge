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
    const {
      className = '',
      text = '',
      icon
    } = this.props;

    const fonticon = icon ? <i class={`fas fa-${icon}`}></i> : '';

    return (
      <div className={`Button ${className}`}>
        <button type="text" onClick={this.handleChange}>{text} {fonticon}</button>
      </div>
    );
  }
}

export default Button;
