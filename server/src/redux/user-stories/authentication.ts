import { Dispatch } from 'redux'

import { signInAction, signOutAction } from '../modules/authentication'
import { signIn, signOut, Account, OauthProviderName } from '../../lib/authentication'

export default class AuthenticationUserStory {
  dispatch: Dispatch<any>

  constructor(dispatch: Dispatch<any>) {
    this.dispatch = dispatch
  }

  login(oauthProviderName: OauthProviderName) {
    this.dispatch((dispatch: Dispatch<any>) => {
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
    this.dispatch((dispatch: Dispatch<any>) => {
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
