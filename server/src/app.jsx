// @flow

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './redux/store'

import PrivateRoute from './containers/private-route'
import Navigation from './containers/navigation'
import Login from './containers/screens/login'
import Home from './containers/screens/home'
import AddDefinitions from './components/screens/add-definitions'

console.log(store)

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Navigation />
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
)
