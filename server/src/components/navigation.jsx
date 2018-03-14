import React from 'react'

import { Link } from 'react-router-dom'

const styles = {
  link: {
    padding: 8,
  },
}

export default () => (
  <nav>
    <Link style={styles.link} to="/">
      Home
    </Link>
    <Link style={styles.link} to="/add">
      Add definitions
    </Link>
  </nav>
)
