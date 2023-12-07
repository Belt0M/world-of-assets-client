import React, { FC, FormEvent } from 'react'
import { FaLock, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../hooks/redux'
import { logIn } from '../store/reducers/AuthSlice'

const LoginPage: FC = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	React.useEffect(() => {
		document.body.classList.add('centered-page-body')
		return () => {
			document.body.classList.remove('centered-page-body')
		}
	}, [])

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		dispatch(logIn({ userId: 1, accessToken: '' }))
		navigate('/')
	}

	return (
		<div className='wrapper'>
			<form action='' onSubmit={handleSubmit}>
				<h1>Login</h1>
				<div className='input-box'>
					<input type='text' placeholder='Username' required></input>
					<FaUser className='icon' />
				</div>

				<div className='input-box'>
					<input type='password' placeholder='Password' required></input>
					<FaLock className='icon' />
				</div>

				<div className='remember-forgot'>
					<label>
						<input type='checkbox' />
						Remember me
					</label>
					<a href='#'>Forgot password?</a>
				</div>
				<button type='submit'>Login</button>

				<div className='register-link'>
					<p>
						Don't have an account? <Link to='/register'>Register</Link>
					</p>
				</div>
			</form>
		</div>
	)
}

export default LoginPage
