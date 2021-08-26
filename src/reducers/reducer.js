import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from '../actions'

const reducer = (state, action) => {
  if(action.type === SIDEBAR_OPEN) {
    return {
      ...state,
      isSidebarOpen: true
    }
  }
  if(action.type === SIDEBAR_CLOSE) {
    return {
      ...state,
      isSidebarOpen: false
    }
  }
  throw new Error(`No matcting "${action.type}" - action type`)
}

export default reducer
