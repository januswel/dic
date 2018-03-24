// @flow

const ENVIRONMENTS_WITH_DEBUG = ['development']
const { NODE_ENV } = process.env

export const isEnvironmentWithDebug = () => ENVIRONMENTS_WITH_DEBUG.includes(NODE_ENV)
