import React,{ FC } from 'react';
import { FaUser,FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LoginPage: FC = () => {

    React.useEffect(() => {
        document.body.classList.add('centered-page-body');
        return () => {
          document.body.classList.remove('centered-page-body');
        };
      }, []);

  return (
    <div className='wrapper'>
      <form action="">
        <h1>Login</h1>
        <div className='input-box'>
          <input type="text" placeholder='Username' required></input>
          <FaUser className='icon' />
        </div>

        <div className='input-box'>
          <input type="password" placeholder='Password' required></input>
          <FaLock className='icon'/>
        </div>

        <div className="remember-forgot">
          <label><input type='checkbox'/>Remember me</label>
          <a href='#'>Forgot password?</a>
        </div>
        <Link to='/'>
        <button type="submit" >Login</button>
        </Link>

        <div className="register-link">
            <p>Don't have an account? <Link to ='/register'>Register</Link></p>
          </div>       
      </form>
    </div>
  );
};

export default LoginPage;