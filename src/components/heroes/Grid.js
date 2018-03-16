import React from 'react';

class Grid extends React.Component {

    render() {
        let hero = this.props.info
        // console.log(hero)
        return (
            <div style={{ display: 'inline-block', padding: '5px' }} >
                <img
                    className="tile__img"
                    alt={hero.name}
                    title={hero.name}
                    src={hero.thumbnail.path + "." + hero.thumbnail.extension}
                    onClick={this.handleClick}
                />
                {/* <p className='hero-name'> {hero.name} </p> */}
            </div>
        )
    }
}

export default Grid;
