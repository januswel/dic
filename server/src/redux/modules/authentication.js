// @flow

import type { Account } from '../../lib/authentication'

// types
const SUCCESS = 'authentication/success'
const FAILURE = 'authentication/failure'

// actions
type AuthenticationSuccess = {
  type: typeof SUCCESS,
  payload: {
    account: Account,
  },
}
export const authenticationSuccess = (account: Account) => ({
  type: SUCCESS,
  payload: {
    account,
  },
})

type AuthenticationFailure = {
  type: typeof FAILURE,
}
export const authenticationFailure = () => ({
  type: FAILURE,
})

type Action = AuthenticationSuccess | AuthenticationFailure

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
    case SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        account: action.payload.account,
      }
    case FAILURE:
      return {
        ...state,
        isAuthenticated: false,
      }
    default:
      return state
  }
}

export default authenticationReducer
