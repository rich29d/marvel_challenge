import React, { Component } from 'react';
import Card from './Card.jsx';
import Logo from '../assets/images/lab_films.png';
import axios from 'axios';

class Header extends Component {
  constructor(props) {
    super(props);
    this.term = 'batman';
    this.state = {
      resultSearch: {
        Search: []
      },
      term: 'spider man',
      timer: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  CardList(props) {
    let cards = [];

    for (const i in props.resultSearch.Search) {
      const item = props.resultSearch.Search[i];

      if (item.Poster !== 'N/A') {        
        i % 5 === 0 && cards.push(<div className='Separator'></div>);
        cards.push(<Card film={item} index={i}/>);
      }
    }

    return cards;
  }

  SearchTerm(term) {
    console.log('ok');
    axios.get(`http://www.omdbapi.com/?s=${term}&apikey=f57cce53`)
    .then(resp => this.setState({resultSearch: resp.data}));
  }

  componentDidMount() {
    this.SearchTerm(this.state.term);
  }

  handleChange(event) {
    const self = this;
    this.setState({term: event.target.value});
    clearTimeout(self.state.timer);

    this.setState({
      timer: setTimeout(function () {
        self.SearchTerm(self.state.term);
      }, 1000)
    });
  }

  render() {
    return (
      <div>
        <header>
          <div className='Box Flex'>
            <div className="Logo">
              <img src={Logo} alt="Logo Films"/>
            </div>
            <div className="Search">
              <input type="text" placeholder='Search a film' onKeyUp={this.handleChange}/>
            </div>
          </div>
        </header>

        <div className="CardList Flex Nowrap SpaceBetween">
          <this.CardList resultSearch={this.state.resultSearch}/> 
        </div>      
      </div>
    );
  }
}

export default Header;
