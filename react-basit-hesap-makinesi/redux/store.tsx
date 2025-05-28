import { configureStore } from '@reduxjs/toolkit'
import  calculatorReducer  from './calculatorSlice'

export const store = configureStore({
  reducer: {
    calculatorValue : calculatorReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch