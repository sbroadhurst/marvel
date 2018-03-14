import React from 'react'
import { Link } from 'react-router-dom'

class Comic extends React.Component {


    render() {
        //  console.log(this.props.info)
        let comic = this.props.info
        return (
            <div style={{ display: 'inline-block', margin: '10px' }} >
                <Link to={{
                    pathname: '/comic-info/' + comic.id, state: { id: comic.id }
                }}>
                    <img src={comic.images[0].path + '.' + comic.images[0].extension}
                        alt={comic.title}
                        title={comic.title}
                        style={{ height: '100px' }} /> </Link>
            </div>
        )
    }


}

export default Comic;
