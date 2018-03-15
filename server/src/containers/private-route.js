// @flow

import { connect } from 'react-redux'

import PrivateRoute from '../private-route'

const ConnectedPrivateRoute = connect(state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
}))(PrivateRoute)

export default ConnectedPrivateRoute
