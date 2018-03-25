// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import type AuthenticationUserStory from '../redux/user-stories/authentication'

const styles = {
  link: {
    padding: 8,
  },
}

type Props = {
  isAuthenticated: boolean,
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
      <button onClick={() => props.actions.authentication.logout()}>Logout</button>
    ) : (
      <div>
        <button onClick={() => props.actions.authentication.login('google')}>Google Login</button>
        <button onClick={() => props.actions.authentication.login('twitter')}>Twitter Login</button>
      </div>
    )}
  </nav>
)
