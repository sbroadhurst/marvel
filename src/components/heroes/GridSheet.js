import React from 'react';
import Grid from './Grid'

class GridSheet extends React.Component {

    comicMap() {
        let comics = this.props.info
        // console.log(comics)
        return (
            <div>
                {comics.map((info, index) => {
                    return (
                        <Grid
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

        return <div> {this.comicMap()} </div>
    }


}

export default GridSheet;
