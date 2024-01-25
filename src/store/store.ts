import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {api} from '../services/api'
import {authSlice, storeTokenOnLogin} from './reducers/AuthSlice'

// Combine all reducers
const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	[authSlice.name]: authSlice.reducer,
})

// Init redux store
export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({serializableCheck: false})
			.concat(api.middleware)
			.concat(storeTokenOnLogin.middleware),
	// .concat(booksApi.middleware),
})

//Some types for easy use with TS
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
