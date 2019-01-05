import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import Navigation from '../components/navigation'
import AuthenticationUserStory from '../redux/user-stories/authentication'
import { isAuthenticatedSelector } from './selectors/authentication'

const mapStateToProps = (state: any /* TODO: specify correct type */) => ({
  isAuthenticated: isAuthenticatedSelector(state),
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  actions: {
    authentication: new AuthenticationUserStory(dispatch),
  },
})

const ConnectedNavigation = connect(mapStateToProps, mapDispatchToProps)(Navigation)

export default ConnectedNavigation
