// @flow

import { createSelector } from 'reselect'

const getAccount = state => state.authentication.account

export const isAuthenticatedSelector = createSelector([getAccount], account => account !== null)
