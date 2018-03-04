import React from 'react'
import marvel from './marvel'
import Poster from '../Poster'
import { Redirect } from 'react-router'

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
        <h2>Heroes</h2>
        {this.renderPreview()}
      </div>
    )
  }
}