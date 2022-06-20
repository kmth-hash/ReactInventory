const paginationReducer = (state, action = {}) => {
    const { type } = action
    switch (type) {
      case 'SET_COUNT': {
        return {
          ...state,
          pageCount: type.pageCount,
        }
      }
      default:
        return state
    }
  }
  
export default paginationReducer;