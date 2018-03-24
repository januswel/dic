// @flow

import { push } from 'react-router-redux'

import { authenticationSuccess, authenticationFailure } from '../modules/authentication'
import authenticate, { type Account } from '../../lib/authentication'

import type { Dispatch } from 'redux'

export default class AuthenticationUserStory {
  dispatch: Dispatch

  constructor(dispatch: Dispatch) {
    this.dispatch = dispatch
  }

  login() {
    this.dispatch((dispatch: Dispatch) => {
      authenticate().then((account: Account) => {
        dispatch(authenticationSuccess(account))
        dispatch(push('/'))
      })
    })
  }

  logout() {
    this.dispatch(authenticationFailure())
    this.dispatch(push('/login'))
  }
}
