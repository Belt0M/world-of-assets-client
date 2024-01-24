import React, { FC, FormEvent } from 'react'
import {  FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { logIn } from '../../store/reducers/AuthSlice'

const PasswordEmailVerify: FC = () => {
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
		navigate('/restorepassword')
	}

	return (
		<div className='wrapper'>
			<form action='' onSubmit={handleSubmit}>
				<h2 className='mb-3'>Email Verification</h2>
				<span>To restore password, please type your email down below: </span>
				<div className='input-box'>
					<input type='text' placeholder='Email' required></input>
					<FaUser className='icon' />					
				</div>
				<button type='submit'>Send Email</button>
			</form>
		</div>
	)
}

export default PasswordEmailVerify
