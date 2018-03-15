// @flow

import { connect } from 'react-redux'

import Navigation from '../components/navigation'
import AuthenticationUserStory from '../redux/user-stories/authentication'

const mapStateToProps = state => ({
  isAuthenticated: state.authenticationReducer.isAuthenticated,
})

const mapDispatchToProps = dispatch => {
  const authentication = new AuthenticationUserStory(dispatch)
  return {
    actions: {
      authentication,
    },
    dispatch,
  }
}

const ConnectedNavigation = connect(mapStateToProps, mapDispatchToProps)(Navigation)

export default ConnectedNavigation
