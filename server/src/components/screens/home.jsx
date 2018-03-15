// @flow

import React from 'react'

export default props => (
  <div>
    <h1>Home</h1>
    <p>{`Private home is at: ${props.location.pathname}`}</p>
  </div>
)
