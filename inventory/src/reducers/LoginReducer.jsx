const loginReducer = (state, action = {}) => {
    const { type } = action
    switch (type) {
      case 'LOG_IN': {
        return {
          ...state,
          userLoggedIn: true,
        }
      }
      case 'LOG_OUT': {
        return {
          ...state,
          userLoggedIn: false,
        }
      }
      default:
        return state
    }
  }
  
export default loginReducer;