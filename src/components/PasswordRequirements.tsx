// PasswordRequirements.tsx
import React from 'react'

interface PasswordRequirementsProps {
	password: string
	isPasswordFocused: boolean
}

const PasswordRequirements: React.FC<PasswordRequirementsProps> = ({
	password,
	isPasswordFocused,
}) => {
	const getPasswordRequirements = () => {
		const hasUppercase = /[A-Z]/.test(password)
		const hasNumber = /\d/.test(password)
		const isLengthValid = password.length >= 8

		return {
			hasUppercase,
			hasNumber,
			isLengthValid,
		}
	}

	const renderIcon = (requirementMet: boolean) => {
		if (!isPasswordFocused) {
			return null // Do not display icon when not focused
		}

		return requirementMet ? (
			<span role='img' aria-label='Success'>
				✅
			</span>
		) : (
			<span role='img' aria-label='Cross'>
				❌
			</span>
		)
	}

	return (
		<div
			id='password-requirements'
			className={`password-requirements ${isPasswordFocused ? 'visible' : ''}`}
		>
			<strong>Password Requirements:</strong>
			<ul>
				<li className='ml-1 list-none'>
					{renderIcon(getPasswordRequirements().isLengthValid)} Minimum 8
					characters
				</li>
				<li className='ml-1 list-none'>
					{renderIcon(getPasswordRequirements().hasUppercase)} Include at least
					one uppercase letter
				</li>
				<li className='ml-1 list-none'>
					{renderIcon(getPasswordRequirements().hasNumber)} Include at least one
					number
				</li>
			</ul>
		</div>
	)
}

export default PasswordRequirements
