import React from 'react';
import '../Boxes.css'


class ComicSheet extends React.Component {

    timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp)
        var months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]

        var month = months[a.getMonth()]
        var date = a.getDate()
        var year = a.getFullYear()
        var time = month + ' ' + date + ' ' + year
        return time
    }

    render() {
        // console.log(this.props)
        const comic = this.props.comicData.data.results[0]
        console.log(comic)
        return (
            <div className="wrapper">
                <header className="header">{comic.title}</header>
                <article className="main">
                    <div className='body'>
                        {comic.description} <br /><br />
                        <p className='info'>{comic.prices[0].type}: $ {comic.prices[0].price}<br />
                            {comic.dates[0].type}:  {this.timeConverter(comic.dates[0].date)} </p>

                    </div>
                </article>
                <aside className="aside aside-1"><img src={comic.thumbnail.path + '.' + comic.thumbnail.extension} className='comic-image' alt='The comic selected' /></aside>
                <footer className="footer"> Footer Text <br /></footer>
            </div>
        )
    }

}

export default ComicSheet;
