// @flow

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import authReducer from './modules/auth'

export const history = createHistory()

const store = createStore(combineReducers({ routerReducer, authReducer }), applyMiddleware(routerMiddleware(history)))

export default store
