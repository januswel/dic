// @flow

import React from 'react'

import { type Account } from '../../lib/authentication'

type Props = {
  location: {
    pathname: string,
  },
  account: Account,
}

export default (props: Props) => (
  <div>
    <h1>Home</h1>
    <p>{`Private home is at: ${props.location.pathname}`}</p>
    {props.account ? <p>{props.account.email}</p> : null}
  </div>
)
