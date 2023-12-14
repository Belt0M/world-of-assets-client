import React, { FC, FormEvent, useState } from 'react';
import { FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { logIn } from '../../store/reducers/AuthSlice';
import PasswordRequirements from '../../components/PasswordRequirements';

const RestorePassword: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  React.useEffect(() => {
    document.body.classList.add('centered-page-body');
    return () => {
      document.body.classList.remove('centered-page-body');
    };
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (newPassword === confirmPassword) {
      dispatch(logIn({ userId: 1, accessToken: '' }));
      navigate('/');
    } else {
      setPasswordsMatch(false);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  return (
    <div className='wrapper'>
      <form action='' onSubmit={handleSubmit}>
        <h2>Restore Password</h2>
        <div className='input-box'>
          <input
            type='password'
            placeholder='New Password'
            value={newPassword}
            onChange={handlePasswordChange}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            required
          />
          <FaLock className='icon' />
        </div>
        
        <PasswordRequirements password={newPassword} isPasswordFocused={isPasswordFocused} />

        <div className='input-box'>
          <input
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <FaLock className='icon' />
        </div>

        {!passwordsMatch && <p className='mb-4' style={{ color: 'red' }}>Passwords do not match. Please try again.</p>}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default RestorePassword;
