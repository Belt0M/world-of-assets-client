import React, {FC, FormEvent} from 'react'
import {FaLock, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useAppDispatch} from '../../hooks/redux'
import {logIn} from '../../store/reducers/AuthSlice'

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
		dispatch(logIn({userId: 1, accessToken: ''}))
		navigate('/')
	}

	return (
		<div className='wrapper'>
			<form action='' onSubmit={handleSubmit}>
				<h2 className='pb-1 font-semibold text-center'>Login</h2>
				<div className='input-box'>
					<input type='text' placeholder='Email' required></input>
					<FaUser className='icon' />
				</div>

				<div className='input-box'>
					<input type='password' placeholder='Password' required></input>
					<FaLock className='icon' />
				</div>

				<div className='flex justify-between mb-4 text-sm'>
					<label className='flex items-center gap-2'>
						<input type='checkbox' />
						Remember me
					</label>
					<Link to='/emailverify'>Forgot password?</Link>
				</div>
				<button
					type='submit'
					// disabled={!checkIsValidData()}
					className='w-full h-12 font-semibold transition-all duration-500 rounded-xl bg-gradient-to-r from-violet-500 to-pink-700 disabled:from-gray-500 disabled:brightness-100 disabled:cursor-not-allowed hover:brightness-125'
				>
					{/* {isLoading ? 'Loading...' : 'Login'} */}
					Login
				</button>

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
