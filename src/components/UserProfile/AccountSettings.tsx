import React from 'react';

interface AccountSettingsProps {
  activepage?: string;
}

const AccountSettings: React.FC<AccountSettingsProps> = () => {
  return (
    <div className='accountsettings'>
      <h1 className='mainhead text-center'>Account Settings</h1>     
    </div>
  );
};

export default AccountSettings;