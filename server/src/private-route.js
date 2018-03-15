// @flow

import React from 'react'
import { Route, Redirect } from 'react-router-dom'

type Props = {
  isAuthenticated: boolean,
  component: React.DOM,
}

export default (props: Props) => {
  const { isAuthenticated, component: Component, ...restProps } = props

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

  return <Route {...restProps} render={render} />
}
