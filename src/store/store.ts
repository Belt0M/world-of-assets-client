import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authSlice, storeTokenOnLogin } from './reducers/AuthSlice'

// Combine all reducers
const rootReducer = combineReducers({
	[authSlice.name]: authSlice.reducer,
})

// Init redux store
export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(storeTokenOnLogin.middleware),
	// .concat(booksApi.middleware),
})

//Some types for easy use with TS
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
