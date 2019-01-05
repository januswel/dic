import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export interface Props {
  isAuthenticated: boolean
  component: any // TODO: specify correct type
}

export default (props: Props) => {
  const { isAuthenticated, component: Component, ...restProps } = props

  const render = (properties: any /* TODO: specify correct type */) => {
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
