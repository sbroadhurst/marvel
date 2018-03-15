import React from 'react'
import marvel from './marvel'
import femaleMarvel from './femaleMarvel'
import villiansMarvel from './villiansMarvel'
import Poster from '../Poster'
import { Redirect } from 'react-router'
import '../Style.css'
import { Link } from 'react-router-dom'

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
    //console.log(identity)
  }
  renderPreview() {
    return (
      <div>
        <div className="contain">
          <h1>Popular Heroes</h1>
          <div className="row">
            <div className="row__inner">
              <div className="tile">
                <div className="tile__media">
                  {marvel.map((info, index) => {
                    return (
                      <Poster
                        key={index}
                        info={info}
                        id={info.id}
                        name={info.name}
                        select={this.posterSelected}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contain">
          <h1> Popular Heroines</h1>
          <div className="row">
            <div className="row__inner">
              <div className="tile">
                <div className="tile__media">
                  {femaleMarvel.map((info, index) => {
                    return (
                      <Poster
                        key={index}
                        info={info}
                        id={info.id}
                        name={info.name}
                        select={this.posterSelected}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contain">
          <h1>Popular Villians</h1>
          <div className="row">
            <div className="row__inner">
              <div className="tile">
                <div className="tile__media">
                  {villiansMarvel.map((info, index) => {
                    return (
                      <Poster
                        key={index}
                        info={info}
                        id={info.id}
                        name={info.name}
                        select={this.posterSelected}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
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
