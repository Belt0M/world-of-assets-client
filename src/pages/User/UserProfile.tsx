import React from "react";
import { useParams } from "react-router-dom";
import UserSidebar from "../../components/UserProfile/UserSidebar";
import AccountSettings from "../../components/UserProfile/AccountSettings";
import './UserProfile.css';
import Mailbox from "../../components/UserProfile/Mailbox";
import Profile from "../../components/UserProfile/Profile";
import Orders from "../../components/UserProfile/Orders";

const UserProfilePage = () => {

    React.useEffect(() => {
		document.body.classList.add('center-left')
		return () => {
			document.body.classList.remove('center-left')
		}
	}, [])

    const{activepage} = useParams()

    return(
            <div className="userprofile">
                <div className="userprofilein">
                <div className="left">
                    <UserSidebar activepage={activepage}/>
                </div>
                <div className="right">
                    {activepage === 'accountsettings' && <AccountSettings/>}
                    {activepage === 'mailbox' && <Mailbox/>}
                    {activepage === 'profile' && <Profile/>}
                    {activepage === 'orders' && <Orders/>}
                </div>
                </div>
            </div>  
    )
}

export default UserProfilePage