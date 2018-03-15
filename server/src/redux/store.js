// @flow

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import authenticationReducer from './modules/authentication'

export const history = createHistory()

const store = createStore(
  combineReducers({ routerReducer, authenticationReducer }),
  applyMiddleware(routerMiddleware(history)),
)

export default store
