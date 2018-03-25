// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import Profile from './profile'

import type AuthenticationUserStory from '../redux/user-stories/authentication'
import { type Account } from '../lib/authentication'

const styles = {
  link: {
    padding: 8,
  },
}

type Props = {
  isAuthenticated: boolean,
  account: Account,
  actions: {
    authentication: AuthenticationUserStory,
  },
}

export default (props: Props) => (
  <nav>
    <Link style={styles.link} to="/">
      Home
    </Link>
    <Link style={styles.link} to="/add">
      Add definitions
    </Link>
    {props.isAuthenticated ? (
      <div>
        <button onClick={() => props.actions.authentication.logout()}>Logout</button>
        <Profile account={props.account} />
      </div>
    ) : (
      <div>
        <button onClick={() => props.actions.authentication.login('google')}>Google Login</button>
        <button onClick={() => props.actions.authentication.login('twitter')}>Twitter Login</button>
      </div>
    )}
  </nav>
)
