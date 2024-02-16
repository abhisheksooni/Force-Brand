import { configureStore } from '@reduxjs/toolkit'
import MainSlice from './Redux/Features/MainSlice'

export const store = configureStore({
    reducer:{
        click:MainSlice,
        
    }
})