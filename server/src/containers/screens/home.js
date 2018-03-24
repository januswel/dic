// @flow

import { connect } from 'react-redux'

import Home from '../../components/screens/home'
import { isAuthenticatedSelector } from '../selectors/authentication.js'

const mapStateToProps = state => ({
  account: state.authentication.account,
  isAuthenticated: isAuthenticatedSelector(state),
})

const ConnectedHome = connect(mapStateToProps)(Home)

export default ConnectedHome
