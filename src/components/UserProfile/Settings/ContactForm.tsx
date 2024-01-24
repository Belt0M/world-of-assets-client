// ContactForm.tsx
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Add logic to handle contact form submission, such as sending data to a server or API
    console.log('Contact message submitted:', { name, email, message });

    // Set state to indicate that the message has been sent
    setIsMessageSent(true);

    // You can also reset the form fields after submission if needed
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-form flex flex-col items-center justify-center">
      <h2 className="text-center mb-4 mt-4 text-4xl font-semibold text-white">Contact Us</h2>

      <form onSubmit={handleSubmit} className="w-3/4">
        
        <div className="mb-4 flex flex-col items-center ">
          <label htmlFor="message" className="block text-xl text-white mb-2 font-bold">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full text-black h-64"
            required
          />
        </div>

        <div className="flex items-center justify-center mb-4 font-bold ">
          <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded-md border border-white">
            Send Message
          </button>
        </div>
      </form>

      {/* Notification message */}
      {isMessageSent && (
        <div className="text-green-500 mt-2 font-bold">
          Your message has been sent. We'll get back to you soon. Thank you!
        </div>
      )}
    </div>
  );
};

export default ContactForm;
