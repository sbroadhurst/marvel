import React from 'react';
import './Boxes.css'

class HeroSheet extends React.Component {

    render() {
        const hero = this.props.heroData.data.results[0]
        console.log(hero)
        return (
            <div className="wrapper">
                <header className="header">{hero.name}</header>
                <article className="main">
                    <p>{hero.description}</p>
                </article>
                <aside className="aside aside-1"><img src={hero.thumbnail.path + '.' + hero.thumbnail.extension} className='hero-image' alt='The hero selected' /></aside>
                <footer className="footer">Footer</footer>
            </div>
        )
    }

}

export default HeroSheet;
