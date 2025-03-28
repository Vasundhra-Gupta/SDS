import React from 'react';
import { Link } from 'react-router-dom';

export default function SubmissionPage() {

  const handleContinue = () => {
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
      <div className="bg-white rounded-xl shadow-md p-10 max-w-md w-full text-center">
        {/* SVG Checkmark Circle */}
        <div className="flex justify-center mb-6">
          <svg 
            className="w-20 h-20 text-green-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" strokeWidth="2" className="text-green-100" />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M9 12l2 2 4-4" 
            />
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Submission Successful!
        </h2>
        
        <p className="text-gray-600 mb-8">
          Your process has been completed successfully. You can now proceed to the next step.
        </p>
        
        <button
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
          onClick={handleContinue}
        >
          <Link to={"/"}>Continue</Link>
        </button>
      </div>
    </div>
  );
}