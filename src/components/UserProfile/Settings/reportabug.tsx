// BugReportForm.tsx
import React, { useState } from 'react';

const BugReportForm: React.FC = () => {
  const [bugDescription, setBugDescription] = useState('');
  const [reproSteps, setReproSteps] = useState('');
  const [isReportSubmitted, setIsReportSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Add logic to handle bug report submission, such as sending data to a server or API
    console.log('Bug report submitted:', { bugDescription, reproSteps });

    // Set state to indicate that the report has been submitted
    setIsReportSubmitted(true);

    // You can also reset the form fields after submission if needed
    setBugDescription('');
    setReproSteps('');
  };

  return (
    <div className="bug-report-form flex flex-col items-center justify-center">
      <h2 className="text-center mb-4 mt-4 text-4xl font-bold text-white">Report a Bug</h2>
        <div className='flex flex-col items-center justify-center border border-white rounded-md mt-8 w-3/4 p-4 mb-8'>

      <form onSubmit={handleSubmit} className="w-3/4">
        <div className="mb-4 flex flex-col items-center">
          <label htmlFor="bugDescription" className="block font-bold text-white mb-2 text-xl">
            Bug Description
          </label>
          <textarea
            id="bugDescription"
            name="bugDescription"
            value={bugDescription}
            onChange={(e) => setBugDescription(e.target.value)}
            rows={4}
            className="mt-1 p-2 border border-gray-300 rounded-md w-4/5 text-black h-40"
            required
          />
        </div>

        <div className="mb-4 flex flex-col items-center">
          <label htmlFor="reproSteps" className="block text-xl text-white mb-2 font-bold">
            Steps to Reproduce
          </label>
          <textarea
            id="reproSteps"
            name="reproSteps"
            value={reproSteps}
            onChange={(e) => setReproSteps(e.target.value)}
            rows={4}
            className="mt-1 p-2 border border-gray-300 rounded-md w-4/5 text-black h-40"
            required
          />
        </div>

        <div className="flex items-center justify-center font-bold">
          <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded-md border border-white">
            Submit Bug Report
          </button>
        </div>
      </form>

      {/* Notification message */}
      {isReportSubmitted && (
        <div className="text-green-500 mt-2 mb-4 font-bold">
          Bug report has been successfully submitted. Thank you!
        </div>
      )}
        </div>
    </div>
  );
};

export default BugReportForm;
