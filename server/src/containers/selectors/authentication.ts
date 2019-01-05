import { createSelector } from 'reselect'

const getAccount = (state: any /* TODO: specify correct type */) => state.authentication.account

export const isAuthenticatedSelector = createSelector([getAccount], account => account !== null)
