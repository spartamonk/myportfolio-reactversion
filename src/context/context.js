import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/reducer'
import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from '../actions'
const AppContext = React.createContext()
const initialState = {
  isSidebarOpen: false,
}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }
  const closeSidebar =()=> {
   dispatch({type: SIDEBAR_CLOSE})
  }
  return (
    <AppContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
