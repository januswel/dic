import { connect } from 'react-redux'

import Home from '../../components/screens/home'
import { isAuthenticatedSelector } from '../selectors/authentication'

const mapStateToProps = (state: any /* TODO: specify correct type */) => ({
  account: state.authentication.account,
  isAuthenticated: isAuthenticatedSelector(state),
})

const ConnectedHome = connect(mapStateToProps)(Home)

export default ConnectedHome
