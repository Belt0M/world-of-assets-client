import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Username: React.FC = () => {
  const navigate = useNavigate();

  // State for form inputs
  const [currentUsername, setCurrentUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [usernameOccupied, setUsernameOccupied] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setTimeout(() => {
      if (newUsername.toLowerCase() === 'idk') {
        setUsernameOccupied(true);
      } else {
        // Use navigate to /user/profile
        navigate('/user/profile');
      }
    }, 1000);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-center mb-4'>Change Username</h1>
        <div className='flex flex-col items-center justify-center border border-white rounded-md w-96 p-4'>

      <form onSubmit={handleSubmit} className="change-username-form mb-4">
        <div className="mb-4">
          <label htmlFor="currentUsername" className="block text-xl font-semibold text-white">
            Current Username
          </label>
          <input
            type="text"
            id="currentUsername"
            name="currentUsername"
            value={currentUsername}
            onChange={(e) => setCurrentUsername(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="newUsername" className="block text-xl font-semibold text-white">
            New Username
          </label>
          <input
            type="text"
            id="newUsername"
            name="newUsername"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md text-black"
            required
          />
        </div>

        <div className="flex items-center justify-center">
          <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded-md border border-white">
            Change Username
          </button>
        </div>
      </form>
        </div>

      {usernameOccupied && (
        <div className="text-red-500 mt-2 p-2 border border-red-500 rounded-md">
          Username is already occupied. Please choose a different username.
        </div>
      )}
    </div>
  );
};

export default Username;
