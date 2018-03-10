import React from 'react'
import './Style.css'

class Poster extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.select(this.props.info.id, this.props.info.name)
    //   console.log(this.props.info.id, this.props.info.name)
  }

  render() {
    let hero = this.props.info

    return (
      <div style={{ display: 'inline-block', padding: '5px' }} >
        <img
          className="tile__img"
          alt={hero.name}
          title={hero.name}
          src={hero.thumbnail}
          onClick={this.handleClick}
        />
        {/* <p className='hero-name'> {hero.name} </p> */}
      </div>
    )
  }
}

export default Poster
