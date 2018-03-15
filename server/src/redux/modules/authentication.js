// @flow

// types
const SUCCESS = 'authentication/success'
const FAILURE = 'authentication/failure'

// actions
type AuthenticationSuccess = {
  type: typeof SUCCESS,
}
export const authenticationSuccess = () => ({
  type: SUCCESS,
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
