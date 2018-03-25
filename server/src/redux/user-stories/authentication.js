// @flow

import type { Dispatch } from 'redux'

import { signInAction, signOutAction } from '../modules/authentication'
import { signIn, signOut, type Account, type OauthProviderName } from '../../lib/authentication'

export default class AuthenticationUserStory {
  dispatch: Dispatch

  constructor(dispatch: Dispatch) {
    this.dispatch = dispatch
  }

  login(oauthProviderName: OauthProviderName) {
    this.dispatch((dispatch: Dispatch) => {
      signIn(oauthProviderName)
        .then((account: Account) => {
          dispatch(signInAction(account))
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
        })
        .catch(() => {
          // TODO
        })
    })
  }
}
