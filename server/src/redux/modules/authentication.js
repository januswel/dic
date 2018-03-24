// @flow

import type { Account } from '../../lib/authentication'

// types
const SIGN_IN = 'authentication/sign-in'
const SIGN_OUT = 'authentication/sign-out'

// actions
type SignInAction = {
  type: typeof SIGN_IN,
  payload: {
    account: Account,
  },
}
export const signInAction = (account: Account) => ({
  type: SIGN_IN,
  payload: {
    account,
  },
})

type SignOutAction = {
  type: typeof SIGN_OUT,
}
export const signOutAction = () => ({
  type: SIGN_OUT,
})

type Action = SignInAction | SignOutAction

// reducer
type State = {
  isAuthenticated: boolean,
  account?: Account,
}
const initialState = {
  isAuthenticated: false,
}

const authenticationReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
        account: action.payload.account,
      }
    case SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
        account: null,
      }
    default:
      return state
  }
}

export default authenticationReducer
