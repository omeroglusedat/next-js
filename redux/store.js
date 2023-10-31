import { configureStore } from '@reduxjs/toolkit'
import generalSlice from './general-slice'

export const store = configureStore({
    reducer: {
        generalSlice
    },
})