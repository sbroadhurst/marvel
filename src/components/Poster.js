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
    //console.log(hero)
    return (
      <div >
        <img
          className="tile__img"
          width='250px'
          height=" 150px"
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
