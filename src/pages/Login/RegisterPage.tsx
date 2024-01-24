import React, { FC, FormEvent, useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { logIn } from '../../store/reducers/AuthSlice'
import PasswordRequirements from '../../components/PasswordRequirements';

const RegisterPage: FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const navigate = useNavigate()
	const dispatch = useAppDispatch()

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
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


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(logIn({ userId: 1, accessToken: '' }))
		navigate('/')
    
    if (password === confirmPassword) {
    } else {
      setPasswordsMatch(false);
    }
  };

  React.useEffect(() => {
    document.body.classList.add('centered-page-body');
    return () => {
      document.body.classList.remove('centered-page-body');
    };
  }, []);

  return (
    <div className='wrapper'>
      <form action="" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className='input-box'>
          <input type="text" placeholder='Username' required />
          <FaUser className='icon' />
        </div>

        <div className='input-box'>
          <input type="text" placeholder='Email' required />
          <FaUser className='icon' />
        </div>

        <div className='input-box'>
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            required
          />
          <FaLock className='icon'/>
        </div>

        {/* Include the PasswordRequirements component */}
        <PasswordRequirements password={password} isPasswordFocused={isPasswordFocused} />

        <div className='input-box'>
          <input
            type="password"
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <FaLock className='icon'/>
        </div>

        {!passwordsMatch && <p style={{ color: 'red' }}>Passwords do not match. Please try again.</p>}

        <button type="submit">Sign Up</button>
        <div className="register-link">
          <p>Already have an account? <Link to='/login'>Login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
