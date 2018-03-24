// @flow

import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import authenticationReducer from './modules/authentication'
import { isEnvironmentWithDebug } from '../lib/environment'

export const history = createHistory()

const reducer = combineReducers({ routerReducer, authenticationReducer })

const middlewares = [routerMiddleware(history), thunk]
if (isEnvironmentWithDebug()) {
  middlewares.push(logger)
}

const store = createStore(reducer, applyMiddleware(...middlewares))

export default store
