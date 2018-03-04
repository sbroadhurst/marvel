import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Heroes from './components/heroes/Heroes'
import Books from './components/literature/Books'
import HeroInfo from './components/heroes/HeroInfo'

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
      <ul>
        <li>
          <Link to="/">Heroes</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Heroes} />
      <Route path="/books" component={Books} />
      <Route path="/topics" component={Topics} />
      <Route path="/hero-info" component={HeroInfo} />
    </div>
  </Router>
)
export default BasicExample
