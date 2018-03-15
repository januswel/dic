// @flow

import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Login from '../../components/screens/login'
import { authSuccess } from '../../redux/modules/auth'

const ConnectedLogin = connect(null, dispatch => ({
  login: () => {
    dispatch(authSuccess())
    dispatch(push('/'))
  },
}))(Login)

export default ConnectedLogin
