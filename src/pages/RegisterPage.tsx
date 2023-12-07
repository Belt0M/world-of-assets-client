import React,{ FC } from 'react';
import { FaUser,FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const RegisterPage: FC = () => {

    React.useEffect(() => {
        document.body.classList.add('centered-page-body');
        return () => {
          document.body.classList.remove('centered-page-body');
        };
      }, []);

  return (
    <div className='wrapper'>
      <form action="">
        <h1>Register</h1>
        <div className='input-box'>
          <input type="text" placeholder='Username' required></input>
          <FaUser className='icon' />
        </div>

        <div className='input-box'>
          <input type="text" placeholder='Email' required></input>
          <FaUser className='icon' />
        </div>

        <div className='input-box'>
          <input type="password" placeholder='Password' required></input>
          <FaLock className='icon'/>
        </div>


        <div className='input-box'>
          <input type="password" placeholder='Confirm Password' required></input>
          <FaLock className='icon'/>
        </div>

        <button type="submit">Sign Up</button>
        <div className="register-link">
            <p>Already have an account? <Link to ='/login'>Login</Link></p>
          </div>
      </form>
    </div>
  );
};

export default RegisterPage;