import React, { useState } from "react";

const AadharVerification = () => {
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const validateAadhaarNumber = (number) => {
    const regex = /^[0-9]{12}$/; // Aadhaar number should be 12 digits
    return regex.test(number);
  };

  const handleSendOtp = () => {
    if (validateAadhaarNumber(aadhaarNumber)) {
      setError("");
      setOtpSent(true);
      console.log("OTP Sent to Aadhaar Number:", aadhaarNumber);
      // Add backend API call for OTP sending here
    } else {
      setError("Please enter a valid 12-digit Aadhaar number.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Aadhaar Verification</h2>
      <label htmlFor="aadhaarNumber" className="block text-sm font-medium text-gray-700 mb-2">
        Enter Aadhaar Number:
      </label>
      <input
        type="text"
        id="aadhaarNumber"
        value={aadhaarNumber}
        onChange={(e) => setAadhaarNumber(e.target.value)}
        maxLength={12}
        placeholder="Enter 12-digit Aadhaar number"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      <button
        onClick={handleSendOtp}
        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Send OTP
      </button>
      {otpSent && <p className="text-green-600 text-sm mt-4">OTP has been sent successfully!</p>}
    </div>
  );
};

export default AadharVerification;