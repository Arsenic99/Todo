import { configureStore } from '@reduxjs/toolkit'
import taskReducer, { localStorageMiddleware } from './tasksSlice'

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
})