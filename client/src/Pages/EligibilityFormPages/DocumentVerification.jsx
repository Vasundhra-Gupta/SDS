import React, { useState } from "react";

export default function DocumentVerification() {
  const [documents, setDocuments] = useState({
    aadhaarCard: null,
    admissionLetter: null,
    marksheet: null,
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setDocuments({ ...documents, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!documents.aadhaarCard || !documents.admissionLetter || !documents.marksheet) {
      alert("Please upload all required documents.");
      return;
    }
    console.log("Documents Uploaded:", documents);
    // Backend logic for submission goes here
  };

  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col items-center justify-start">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg mt-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">Verification Documents</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Aadhaar Card / Govt. ID */}
          <div>
            <label htmlFor="aadhaarCard" className="block text-sm font-medium text-gray-700">
              Aadhaar Card / Govt. ID
            </label>
            <input
              type="file"
              id="aadhaarCard"
              name="aadhaarCard"
              onChange={handleFileChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Institution Admission Letter / Fee Structure */}
          <div>
            <label htmlFor="admissionLetter" className="block text-sm font-medium text-gray-700">
              Institution Admission Letter / Fee Structure
            </label>
            <input
              type="file"
              id="admissionLetter"
              name="admissionLetter"
              onChange={handleFileChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Previous Year's Marksheet */}
          <div>
            <label htmlFor="marksheet" className="block text-sm font-medium text-gray-700">
              Previous Year's Marksheet (required)
            </label>
            <input
              type="file"
              id="marksheet"
              name="marksheet"
              onChange={handleFileChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Application */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}