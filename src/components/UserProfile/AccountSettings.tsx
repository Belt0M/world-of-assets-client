import React, { useState } from 'react';

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
          description: "Your email address is your identity",
          tags: [
            "email",
            "username",
            "first name",
            "last name",
            "date of birth",
          ],
        },
        {
          name: "Email",
          description: "Change your email",
          tags:[]
        },
        {
          name: "Password",
          description: "Change your password",
          tags:[]
        },

      ]
    },
    {
      header: {
        name: "Settings",
      },
      values: []
    },
    {
      header: {
        name: "Support",
      },
      values: [
        {
          name: "Help",
          description: "Having trouble",
          tags: ["credit cards"],
        },
        {
          name: "FAQ",
          description: "View our frequently asked questions",
          tags: [],
        },
        {
          name: "Contact",
          description: "Contact our support team",
          tags: [],
        }
      ]
    },
    
  ]
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
      <input type="text"
       className='ml-8 w-11/12 mt-3 text-black font-bold rounded-lg h-10 text-xl'
       onChange={onChange}
        placeholder='Search...'></input>  
      
      <div>

      {visibleOptions.map(option => (
        <div key ={option.header.name} className='mt-5 mb-2'>
         <h3 className='font-bold ml-4'>{option.header.name}</h3>

          <div>
            {option.values.map((value) => (<div key = {value.name}>
              <ul className='list-group border-2 ml-4 mr-4 shadow-lg'>
              <li className="flex account-li ml-5">
                <div>
                  <h6 className=" font-bold">{value.name}</h6>
                <p>{value.description}</p></div>
                <div className='ml-px'></div>             
              </li>
              </ul>

            </div>))}
          </div>
        </div>))}

      </div>

    </div>
  );
};

export default AccountSettings;