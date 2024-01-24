// ChangeEmail.tsx
import React, { useState } from 'react';

const ChangeEmail: React.FC = () => {
  const [newEmail, setNewEmail] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Add logic to handle the change email request, such as sending data to a server or API
    console.log('Changing email to:', newEmail);

    // You can also reset the form field after submission if needed
    setNewEmail('');
  };

  return (
    <div className="change-email-container flex flex-col items-center justify-center">
      <h2 className="text-center mb-4 mt-4 text-4xl font-semibold text-white">Change Email</h2>

      <div className='flex flex-col items-center justify-center border-2 border-white rounded-lg p-4'>
        <p className="text-center text-lg text-white mb-4">
          To change your email, please enter the new email address below:
        </p>

        <form onSubmit={handleSubmit} className="w-3/4">
          <div className="mb-4 flex flex-col items-center">
            <label htmlFor="newEmail" className="block text-xl font-medium text-white mb-2">
              New Email
            </label>
            <input
              type="email"
              id="newEmail"
              name="newEmail"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full text-black"
              required
            />
          </div>

          <div className="flex items-center justify-center mb-4">
            <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded-md">
              Change Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeEmail;
