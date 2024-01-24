import React, { useState } from 'react';
import PasswordRequirements from '../../PasswordRequirements';

const Password: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [notification, setNotification] = useState('');

  const handleCurrentPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic password validation (minimum length 8 characters, at least one uppercase letter, and at least one number)
    const hasUppercase = /[A-Z]/.test(newPassword);
    const hasNumber = /\d/.test(newPassword);
    const isLengthValid = newPassword.length >= 8;
    const isPasswordValid = hasUppercase && hasNumber && isLengthValid;

    if (isPasswordValid && newPassword === confirmPassword) {
      setIsPasswordValid(true);
      setNotification('Password successfully changed.');
    } else {
      setIsPasswordValid(false);
      setNotification('Please check the password requirements and ensure the confirmation matches.');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-center mb-4'>Change Password</h1>
        <div className='flex flex-col items-center justify-center border border-white rounded-md mb-6 w-1/2 p-2'>

      <form onSubmit={handlePasswordSubmit} className="change-password-form mb-4">
        <div className="mb-4">
          <label htmlFor="currentPassword" className="block text-xl font-semibold text-white">
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
            className="mt-1 p-2 border border-gray-300 rounded-md text-black w-72"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-xl font-semibold text-white">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={handleNewPasswordChange}
            className="mt-1 p-2 border border-gray-300 rounded-md text-black w-72"
            required
          />

          {/* Include PasswordRequirements component */}
          <PasswordRequirements password={newPassword} isPasswordFocused={newPassword.length > 0} />
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-xl font-semibold text-white">
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="mt-1 p-2 border border-gray-300 rounded-md text-black w-72"
            required
          />
        </div>

        <div className="flex items-center justify-center">
          <button type="submit" className="bg-purple-700 text-white px-4 py-2 mt-2 rounded-md border border-white">
            Change Password
          </button>
        </div>
      </form>

      {notification && (
        <div className={isPasswordValid ? 'text-green-500 mt-2' : 'text-red-500 mt-2'}>
          {notification}
        </div>
      )}
        </div>
    </div>
  );
};

export default Password;
