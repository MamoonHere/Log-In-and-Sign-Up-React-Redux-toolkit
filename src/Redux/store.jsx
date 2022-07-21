import { configureStore } from '@reduxjs/toolkit'
import SignUpReducer from './Slice'

export const store = configureStore({
    reducer: {
        Reducer: SignUpReducer
    },
})