// @flow

import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Login from '../../components/screens/login'
import { authSuccess } from '../../redux/modules/auth'

const mapDispatchToProps = dispatch => ({
  login: () => {
    dispatch(authSuccess())
    dispatch(push('/'))
  },
})

const ConnectedLogin = connect(null, mapDispatchToProps)(Login)

export default ConnectedLogin
