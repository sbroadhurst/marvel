import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Heroes from '../heroes/Heroes'
import Books from '../literature/Books'
import HeroInfo from '../heroes/HeroInfo'
import ComicInfo from '../literature/ComicInfo'
import HeroGrid from '../heroes/HeroGrid'
import Header from '../header/index'

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Heroes} />
                        <Route path="/recent-comics" component={Books} />
                        <Route path="/hero-info/:id" component={HeroInfo} />
                        <Route path="/comic-info" component={ComicInfo} />
                        <Route path='/hero-grid' component={HeroGrid} />
                    </Switch>
                </div>
            </Router>
        )
    }
}