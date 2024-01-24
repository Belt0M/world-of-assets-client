import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ValueItemType {
  name: string;
  description: string;
  tags: string[];
}

interface HeaderItemType {
  name: string;
}

interface OptionItemType {
  header: HeaderItemType;
  values: ValueItemType[];
}


interface AccountSettingsProps {
  activepage?: string;
}

const AccountSettings: React.FC<AccountSettingsProps> = () => {

  const options: OptionItemType[] = [
    {
      header: {
        name: "Account",
      },
      values: [
        {
          name: "Profile",
          description: "Check your Profile Page",
          tags: [
            "email",
            "username",
            "first name",
            "last name",
            "date of birth",
          ],
        },
        {
          name: "Username",
          description: "Change your username",
          tags: [],
        },
        {
          name: "Email",
          description: "Change your email",
          tags: [],
        },
        {
          name: "Password",
          description: "Change your password",
          tags: [],
        },
        // Add more entries as needed
        /*{
          name: "Security Settings",
          description: "Manage your account security",
          tags: ["security", "two-factor authentication"],
        },
        {
          name: "Notification Preferences",
          description: "Customize your notification settings",
          tags: ["notifications"],
        },*/
      ],
    },
    /*{
      header: {
        name: "Settings",
      },
      values: [
        {
          name: "General Settings",
          description: "Adjust your general preferences",
          tags: ["general"],
        },
        {
          name: "Appearance",
          description: "Customize the look and feel of the app",
          tags: ["appearance", "theme"],
        },
        {
          name: "Privacy",
          description: "Manage your privacy settings",
          tags: ["privacy"],
        },
      ],
    },*/
    {
      header: {
        name: "Support",
      },
      values: [
        {
          name: "FAQ",
          description: "View our frequently asked questions",
          tags: [],
        },
        {
          name: "Contact",
          description: "Contact our support team!",
          tags: [],
        },
        // Add more entries as needed
        {
          name: "Live Chat",
          description: "Chat with our support in real-time",
          tags: ["chat", "support"],
        },
        {
          name: "Report a Bug",
          description: "Help us improve by reporting bugs",
          tags: ["bug", "feedback"],
        },
      ],
    },
    // Add more sections as needed
  ];
  
  const [visibleOptions,setVisibleOptions] = useState(options);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;

    if(value.trim().length === 0){
      setVisibleOptions(options);
      return;
    }

    const returnedItems: OptionItemType[] = visibleOptions.map((option) => {
      const foundOptions = option.values.filter((item) => {
        return item.name.toLowerCase().includes(value.trim().toLowerCase())
         ||item.description.toLowerCase().includes(value.trim().toLowerCase());
      });

      return {
        header: {
          name: option.header.name,
        },
        values: foundOptions,
      };

    });

    setVisibleOptions(returnedItems);
  };

  return (
    <div className='accountsettings'>
      <h1 className='mainhead text-center'>Account Settings</h1> 
      <input
        type="text"
        className='ml-8 w-11/12 mt-3 text-black font-bold rounded-lg h-10 text-xl'
        onChange={onChange}
        placeholder='Search...'
      />
      
      <div className="scroll-container" style={{ maxHeight: '400px', overflowY: 'auto' }}>
        {visibleOptions.map((option) => (
          <div key={option.header.name} className='mt-10 mb-2'>
            <h3 className='font-bold ml-9'>{option.header.name}</h3>
  
            <div>
              {option.values.map((value) => (
                <div key={value.name}>
                  <ul className='list-group border-2 ml-4 mr-4 mb-2 shadow-lg rounded-xl'>
                    <li className="flex account-li ml-5">
                      <div>
                        <Link to={`/user/${value.name.toLowerCase().replace(/\s+/g, '')}`} className='text-white'>
                          <h6 className=" font-bold">{value.name}</h6>
                          <p>{value.description}</p>
                        </Link>
                      </div>
                      <div className='ml-px'></div>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSettings;