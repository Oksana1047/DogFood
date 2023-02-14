import { combineReducers } from '@reduxjs/toolkit'

import { filterReducer } from './slices/filterSlice'
import { userReducer } from './slices/userSlise'

export const rootReducer = combineReducers({
  user: userReducer,

  filter: filterReducer,
})
