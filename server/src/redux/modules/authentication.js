// @flow

// types
const SUCCESS = 'authentication/success'
const FAILURE = 'authentication/failure'

// actions
export const authenticationSuccess = () => ({
  type: SUCCESS,
})

export const authenticationFailure = () => ({
  type: FAILURE,
})

// reducer
const initialState = {
  isAuthenticated: false,
}

const authenticationReducer = (state = initialState, action) => {
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
