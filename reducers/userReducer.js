const initialState = {
  isSuccess: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'get_data_register':
      console.log('ini action di reducer', action)
      return { ...state, isSuccess: action.payload }
    case 'signout':
      return { ...state }
    default:
      return state
  }
}

export default userReducer