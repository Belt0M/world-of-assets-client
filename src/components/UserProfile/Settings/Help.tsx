import React from 'react';

const Help: React.FC = () => {
  return (
    <div>
      <h1>Help Page</h1>
      <p>
        Welcome to the help page! If you have any questions or need assistance,
        please refer to the information below.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <ul>
        <li>Q: How do I reset my password?</li>
        <li>Q: Can I customize my profile?</li>
        {/* Add more FAQs as needed */}
      </ul>

      <h2>Contact Support</h2>
      <p>
        If your question is not answered in the FAQs, feel free to contact our
        support team at support@example.com.
      </p>
    </div>
  );
};

export default Help;
