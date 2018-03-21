import React, { Component } from 'react'
//import Header from './components/header/index';
import Routes from './components/routes/index';

class App extends Component {
  render() {
    return (
      <div className='app'>
        {/* <Header /> */}
        <Routes />
      </div>
    )
  }
}
export default App

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>Components</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//       </li>
//     </ul>

//     <Route path={`${match.path}/:topicId`} component={Topic} />
//     <Route
//       exact
//       path={match.path}
//       render={() => <h3>Please select a topic.</h3>}
//     />
//   </div>
// )


