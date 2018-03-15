// @flow

import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  link: {
    padding: 8,
  },
}

export default props => (
  <nav>
    <Link style={styles.link} to="/">
      Home
    </Link>
    <Link style={styles.link} to="/add">
      Add definitions
    </Link>
    {props.isAuthenticated ? (
      <button onClick={props.logout}>Logout Here!</button>
    ) : (
      <button onClick={props.login}>Login Here!</button>
    )}
  </nav>
)
