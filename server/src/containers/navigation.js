// @flow

import { connect } from 'react-redux'

import Navigation from '../components/navigation'
import AuthenticationUserStory from '../redux/user-stories/authentication'
import { isAuthenticatedSelector } from './selectors/authentication.js'

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticatedSelector(state),
})

const mapDispatchToProps = dispatch => ({
  actions: {
    authentication: new AuthenticationUserStory(dispatch),
  },
})

const ConnectedNavigation = connect(mapStateToProps, mapDispatchToProps)(Navigation)

export default ConnectedNavigation
