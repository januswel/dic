// @flow

import React from 'react'

type Props = {
  location: {
    pathname: string,
  },
}

export default (props: Props) => (
  <div>
    <h1>Home</h1>
    <p>{`Private home is at: ${props.location.pathname}`}</p>
  </div>
)
