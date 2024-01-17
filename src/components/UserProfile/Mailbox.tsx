import React from 'react';
import { TbMailOff } from "react-icons/tb";

interface MailboxProps {
  activepage?: string;
}

const Mailbox: React.FC<MailboxProps> = () => {
  return (
    <div className='mailboxsettings'>
      <h1 className='mainhead text-center'>Mailbox</h1>     
      <div className=' text-center'>
        <h3>There are no emails in your mailbox</h3>
      </div>
      <div className='flex items-center justify-center'>
      <TbMailOff size={250}/>
      </div>
    </div>
  );
};

export default Mailbox;