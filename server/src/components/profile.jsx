// @flow

import React from 'react'

import { type Account } from '../lib/authentication'

const styles = {
  container: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  image: {
    height: 24,
    width: 24,
  },
  contact: {
    marginLeft: 8,
    fontSize: 16,
  },
}

type Props = {
  account: Account,
}

const Profile = (props: Props) => (
  <span style={styles.container}>
    <img src={props.account.iconUrl} style={styles.image} />
    <span style={styles.contact}>{props.account.contact}</span>
  </span>
)

export default Profile
