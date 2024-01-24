import React, { useState } from 'react';

const Email: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [notification, setNotification] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    if (isValid) {
      setIsEmailValid(true);
      setNotification(`A verification email will be sent to ${email}.`);
    } else {
      setIsEmailValid(false);
      setNotification('Please enter a valid email address.');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-center mt-2 mb-4'>Verify Email</h1>
        <div className='flex flex-col items-center justify-center border border-white rounded-md mt-8 w-72 p-4'>

      <form onSubmit={handleEmailSubmit} className="verify-email-form mb-4">
        <div className="mb-4 ">
          <label htmlFor="email" className="block text-xl font-semibold text-white">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="mt-1 p-2 border border-gray-300 rounded-md text-black"
            required
          />
        </div>

        <div className="flex items-center justify-center">
          <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded-md border border-white">
            Verify Email
          </button>
        </div>
      </form>

      {notification && (
        <div className={isEmailValid ? 'text-green-500 mt-2' : 'text-red-500 mt-2'}>
          {notification}
        </div>
      )}
        </div>
    </div>
  );
};

export default Email;
