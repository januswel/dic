const ENVIRONMENTS_WITH_DEBUG = ['development']
const { NODE_ENV } = process.env

export const isEnvironmentWithDebug = () => {
  if (NODE_ENV) {
    return ENVIRONMENTS_WITH_DEBUG.includes(NODE_ENV)
  }

  return false
}
