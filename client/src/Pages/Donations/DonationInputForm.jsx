import React, { useState } from 'react';
//code
export default function DonationInputForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    address: '',
    donationAmount: '',
    donationFrequency: 'One-Time',
    isAnonymous: false,
    panCard: null,
    corporateCertificate: null,
    taxExemption: '',
    agreement: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      const file = e.target.files[0];
      // Validate file type and size
      if (file && (file.type === 'image/png' || file.type === 'image/jpeg') && file.size <= 1 * 1024 * 1024) {
        setFormData({ ...formData, [name]: file });
      } else {
        alert('Please upload a PNG or JPG file smaller than 1MB.');
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for registering as a donor!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        className="bg-white p-8 rounded-lg shadow-md max-w-5xl w-11/12"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Donor Registration Form</h1>

        {/* Personal / Organization Information */}
        <div className="flex items-center mb-4">
          <label className="w-1/3 text-sm font-semibold">Full Name / Organization Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-2/3 p-2 border rounded"
            required
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-1/3 text-sm font-semibold">Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className="w-2/3 p-2 border rounded"
            required
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-1/3 text-sm font-semibold">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-2/3 p-2 border rounded"
            required
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-1/3 text-sm font-semibold">Address (Optional)</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-2/3 p-2 border rounded"
          />
        </div>

        {/* Donation Preferences */}
        <div className="flex items-center mb-4">
          <label className="w-1/3 text-sm font-semibold">Donation Amount (₹)</label>
          <input
            type="number"
            name="donationAmount"
            value={formData.donationAmount}
            onChange={handleInputChange}
            className="w-2/3 p-2 border rounded"
            required
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-1/3 text-sm font-semibold">Frequency of Donation</label>
          <select
            name="donationFrequency"
            value={formData.donationFrequency}
            onChange={handleInputChange}
            className="w-2/3 p-2 border rounded"
          >
            <option value="One-Time">One-Time</option>
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Annually">Annually</option>
          </select>
        </div>
        <div className="flex items-center mb-4">
          <label className="w-1/3 text-sm font-semibold">
            <input
              type="checkbox"
              name="isAnonymous"
              checked={formData.isAnonymous}
              onChange={handleInputChange}
              className="mr-2"
            />
            Anonymous Donation
          </label>
        </div>

        {/* Verification */}
        <div className="flex items-center mb-4">
          <label className="w-1/3 text-sm font-semibold">PAN Card (PNG/JPG, ≤ 1MB)</label>
          <input
            type="file"
            name="panCard"
            accept=".png, .jpg, .jpeg"
            onChange={handleInputChange}
            className="w-2/3 p-2 border rounded bg-gray-100 cursor-pointer"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-1/3 text-sm font-semibold">
            Corporate Donation Certificate (PNG/JPG, ≤ 1MB)
          </label>
          <input
            type="file"
            name="corporateCertificate"
            accept=".png, .jpg, .jpeg"
            onChange={handleInputChange}
            className="w-2/3 p-2 border rounded bg-gray-100 cursor-pointer"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-1/3 text-sm font-semibold">Tax Exemption Receipt?</label>
          <div className="w-2/3 flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                name="taxExemption"
                value="Yes"
                checked={formData.taxExemption === 'Yes'}
                onChange={handleInputChange}
              />{' '}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="taxExemption"
                value="No"
                checked={formData.taxExemption === 'No'}
                onChange={handleInputChange}
              />{' '}
              No
            </label>
          </div>
        </div>

        {/* Consent & Agreement */}
        <div className="flex items-center mb-4">
          <label className="w-1/3 text-sm font-semibold">
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleInputChange}
              className="mr-2"
              required
            />
            Terms & Conditions
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
        >
          Continue to Payment
        </button>
      </form>
    </div>
  );
}
