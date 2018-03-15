// @flow

// actions
export const authSuccess = () => ({
  type: 'AUTH_SUCCESS',
})

export const authFail = () => ({
  type: 'AUTH_FAIL',
})

// reducer
const initialState = {
  isAuthenticated: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
      }
    case 'AUTH_FAIL':
      return {
        ...state,
        isAuthenticated: false,
      }
    default:
      return state
  }
}

export default authReducer
