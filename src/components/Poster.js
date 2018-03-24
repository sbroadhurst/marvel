import React from 'react'
import { Link } from 'react-router-dom'


class Poster extends React.Component {

  render() {
    let hero = this.props.info
    //console.log(hero)
    return (
      <div >
        <Link to={{ pathname: 'hero-info/' + hero.id }} >
          <img
            className="tile__img"
            width='200px'
            height=" 150px"
            alt={hero.name}
            title={hero.name}
            src={hero.thumbnail}
          />
        </Link>
      </div>
    )
  }
}

export default Poster
