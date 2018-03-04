import React from 'react'
import ComicMap from './ComicMap'
var crypto = require('crypto')
var PRIV_KEY = '2563a9d397a9b07a35e00eba1ac5849e21a8197f'
var API_KEY = 'c80eaba5b4bd858c1a4fc978b7792878'

export default class Books extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comicData: null
    }

    this.posterSelected = this.posterSelected.bind(this)
  }

  posterSelected(data) {
    let id = data
    console.log(id)
  }

  componentWillMount() {
    this.fetchComics()
  }

  fetchComics() {
    let self = this
    let url =
      'https://gateway.marvel.com:443/v1/public/comics?dateDescriptor=thisMonth&startYear=2018&orderBy=-onsaleDate&limit=50&apikey='
      +
      API_KEY
    var ts = new Date().getTime()
    var hash = crypto
      .createHash('md5')
      .update(ts + PRIV_KEY + API_KEY)
      .digest('hex')
    url += '&ts=' + ts + '&hash=' + hash
    // console.log(url)

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
          <ComicMap comicData={comicData} />
        </div>
      )
    else return null
  }
}
