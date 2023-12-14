import React from 'react';

interface MailboxProps {
  activepage?: string;
}

const Mailbox: React.FC<MailboxProps> = () => {
  return (
    <div className='mailboxsettings'>
      <h1 className='mainhead text-center'>Mailbox</h1>     
    </div>
  );
};

export default Mailbox;