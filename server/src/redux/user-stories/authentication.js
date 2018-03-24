// @flow

import { push } from 'react-router-redux'

import { signInAction, signOutAction } from '../modules/authentication'
import { signIn, signOut, type Account } from '../../lib/authentication'

import type { Dispatch } from 'redux'

export default class AuthenticationUserStory {
  dispatch: Dispatch

  constructor(dispatch: Dispatch) {
    this.dispatch = dispatch
  }

  login() {
    this.dispatch((dispatch: Dispatch) => {
      signIn()
        .then((account: Account) => {
          dispatch(signInAction(account))
          dispatch(push('/'))
        })
        .catch(() => {
          // TODO
        })
    })
  }

  logout() {
    this.dispatch((dispatch: Dispatch) => {
      signOut()
        .then(() => {
          dispatch(signOutAction())
          dispatch(push('/login'))
        })
        .catch(() => {
          // TODO
        })
    })
  }
}
