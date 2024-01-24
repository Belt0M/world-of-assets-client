import React from "react";
import { useParams } from "react-router-dom";
import UserSidebar from "../../components/UserProfile/UserSidebar";
import AccountSettings from "../../components/UserProfile/AccountSettings";
import './UserProfile.css';
import Mailbox from "../../components/UserProfile/Mailbox";
import Profile from "../../components/UserProfile/Profile";
import Orders from "../../components/UserProfile/Orders";
import Help from "../../components/UserProfile/Settings/Help"
import FAQ from "../../components/UserProfile/Settings/FAQ";
import Username from "../../components/UserProfile/Settings/Username";
import Email from "../../components/UserProfile/Settings/Email";
import Password from "../../components/UserProfile/Settings/Password";
import BugReportForm from "../../components/UserProfile/Settings/reportabug";
import ContactForm from "../../components/UserProfile/Settings/ContactForm";
import LiveChat from "../../components/UserProfile/Settings/LiveChat";
import ChangeEmail from "../../components/UserProfile/Settings/ChangeEmail";

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
                <div className="left border-2 border-white rounded-xl">
                    <UserSidebar activepage={activepage}/>
                </div>
                <div className="right border-2 border-white rounded-xl">
                    {activepage === 'accountsettings' && <AccountSettings/>}
                    {activepage === 'mailbox' && <Mailbox/>}
                    {activepage === 'profile' && <Profile/>}
                    {activepage === 'orders' && <Orders/>}
                    {activepage === 'help' && <Help/>}
                    {activepage === 'faq' && <FAQ/>}
                    {activepage === 'username' && <Username/>}
                    {activepage === 'email' && <Email/>}
                    {activepage === 'password' && <Password/>}
                    {activepage === 'reportabug' && <BugReportForm/>}
                    {activepage === 'contact' && <ContactForm/>}
                    {activepage === 'livechat' && <LiveChat/>}
                    {activepage === 'changeemail' && <ChangeEmail/>}
                </div>
                </div>
            </div>  
    )
}

export default UserProfilePage