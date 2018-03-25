// @flow

import { createSelector } from 'reselect'

import type { AuthenticationState } from '../../redux/modules/authentication'
type State = {
  authentication: AuthenticationState,
}

export const getAccount = (state: State) => state.authentication.account
export const isAuthenticatedSelector = createSelector([getAccount], account => account !== null)
