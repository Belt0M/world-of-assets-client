import React from 'react';
import logo from '../../../public/textures/profile_default.jpg'
import './Profile.css'
interface ProfileProps {
  activepage?: string;
}

const Profile: React.FC<ProfileProps> = () => {
  const user = {
      username: 'JohnSmith',
      email: 'idk@gmail.com',
      createdAt: '11/11/2023'    
}

  return (
    <div className='accountsettings'>
      <h1 className='mainhead text-center'>Profile</h1>
      <div className='avatar flex items-center justify-center mt-6'>
      <img src ={logo} className='w-48' alt=""        
        ></img>
      </div>
      <div className='body text-center text-lg mt-6 mb-2'>
      <p className='text-lg'>Name: {user.username}</p>
        <p className='text-lg'>Email: {user.email}</p>
        <p className='text-lg'>
          Account created at: {new Date(user.createdAt).toLocaleDateString()}
        </p>
      </div> 
    </div>
  );
};

export default Profile;