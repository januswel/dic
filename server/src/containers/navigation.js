// @flow

import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Navigation from '../components/navigation'
import { authSuccess, authFail } from '../redux/modules/auth'

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
})

const mapDispatchToProps = dispatch => ({
  login: () => {
    dispatch(authSuccess())
    dispatch(push('/'))
  },
  logout: () => {
    dispatch(authFail())
    dispatch(push('/login'))
  },
})

const ConnectedNavigation = connect(mapStateToProps, mapDispatchToProps)(Navigation)

export default ConnectedNavigation
