import React from 'react';
import '../Boxes.css'
import Pagination from './Pagination'

var crypto = require('crypto')
var PRIV_KEY = '2563a9d397a9b07a35e00eba1ac5849e21a8197f'
var API_KEY = 'c80eaba5b4bd858c1a4fc978b7792878'

class HeroGrid extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: null
        }
    }

    componentWillMount() {
        this.fetchTodos()
    }

    fetchTodos() {
        let self = this
        let url =
            'https://gateway.marvel.com:443/v1/public/characters?orderBy=name&apikey=' +
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
                console.log(json.data.results)
                self.setState({ todos: json.data.results })
            })
    }


    render() {
        const { todos } = this.state
        // console.log(todos.data.results)
        if (todos != null && todos !== undefined)
            return (
                <Pagination todos={todos} />
            )
        else return null
    }
}

export default HeroGrid;
