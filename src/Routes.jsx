import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store'

// Containers
import Main from './containers/Main'
import Entries from './containers/Entries'
import Entry from './containers/Entry'

const history = syncHistoryWithStore(browserHistory, store)

class Routes extends Component {
  constructor(props, state) {
    super(props, state)
  }
  render() {
    return (
      <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={Main}>
              <IndexRoute component={Entries} />
              <Route path="entries/:entryID" component={Entry} />
            </Route>
          </Router>
      </Provider>
    )
  }
}
export default Routes
