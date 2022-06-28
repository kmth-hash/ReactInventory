const navbarReducer = (state, action = {}) => {
    const { type } = action
    switch (type) {
      case 'Nav_Icon_Select': {
        return {
          ...state,
          selected_nav: action.selected_nav,
        }
      }
      case 'No_Nav_Icon_Select': {
        return {
          ...state,
          selected_nav: '',
        }
      }
      default:
        return state
    }
  }
  
export default navbarReducer;