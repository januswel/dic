// @flow

import { push } from 'react-router-redux'

import { authenticationSuccess, authenticationFailure } from '../modules/authentication'

export default class AuthenticationUserStory {
  constructor(dispatch) {
    this.dispatch = dispatch
  }

  login() {
    this.dispatch(authenticationSuccess())
    this.dispatch(push('/'))
  }

  logout() {
    this.dispatch(authenticationFailure())
    this.dispatch(push('/login'))
  }
}
