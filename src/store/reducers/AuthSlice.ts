import type { PayloadAction } from '@reduxjs/toolkit'
import { createListenerMiddleware, createSlice } from '@reduxjs/toolkit'

interface AuthState {
	isLoggedIn: boolean
	userId: number | null
	accessToken: string | null
}

const buildInitialState = (): AuthState => {
	const unauthenticatedState = {
		isLoggedIn: false,
		userId: null,
		accessToken: null,
	}

	const existingSession = window.localStorage.getItem('session')
	if (!existingSession) return unauthenticatedState

	const { userId, accessToken } = JSON.parse(existingSession)
	if (userId === null || accessToken === null) return unauthenticatedState

	return {
		isLoggedIn: true,
		userId,
		accessToken,
	}
}

type LogInActionPayload = Pick<AuthState, 'userId' | 'accessToken'>

export const authSlice = createSlice({
	name: 'auth',
	initialState: buildInitialState,
	reducers: {
		logIn(state: AuthState, action: PayloadAction<LogInActionPayload>) {
			state.isLoggedIn = true

			const { userId, accessToken } = action.payload
			state.userId = userId
			state.accessToken = accessToken
		},
		logOut(state: AuthState) {
			window.localStorage.removeItem('session')
			state.isLoggedIn = false
			state.userId = null
			state.accessToken = null
		},
	},
})

export const { logIn, logOut } = authSlice.actions

export const storeTokenOnLogin = createListenerMiddleware()
storeTokenOnLogin.startListening({
	actionCreator: logIn,
	effect: (_, store) => {
		const { userId, accessToken } = store.getState()[authSlice.name]
		window.localStorage.setItem(
			'session',
			JSON.stringify({ userId, accessToken })
		)
	},
})
