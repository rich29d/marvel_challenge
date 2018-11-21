import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.img = props.film.Poster;
    this.title = props.film.Title;
    this.index = props.index;
  }

  render() {
    return (
      <div className='Card' style={{animationDelay: (this.index * 50) + 'ms'}}>
        <div className="Card__Box">
          <div className="Card__Image" style={{backgroundImage: 'url(' + this.img + ')'}}></div>
          <div className="Card__Text">
            <div className="Film__Title">
              {this.title}
            </div>
            <div className="Film__Plot">
              On the outskirts of Whoville, there lives a green, revenge-seeking Grinch who plans on ruining the Christmas holiday for all of the citizens of the town.
            </div>
            <div className="Film__Info Flex SpaceBetween">
              <div className="Film__Runtime"><span>104</span> min</div>
              <div className="Film__imdbRating">IMDb <span>6.1</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
