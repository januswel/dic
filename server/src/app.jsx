import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './components/navigation'
import Home from './components/screens/home'
import AddDefinitions from './components/screens/add-definitions'

export default () => (
  <Router>
    <div>
      <Navigation />

      <Route exact path="/" component={Home} />
      <Route path="/add" component={AddDefinitions} />
    </div>
  </Router>
)
