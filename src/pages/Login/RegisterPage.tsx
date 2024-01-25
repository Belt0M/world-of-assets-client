import React, {FC, FormEvent, useState} from 'react'
import {FaLock, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import Alert from '../../atoms/Alert'
import PasswordRequirements from '../../components/PasswordRequirements'
import {initSignupData} from '../../data/init-signup.data'
import {useAppDispatch} from '../../hooks/redux'
import {useCreateUserMutation} from '../../services/api'
import {logIn} from '../../store/reducers/AuthSlice'
import {ISignupData} from '../../types/ISignupData'

const RegisterPage: FC = () => {
	const [passwordsMatch, setPasswordsMatch] = useState(true)
	const [signupData, setSignupData] = useState<ISignupData>(initSignupData)

	const [createUser, {isError, isSuccess, isLoading}] = useCreateUserMutation()

	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const checkIsValidData = (): boolean => {
		return (
			signupData.password.length > 0 &&
			signupData.confirmPassword.length > 0 &&
			signupData.email.length > 0 &&
			signupData.username.length > 0
		)
	}

	const handleDataChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		type: keyof ISignupData
	) => {
		setSignupData(prev => ({...prev, [type]: e.target.value}))
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		if (signupData.password === signupData.confirmPassword) {
			setPasswordsMatch(true)
		} else {
			setPasswordsMatch(false)
			return
		}

		const response = await createUser({
			email: signupData.email,
			password: signupData.password,
		})
		console.log(response)

		dispatch(logIn({userId: 1, accessToken: ''}))

		navigate('/')
	}

	React.useEffect(() => {
		document.body.classList.add('centered-page-body')
		return () => {
			document.body.classList.remove('centered-page-body')
		}
	}, [])

	return (
		<div className='wrapper'>
			<form onSubmit={handleSubmit}>
				<h2 className='pb-1 font-semibold text-center'>Sign up</h2>
				<div className='input-box'>
					<input
						type='text'
						placeholder='Username'
						value={signupData.username}
						onChange={e => handleDataChange(e, 'username')}
						required
					/>
					<FaUser className='icon' />
				</div>

				<div className='input-box'>
					<input
						type='text'
						placeholder='Email'
						value={signupData.email}
						onChange={e => handleDataChange(e, 'email')}
						required
					/>
					<FaUser className='icon' />
				</div>

				<div className='input-box'>
					<input
						type='password'
						placeholder='Password'
						value={signupData.password}
						onChange={e => handleDataChange(e, 'password')}
						required
					/>
					<FaLock className='icon' />
				</div>

				{/* Include the PasswordRequirements component */}
				<PasswordRequirements
					password={signupData.password}
					isPasswordFocused={signupData.password.length > 0}
				/>

				<div className='input-box'>
					<input
						type='password'
						placeholder='Confirm Password'
						value={signupData.confirmPassword}
						onChange={e => handleDataChange(e, 'confirmPassword')}
						required
					/>
					<FaLock className='icon' />
				</div>

				{!passwordsMatch && (
					<p className='mb-3 text-red-500'>
						Passwords do not match. Please try again.
					</p>
				)}

				<button
					type='submit'
					disabled={!checkIsValidData()}
					className='w-full h-12 font-semibold transition-all duration-500 rounded-xl bg-gradient-to-r from-violet-500 to-pink-700 disabled:from-gray-500 disabled:brightness-100 disabled:cursor-not-allowed hover:brightness-125'
				>
					{isLoading ? 'Loading...' : 'Create'}
				</button>
				<div className='register-link'>
					<p>
						Already have an account? <Link to='/login'>Login</Link>
					</p>
				</div>
			</form>
			{isError && (
				<Alert text='Error: A problem during registration' type='error' />
			)}
			{isSuccess && (
				<Alert
					text='You have successfully logged into your account'
					type='success'
				/>
			)}
		</div>
	)
}

export default RegisterPage
