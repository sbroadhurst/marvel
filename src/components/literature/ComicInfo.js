import React from 'react'
import ComicSheet from './ComicSheet'
var crypto = require('crypto')
var PRIV_KEY = '2563a9d397a9b07a35e00eba1ac5849e21a8197f'
var API_KEY = 'c80eaba5b4bd858c1a4fc978b7792878'

export default class ComicInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comicData: null
        }
        this.retrieveData = this.retrieveData.bind(this)
    }

    componentWillMount() {
        this.retrieveData()
    }

    retrieveData() {
        let self = this
        console.log(this.props.location.state.id)
        //console.log(this.state.comicData)
        let id = this.props.location.state.id
        let url =
            'https://gateway.marvel.com:443/v1/public/comics/' +
            id +
            '?apikey=' +
            API_KEY
        var ts = new Date().getTime()
        var hash = crypto
            .createHash('md5')
            .update(ts + PRIV_KEY + API_KEY)
            .digest('hex')
        url += '&ts=' + ts + '&hash=' + hash
        console.log(url)

        fetch(url)
            .then(function (payload) {
                return payload.json()
            })
            .then(function (json) {
                //   console.log(json)
                self.setState({ comicData: json })
            })
    }


    render() {
        const { comicData } = this.state
        console.log(comicData)
        if (comicData != null)
            return (
                <div>
                    <ComicSheet comicData={comicData} />
                </div>
            )
        else return null
    }
}
