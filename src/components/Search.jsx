import React, { Component } from 'react';
import _ from 'lodash';
import Logo from '../assets/images/lab_films.png';
import axios from 'axios';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultSearch: {
        Search: []
      },
      term: '',
      timer: null,
      searching: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  SearchTerm(term) {    
    axios.get(`http://www.omdbapi.com/?s=${term}&apikey=f57cce53`)
    .then(resp => {
      this.setState({searching: false});
      this.setState({resultSearch: resp.data});
      this.SearchId();
    });
  }

  SearchId() {
    const resultSearch = this.state.resultSearch;

    for(const i in resultSearch.Search) {
      const id = resultSearch.Search[i].imdbID;

      axios.get(`http://www.omdbapi.com/?i=${id}&apikey=f57cce53`)
        .then(resp => {
          resultSearch.Search[i].info = resp.data;
          this.setState({ resultSearch });
        });
    }
    
  }

  handleChange(event) {
    const self = this;
    this.setState({term: event.target.value});
    this.setState({searching: true});
    clearTimeout(self.state.timer);

    this.setState({
      timer: setTimeout(function () {
        self.SearchTerm(self.state.term);
      }, 1000)
    });
  }

  CardList() {
    const result = this.state.resultSearch.Search;
    let cards = [];

    for (const i in result) {      
      result[i].Poster !== 'N/A' && cards.push(this.CreateItem(result[i], i));
    }
  
    if (cards.length === 0 && this.state.term !== '' && !this.state.searching) {
      return <div className='NotFound Message'>Nothing found with the term <span>'{this.state.term}'</span></div>;
    }
  
    return cards;
  }

  CreateItem(film, index) {
    const img = film.Poster;
    const title = film.Title;
    const plot = _.get(film, 'info.Plot', '');
    const Runtime = _.get(film, 'info.Runtime', '??');
    const RuntimeNumber = Runtime.split(' ')[0];
    const imdbRating = _.get(film, 'info.imdbRating', '??');
    
    return (
      <div className='Card' key={`Card--${index}`} style={{animationDelay: (index * 50) + 'ms'}}>
        <div className="Card__Box">
          <div className="Card__Image" style={{backgroundImage: 'url(' + img + ')'}}></div>
          <div className="Card__Text">
            <div className="Film__Title">
              {title}
            </div>
            <div className="Film__Plot">
              {plot}
            </div>
            <div className="Film__Info Flex SpaceBetween">
              <div className="Film__Runtime"><span>{RuntimeNumber}</span> min</div>
              <div className="Film__imdbRating">IMDb <span>{imdbRating}</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    let content = '';

    if (this.state.term === '') {
      content = <div className='Init Message'>For classics lovers, think of a movie and look here!</div>;
    } else if (this.state.searching) {
      content = <div className='Loading Message'></div>;
    } else {
      content = this.CardList();
    }


    return (
      <div>
        <header>
          <div className='Box Flex Nowrap'>
            <div className="Logo">
              <img src={Logo} alt="Logo Films"/>
            </div>
            <div className="Search">
              <input type="text" placeholder='Search a film' onKeyUp={this.handleChange}/>
            </div>
          </div>
        </header>

        <div className="CardList Flex Nowrap">
          {content}
        </div>

        <footer>
        
        </footer>     
      </div>
    );
  }
}

export default Header;
