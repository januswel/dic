// @flow

import { connect } from 'react-redux'

import Login from '../../components/screens/login'
import AuthenticationUserStory from '../../redux/user-stories/authentication'

const mapDispatchToProps = dispatch => {
  const authentication = new AuthenticationUserStory(dispatch)
  return {
    actions: {
      authentication,
    },
    dispatch,
  }
}

const ConnectedLogin = connect(null, mapDispatchToProps)(Login)

export default ConnectedLogin
