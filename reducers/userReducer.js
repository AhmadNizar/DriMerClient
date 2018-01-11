const initialState = {

  email: '',
  token: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'signin':
      return { ...state, email: action.payload.email, token: action.payload.token }
    case 'signout':
      return {...state, email: '', password: ''}
    default:
      return state
  }
}

export default userReducer