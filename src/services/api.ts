import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const BASE_URL = 'http://127.0.0.1:8000'

interface IUserRequest {
	email: string
	password: string
}

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		prepareHeaders: (headers, {getState}) => {
			const {accessToken} = getState().auth
			if (accessToken) headers.set('Authorization', `Bearer ${accessToken}`)
			return headers
		},
	}),
	tagTypes: ['Assets'],
	endpoints: builder => ({
		createUser: builder.mutation<string, IUserRequest>({
			query: (body: IUserRequest) => ({
				url: '/auth/signup',
				method: 'POST',
				body,
			}),
		}),
		loginUser: builder.mutation<string, IUserRequest>({
			query: (body: IUserRequest) => ({
				url: `/auth/login/`,
				method: 'GET',
				body,
			}),
		}),
		currentUser: builder.query<string, null>({
			query: () => ({
				url: '/auth/me',
				method: 'GET',
			}),
		}),
	}),
})

export const {useCreateUserMutation} = api
