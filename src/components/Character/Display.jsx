import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import character from '../../api/character';
import comic from '../../api/comic';
import Line from './Line.jsx';
import { changeLoading } from '../../share/actions';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comics: [],
      responseRequest: {},
      loaded: false,
    };
  }

  async componentDidMount() {
    this.props.changeLoading(true);
    await this.getDisplay();
    await this.getComics();
    this.props.changeLoading(false);
    this.setState({loaded: true});
  }

  async getDisplay() {
    const { results: characterItem = [] } = await character.find(this.props.match.params.id);  
    this.setState({ characterItem: characterItem[0] });
  }

  async getComics() {
    const { results: comics = [] } = await comic.index(this.props.match.params.id);  
    this.setState({ comics });
  }

  mountComicList(comics) {
    return comics.length > 0 ?
      comics.map((item, index) => <Line item={item} key={index}/>) :
      <div className='NotFound Message'>Nothing found</div>;
  }

  mountDisplay(characterItem) {
    const {
      thumbnail: {
        path: image,
        extension
      },
      name = 'Name not found',
      description = 'Description not found',
    } = characterItem;
    const comics = this.mountComicList(this.state.comics);

    return (
      <div className='Display'>
        <div className='Display__Text'>
          <div className='Display__Text--title'>{name}</div>
          <div className='Display__Text--description'>{description}</div>
        </div>

        <div className="Display__Image" style={{backgroundImage: `url(${image}/standard_xlarge.${extension})`}}></div>

        <div className='Display__Comics'>
          {comics}
        </div>
      </div>
    );
  }

  render() {    
    const display = this.state.loaded ? this.mountDisplay(this.state.characterItem) : 'loading';

    return (<div>{display}</div>)
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeLoading }, dispatch);

export default connect(null, mapDispatchToProps)(Display);
