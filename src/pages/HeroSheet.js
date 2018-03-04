import React from 'react';
import './Boxes.css'
import Comic from './Comic'

class HeroSheet extends React.Component {

    comicMap() {
        let comics = this.props.comicData.data.results
        // console.log(comics)
        return (
            <div>
                {comics.map((info, index) => {
                    return (
                        <Comic
                            key={index}
                            info={info}
                            id={info.id}
                        /*  select={this.posterSelected} */
                        />
                    )
                })}
            </div>
        )

    }

    render() {
        // console.log(this.props)
        const hero = this.props.heroData.data.results[0]
        //  console.log(hero)
        return (
            <div className="wrapper">
                <header className="header">{hero.name}</header>
                <article className="main">
                    <p>{hero.description}</p>
                </article>
                <aside className="aside aside-1"><img src={hero.thumbnail.path + '.' + hero.thumbnail.extension} className='hero-image' alt='The hero selected' /></aside>
                <footer className="footer"> Recent Comics <br />{this.comicMap()}</footer>
            </div>
        )
    }

}

export default HeroSheet;
