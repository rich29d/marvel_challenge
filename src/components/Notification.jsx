import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../assets/style/notification.css';

class Notification extends Component {
  render() {
    const {
      show = false,
      icon = '',
      text = '',
      type = '',
    } = this.props.notification;

    const className = show ? 'Show' : '';
    const fonticon = icon ? <i class={`fas fa-${icon}`}></i> : '';
    
    return (
      <div className={`Notification ${className} ${type} Flex Middle`}>
        {fonticon} {text}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  notification: store.notification.options
});

export default connect(mapStateToProps)(Notification);
