import React from 'react'
import comics from './comics'
import Poster from './Poster'

export default class Books extends React.Component {
  constructor(props) {
    super(props)

    this.posterSelected = this.posterSelected.bind(this)
  }

  posterSelected(data) {
    let id = data
    console.log(id)
  }

  renderPreview() {
    return (
      <div>
        {comics.map((info, index) => {
          return (
            <Poster
              key={index}
              info={info}
              id={info.id}
              select={this.posterSelected}
            />
          )
        })}
      </div>
    )
  }
  render() {
    return (
      <div>
        <h2>Comics</h2>
        {this.renderPreview()}
      </div>
    )
  }
}
