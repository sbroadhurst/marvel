import React from 'react';
import ComicPreview from './ComicPreview'

class ComicMap extends React.Component {

    renderPreview() {
        let recentComics = this.props.comicData.data.results
        console.log(recentComics)
        return (
            <div>
                {recentComics.map((info, index) => {
                    return (
                        <ComicPreview
                            key={index}
                            info={info}
                            id={info.id}
                            name={info.name}
                            select={this.posterSelected}
                        />
                    )
                })}
            </div>
        )
    }


    render() {
        console.log(this.props)
        return (
            <div>
                <h2 style={{ fontSize: '2vw' }}> Recent Comics - Most Recent First <br /> </h2>
                <div>
                    {this.renderPreview()}
                </div>
            </div>
        )
    }

}
export default ComicMap;
