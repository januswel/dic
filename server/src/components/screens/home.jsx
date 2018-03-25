// @flow

import React from 'react'

import { type Account } from '../../lib/authentication'

type Props = {
  account: Account,
  isAuthenticated: boolean,
}

export default (props: Props) => (
  <div>
    <h1>Home</h1>
    {props.isAuthenticated ? <p>{props.account.contact}</p> : null}
  </div>
)
