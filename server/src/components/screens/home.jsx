// @flow

import React from 'react'

import firebase from '../../lib/firebase'

type Props = {
  location: {
    pathname: string,
  },
}

export default (props: Props) => (
  <div>
    <h1>Home</h1>
    <p>{`Private home is at: ${props.location.pathname}`}</p>
    <p>{`FireBase SDK version ${firebase.SDK_VERSION}`}</p>
  </div>
)
