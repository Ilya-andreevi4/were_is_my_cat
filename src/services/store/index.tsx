import { configureStore } from '@reduxjs/toolkit'
import { playersReducer } from './gameReducers/gameReducers'

const store = configureStore({
  reducer:{
    players: playersReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>