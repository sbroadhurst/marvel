import React from 'react';


class ComicPreview extends React.Component {

    render() {

        let comic = this.props.info
        // console.log(comic)
        return (
            <div style={{ display: 'inline-block', margin: '10px' }}>
                <div>
                    <img src={comic.thumbnail.path + '.' + comic.thumbnail.extension}
                        style={{ width: '10vw', float: 'left' }}
                        alt={comic.title} title={comic.title}
                    />
                </div>
            </div>
        )
    }

}

export default ComicPreview;
