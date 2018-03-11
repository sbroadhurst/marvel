import React from 'react';
import { Link } from 'react-router-dom'


class ComicPreview extends React.Component {

    render() {

        let comic = this.props.info
        // console.log(comic)
        return (
            <div style={{ display: 'inline-block', margin: '10px' }}>
                <div>
                    <Link to={'/comic-info/' + comic.id} id={comic.id}> =<img src={comic.thumbnail.path + '.' + comic.thumbnail.extension}
                        style={{ width: '10vw', float: 'left' }}
                        alt={comic.title} title={comic.title}
                    /></Link>
                </div>
            </div>
        )
    }

}

export default ComicPreview;
