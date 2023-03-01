import { configureStore } from '@reduxjs/toolkit'
import { REDUX_LS_KEY } from './constants'

import { getInitState } from './initState'

import { rootReducer } from './rootReducer'
// import { filterReducer } from './slices/filterSlice'

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: getInitState(),

})

store.subscribe(() => {
  const currentState = store.getState()

  window.localStorage.setItem(REDUX_LS_KEY, JSON.stringify(currentState))
})
