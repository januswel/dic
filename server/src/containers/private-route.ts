import { connect } from 'react-redux'

import PrivateRoute from '../private-route'

const mapStateToProps = (state: any /* TODO: specify correct type */) => ({
  isAuthenticated: state.authenticationReducer.isAuthenticated,
})

const ConnectedPrivateRoute = connect(mapStateToProps)(PrivateRoute)

export default ConnectedPrivateRoute
