import React from 'react';
import { Link } from 'react-router-dom'

class Grid extends React.Component {

    render() {
        let hero = this.props.info
        //console.log(hero)
        return (
            <Link to={{ pathname: 'hero-info/' + hero.id }}><div style={{ display: 'inline-block', padding: '5px' }} >
                <img
                    width='250px'
                    height='250px'
                    alt={hero.name}
                    title={hero.name}
                    src={hero.thumbnail.path + "." + hero.thumbnail.extension}
                />

            </div></Link>
        )
    }
}

export default Grid;
