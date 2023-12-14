import React from 'react';
import { CiSettings,CiLogout, CiMail, CiUser, CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import './UserSidebar.css'

interface UserSidebarProps {
  activepage?: string;
}

const UserSidebar: React.FC<UserSidebarProps> = ({activepage}) => {
  return (
    <div>
      <div className="usersidebar">
      
        {
          activepage === 'profile' ?
          <div className='s2'><CiUser /><span>Profile</span></div>
          :
          <Link to='/user/profile' className='stylenone'><div className='s1'><CiUser /><span>Profile</span></div></Link>
        }

        {
          activepage === 'orders' ? 
          <div className='s2'><CiShoppingCart /><span>Orders</span></div>
          :
          <Link to='/user/orders' className='stylenone'><div className='s1'><CiShoppingCart /><span>Orders</span></div></Link>
        }

        {
          activepage === 'mailbox' ? 
          <div className='s2'><CiMail /><span>Mailbox</span></div>
          :
          <Link to='/user/mailbox' className='stylenone'><div className='s1'><CiMail /><span>Mailbox</span></div></Link>
        }

        {
          activepage === 'accountsettings' ?
          <div className='s2'><CiSettings /><span>Account Settings</span></div>
          :
          <Link to='/user/accountsettings' className='stylenone'><div className='s1'><CiSettings /><span>Account Settings</span></div></Link>
        }

        {
          activepage === 'logout' ? 
          <div className='s2'><CiLogout /><span>Logout</span></div>
          :
          <Link to='/user/logout' className='stylenone'><div className='s1'><CiLogout /><span>Logout</span></div></Link>
        }
      </div>

    </div>
  );
};

export default UserSidebar;