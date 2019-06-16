import React, { Component } from 'react';
import character from '../../api/character';
import comic from '../../api/comic';
import Line from './Line.jsx';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comics: [],
      responseRequest: {},
      searching: true,
    };
  }

  loading(searching) { this.setState({searching}); }

  componentDidMount() {
    this.getDisplay();
    this.getComics()
  }

  async getDisplay() {
    this.loading(true);

    const { results: characterItem = [] } = await character.find(this.props.match.params.id);  
    this.setState({ characterItem: characterItem[0] });

    this.loading(false);
  }

  async getComics() {
    this.loading(true);

    const { results: comics = [] } = await comic.index(this.props.match.params.id);  
    this.setState({ comics });

    this.loading(false);
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
    const display = this.state.searching ? 'Loading' : this.mountDisplay(this.state.characterItem)

    return (<div>{display}</div>)
  }
}

export default Display;
