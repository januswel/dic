// @flow

import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Navigation from '../components/navigation'
import { authSuccess, authFail } from '../redux/modules/auth'

const ConnectedNavigation = connect(null, dispatch => ({
  login: () => {
    dispatch(authSuccess())
    dispatch(push('/'))
  },
  logout: () => {
    dispatch(authFail())
    dispatch(push('/login'))
  },
}))(Navigation)

export default ConnectedNavigation
