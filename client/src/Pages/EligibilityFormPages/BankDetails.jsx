import React, { useState } from "react";

export default function FinancialInformation() {
  const [formData, setFormData] = useState({
    familyIncome: "",
    incomeProof: null,
    reasonForAssistance: "",
    requiredAmount: "",
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Financial Information:", formData);
    // Add backend logic for submission here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Form Container */}
      <div
        className="w-full max-w-7xl bg-white p-8 rounded-lg shadow-lg overflow-y-auto"
        style={{ height: "calc(100vh - 8rem)" }} // Adjust height to fit between header and footer
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">Financial Information</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Annual Family Income */}
          <div>
            <label htmlFor="familyIncome" className="block text-sm font-medium text-gray-700">
              Annual Family Income
            </label>
            <input
              type="text"
              id="familyIncome"
              name="familyIncome"
              value={formData.familyIncome}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter annual family income"
              required
            />
          </div>

          {/* Income Proof */}
          <div>
            <label htmlFor="incomeProof" className="block text-sm font-medium text-gray-700">
              Income Proof (Upload File: Salary Slip / Income Certificate / Ration Card)
            </label>
            <input
              type="file"
              id="incomeProof"
              name="incomeProof"
              onChange={handleFileChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Reason for Assistance */}
          <div>
            <label htmlFor="reasonForAssistance" className="block text-sm font-medium text-gray-700">
              Reason for Assistance
            </label>
            <select
              id="reasonForAssistance"
              name="reasonForAssistance"
              value={formData.reasonForAssistance}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Select reason
              </option>
              <option value="Tuition Fees">Tuition Fees</option>
              <option value="Books">Books</option>
              <option value="Accommodation">Accommodation</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Required Amount */}
          <div>
            <label htmlFor="requiredAmount" className="block text-sm font-medium text-gray-700">
              Required Amount (₹)
            </label>
            <input
              type="text"
              id="requiredAmount"
              name="requiredAmount"
              value={formData.requiredAmount}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter required amount in ₹"
              required
            />
          </div>

          {/* Bank Account Details */}
          <div>
            <label htmlFor="accountHolderName" className="block text-sm font-medium text-gray-700">
              Account Holder Name
            </label>
            <input
              type="text"
              id="accountHolderName"
              name="accountHolderName"
              value={formData.accountHolderName}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter account holder name"
              required
            />
          </div>

          <div>
            <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
              Account Number
            </label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter account number"
              required
            />
          </div>

          <div>
            <label htmlFor="ifscCode" className="block text-sm font-medium text-gray-700">
              IFSC Code
            </label>
            <input
              type="text"
              id="ifscCode"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter IFSC Code"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Financial Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}