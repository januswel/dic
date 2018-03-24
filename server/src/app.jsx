// @flow

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './redux/store'

import Navigation from './containers/navigation'
import Home from './containers/screens/home'
import AddDefinitions from './components/screens/add-definitions'

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add-definitions" component={AddDefinitions} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
)
