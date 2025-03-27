import React, { useState } from 'react';

export default function DonationBankDetails() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [formData, setFormData] = useState({
    upiId: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    cardNumber: '',
    cardholderName: '',
    expiryDate: '',
    cvv: '',
    qrCodePayment: false,
    taxExemption: '',
    consent: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for providing your payment details!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        className="bg-white p-8 rounded-lg shadow-md max-w-5xl w-11/12"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Payment Details</h1>

        {/* Preferred Payment Method */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Preferred Payment Method:</label>
          <div className="flex flex-wrap gap-4">
            {['UPI', 'Bank Transfer', 'Credit/Debit Card', 'QR Code', 'Net Banking'].map((method) => (
              <label key={method} className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={handlePaymentChange}
                  className="mr-2"
                />
                {method}
              </label>
            ))}
          </div>
        </div>

        {/* Dynamic Fields */}
        {paymentMethod === 'UPI' && (
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">UPI ID:</label>
            <input
              type="text"
              name="upiId"
              value={formData.upiId}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="e.g., yourname@upi"
              required
            />
          </div>
        )}

        {paymentMethod === 'Bank Transfer' && (
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Bank Name:</label>
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
            <label className="block text-sm font-semibold mb-2 mt-4">Account Number:</label>
            <input
              type="number"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
            <label className="block text-sm font-semibold mb-2 mt-4">IFSC Code:</label>
            <input
              type="text"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        )}

        {paymentMethod === 'Credit/Debit Card' && (
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Card Number:</label>
            <input
              type="number"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
            <label className="block text-sm font-semibold mb-2 mt-4">Cardholder Name:</label>
            <input
              type="text"
              name="cardholderName"
              value={formData.cardholderName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
            <label className="block text-sm font-semibold mb-2 mt-4">Expiry Date (MM/YY):</label>
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="MM/YY"
              required
            />
            <label className="block text-sm font-semibold mb-2 mt-4">CVV:</label>
            <input
              type="number"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        )}

        {paymentMethod === 'QR Code' && (
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Scan QR Code to Pay:</label>
            <div className="w-full flex items-center justify-center bg-gray-100 p-4 rounded">
              {/* Replace with actual QR code image */}
              <p className="text-gray-500">[QR Code Placeholder]</p>
            </div>
          </div>
        )}

        {paymentMethod === 'Net Banking' && (
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Bank Name:</label>
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
            <label className="block text-sm font-semibold mb-2 mt-4">Transaction Reference Number:</label>
            <input
              type="text"
              name="referenceNumber"
              value={formData.referenceNumber}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        )}

        {/* Tax Exemption */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">Do you want a tax exemption receipt?</label>
          <div className="flex items-center gap-6 mt-2">
            <label>
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

        {/* Consent and Agreements */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
              className="mr-2"
              required
            />
            I agree to the terms and conditions of SDS Foundation.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
        >
          Submit Payment Details
        </button>
      </form>
    </div>
  );
}
