import React, { Component } from 'react';

class Line extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onClickEvent(true);
  }

  render() {
    const {
      thumbnail: {
        path,
        extension
      },
      name,
      title,
      description = '-',
      modified = '-',
    } = this.props.item
    
    return (
      <div className='Line'>
        <div className="Line__Image" style={{backgroundImage: `url(${path}/standard_xlarge.${extension})`}}></div>
        <div className="Line__Name">{name || title || '-'}</div>
        <div className="Line__Desc">{description}</div>
        <div className="Line__modified">{modified}</div>
      </div>
    );
  }
}

export default Line;
