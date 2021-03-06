import React from 'react'
import marvel from './marvel'
import femaleMarvel from './femaleMarvel'
import villiansMarvel from './villiansMarvel'
import Poster from '../Poster'
import '../Style.css'
import { Link } from 'react-router-dom'
import Carousel from 'nuka-carousel';

export default class Heroes extends React.Component {

  renderPreview() {
    return (
      <div>
        <h1>Popular Heroes</h1>
        <Carousel slidesToShow={1} slideWidth={'210px'} renderBottomCenterControls={false} frameOverflow='show'
        >
          {marvel.map((info, index) => {
            return (
              <Poster
                key={index}
                info={info}
                id={info.id}
                select={this.posterSelected}
              />
            )
          })}
        </Carousel>
        <h1>Popular Heroines</h1>
        <Carousel slidesToShow={1} slideWidth={'210px'} renderBottomCenterControls={false} frameOverflow='show'
        >
          {femaleMarvel.map((info, index) => {
            return (
              <Poster
                key={index}
                info={info}
                id={info.id}
                select={this.posterSelected}
              />
            )
          })}
        </Carousel>
        <h1>Popular Villians</h1>
        <Carousel slidesToShow={1} slideWidth={'210px'} renderBottomCenterControls={false} frameOverflow='show'
        >
          {villiansMarvel.map((info, index) => {
            return (
              <Poster
                key={index}
                info={info}
                id={info.id}
                select={this.posterSelected}
              />
            )
          })}
        </Carousel>
      </div>

    )
  }

  render() {
    return (
      <div>
        <h2><Link to='/hero-grid' >Heroes</Link></h2>
        {this.renderPreview()}
      </div>
    )
  }
}
