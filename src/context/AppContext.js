/* eslint-disable no-unused-vars */
import {
  createContext, useContext, useEffect, useState, useMemo, useCallback,
} from 'react'
import { DogFoodApiConst } from '../api/DogFoodApi'

export const AppContext = createContext()

function AppContextProvider({ children }) {
  const [userToken, setUserToken] = useState(() => {
    const tokenFromLs = localStorage.getItem('user_token')
    return tokenFromLs
  })

  useEffect(() => {
    localStorage.setItem('user_token', userToken)
    DogFoodApiConst.setToken(userToken)
  }, [userToken])

  const setNewToken = useCallback((newToken) => setUserToken(newToken), [setUserToken])

  const removeToken = useCallback(() => setUserToken(''), [setUserToken])

  const tokenValues = useMemo(() => ({
    userToken, setNewToken, removeToken,
  }), [userToken])

  return (
    <AppContext.Provider value={tokenValues}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider

export const useAppContext = () => useContext(AppContext)
