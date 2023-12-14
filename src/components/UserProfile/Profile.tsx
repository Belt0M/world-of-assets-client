import React from 'react';

interface ProfileProps {
  activepage?: string;
}

const Profile: React.FC<ProfileProps> = () => {
  return (
    <div className='accountsettings'>
      <h1 className='mainhead text-center'>Profile</h1>     
    </div>
  );
};

export default Profile;