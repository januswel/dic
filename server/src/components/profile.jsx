// @flow

import React from 'react'

import { type Account } from '../lib/authentication'

const styles = {
  container: {
    padding: 8,
    margin: 8,
  },
}

type Props = {
  account: Account,
}

export default (props: Props) => (
  <div style={styles.container}>
    <img src={props.account.iconUrl} />
    <p>{props.account.contact}</p>
  </div>
)
