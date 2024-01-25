import React from 'react'
import './Profile.css'
import logo from '/public/textures/profile_default.jpg'
interface ProfileProps {
	activepage?: string
}

const Profile: React.FC<ProfileProps> = () => {
	const user = {
		username: 'JohnSmith',
		email: 'idk@gmail.com',
		createdAt: '11/11/2023',
	}

	return (
		<div className='p-3 accountsettings'>
			<h1 className='pt-3 text-2xl text-center mainhead'>Profile</h1>
			<div className='flex items-center justify-center mt-6 avatar'>
				<img src={logo} className='w-48' alt=''></img>
			</div>
			<div className='mt-6 mb-2 text-lg text-center body'>
				<p className='text-lg'>
					<strong className='text-violet-300'>Name:</strong> {user.username}
				</p>
				<p className='text-lg'>
					<strong className='text-violet-300'>Email:</strong> {user.email}
				</p>
				<p className='text-lg'>
					<strong className='text-violet-300'>Account created at: </strong>
					{new Date(user.createdAt).toLocaleDateString()}
				</p>
			</div>
		</div>
	)
}

export default Profile
