// @flow

import React from 'react'
import { Route, Redirect } from 'react-router-dom'

type Props = {
  isAuthenticated: boolean,
  component: React.DOM,
}
type State = any

export default class Routes extends React.Component<Props, State> {
  render() {
    const { isAuthenticated, component: Component, ...props } = this.props

    const render = properties => {
      if (isAuthenticated) {
        return <Component {...properties} />
      }

      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: properties.location },
          }}
        />
      )
    }

    return <Route {...props} render={render} />
  }
}
