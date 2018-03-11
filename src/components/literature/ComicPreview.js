import React from 'react';


class ComicPreview extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick() {
        this.props.select(this.props.info.id)
        // console.log(this.props.info.id)
    }

    render() {


        let comic = this.props.info
        // console.log(comic)
        return (
            <div style={{ display: 'inline-block', margin: '10px' }}>
                <div>
                    <img src={comic.thumbnail.path + '.' + comic.thumbnail.extension}
                        style={{ width: '10vw', float: 'left' }}
                        alt={comic.title} title={comic.title} onClick={this.handleClick}
                    />
                </div>
            </div>
        )
    }

}

export default ComicPreview;
