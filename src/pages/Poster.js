import React from 'react'

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
      <div className="hero-list" style={{ display: 'inline-block', padding: '10px', width: '100%vw' }}>
        <img
          style={{ width: '70px', height: '100px', margin: '5px' }}
          className="hero"
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
