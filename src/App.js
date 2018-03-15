import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Heroes from './components/heroes/Heroes'
import Books from './components/literature/Books'
import HeroInfo from './components/heroes/HeroInfo'
import ComicInfo from './components/literature/ComicInfo'
import HeroGrid from './components/heroes/HeroGrid'

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none' }}>
        <li>
          <Link to="/">Heroes</Link>
        </li>
        <li style={{ marginLeft: '60px' }}>
          <Link to="/recent-comics">Recent Comics</Link>
        </li>
        {/* <li>
          <Link to="/topics">Topics</Link>
        </li> */}
      </ul>

      <hr />

      <Route exact path="/" component={Heroes} />
      <Route path="/recent-comics" component={Books} />
      <Route path="/topics" component={Topics} />
      <Route path="/hero-info" component={HeroInfo} />
      <Route path="/comic-info" component={ComicInfo} />
      <Route path='/hero-grid' component={HeroGrid} />
    </div>
  </Router>
)
export default BasicExample
