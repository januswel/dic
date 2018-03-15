// @flow

import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default class Routes extends React.Component {
  render() {
    const { isAuthenticated, component: Component, ...props } = this.props

    return (
      <Route
        {...props}
        render={props =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
        }
      />
    )
  }
}
