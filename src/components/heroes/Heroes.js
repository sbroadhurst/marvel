import React from 'react'
import marvel from './marvel'
import femaleMarvel from './femaleMarvel'
import villiansMarvel from './villiansMarvel'
import Poster from '../Poster'
import { Redirect } from 'react-router'
import '../Style.css'
import { Link } from 'react-router-dom'
import Carousel from 'nuka-carousel';

export default class Heroes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      id: null,
      name: null
    }

    this.posterSelected = this.posterSelected.bind(this)
  }

  posterSelected(data, whom) {
    this.setState({ redirect: true })
    let identity = data
    let who = whom
    this.setState({ id: identity, name: who })
    console.log(identity)
  }
  renderPreview() {
    return (
      <div className>
        <h1>Popular Heroes</h1>
        <Carousel slidesToShow={1} slideWidth={'250px'} renderBottomCenterControls={false}
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
        <Carousel slidesToShow={1} slideWidth={'250px'} renderBottomCenterControls={false}
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
        <Carousel slidesToShow={1} slideWidth={'250px'} renderBottomCenterControls={false}
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
    const { redirect } = this.state
    if (redirect)
      return (
        <Redirect
          to={{
            pathname: '/hero-info/' + this.state.name,
            state: { identity: this.state.id }
          }}
        />
      )

    return (
      <div>
        <h2><Link to='/hero-grid' >Heroes</Link></h2>
        {this.renderPreview()}
      </div>
    )
  }
}
