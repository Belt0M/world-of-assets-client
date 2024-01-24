import { FC, MouseEvent } from 'react';
import { FaUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom';

interface DropDownProfileProps {
    onLogoutClick: (event: MouseEvent<HTMLLIElement>) => void;
}
// <li className='account-li'><IoSettingsOutline className='icon'/>Settings</li> <= settings
const DropDownProfile: FC<DropDownProfileProps> = ({ onLogoutClick }) => {
    return (
        <div className='flex flex-col dropDownProfile'>
            <ul className='flex flex-col gap-2 list-none'>
                <li className='account-li'> <Link to='/user/profile'> <FaUser className='icon'/>Profile</Link></li>                
                <li className='account-li' onClick={onLogoutClick}><CiLogout className='icon'/><Link to='/'>Logout</Link></li>
            </ul>
        </div>
    );
}

export default DropDownProfile;