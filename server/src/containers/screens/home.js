// @flow

import { connect } from 'react-redux'

import Home from '../../components/screens/home'

const mapStateToProps = state => ({
  account: state.authenticationReducer.account,
})

const ConnectedHome = connect(mapStateToProps)(Home)

export default ConnectedHome
