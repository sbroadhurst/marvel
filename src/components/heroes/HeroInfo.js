import React from 'react'
import HeroSheet from './HeroSheet'
var crypto = require('crypto')
var PRIV_KEY = '2563a9d397a9b07a35e00eba1ac5849e21a8197f'
var API_KEY = 'c80eaba5b4bd858c1a4fc978b7792878'

export default class HeroInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      heroData: null,
      comicData: null
    }
    this.retrieveData = this.retrieveData.bind(this)
  }

  componentWillMount() {
    this.retrieveData()
    this.retrieveComics()
  }

  retrieveData() {
    let self = this
    // console.log(this.props.location.state)
    //  console.log(this.state.heroData)
    let id = this.props.location.state.identity
    let url =
      'https://gateway.marvel.com:443/v1/public/characters/' +
      id +
      '?apikey=' +
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
        self.setState({ heroData: json })
      })
  }

  retrieveComics() {
    let self = this
    // console.log(this.props.location.state)
    //  console.log(this.state.heroData)
    let id = this.props.location.state.identity
    let url =
      'https://gateway.marvel.com:443/v1/public/characters/' +
      id + '/comics?startYear=2018&orderBy=-onsaleDate&limit=5&apikey='
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
    const { heroData, comicData } = this.state
    // console.log(heroData)
    //  console.log(comicData)
    if (heroData != null && comicData != null)
      return (
        <div>
          <HeroSheet heroData={heroData} comicData={comicData} />
        </div>
      )
    else return null
  }
}
