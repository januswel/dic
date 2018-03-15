// @flow

// types
const SUCCESS = 'authentication/success'
const FAILURE = 'authentication/success'

// actions
export const authSuccess = () => ({
  type: SUCCESS,
})

export const authFail = () => ({
  type: FAILURE,
})

// reducer
const initialState = {
  isAuthenticated: false,
}

const authReducer = (state = initialState, action) => {
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

export default authReducer
