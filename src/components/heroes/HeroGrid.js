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
            todos: null,
            offset: 0
        }
        //this.setOffset = this.setOffset.bind(this)

    }

    setOffset = (page) => {
        console.log(this)
        console.log(page)
        let newOffset = (page - 1) * 100
        console.log(newOffset)
        this.setState({ offset: newOffset })
        console.log(this.state.offset)
        this.fetchTodos(newOffset)
    }

    componentWillMount() {
        this.fetchTodos(0)
    }

    fetchTodos(offset) {
        let self = this
        //        let offset = this.state.offset
        console.log(offset)
        let url =
            'https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=100&offset=' + offset + '&apikey=' +
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
                console.log(json)
                // console.log(json.data.results)
                self.setState({ todos: json.data.results })
            })
    }


    render() {
        const { todos } = this.state
        // console.log(todos.data.results)
        if (todos != null)
            return (
                <div>
                    <Pagination todos={todos} select={this.setOffset} />
                </div>
            )
        else return null
    }
}

export default HeroGrid;
