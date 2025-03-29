import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const paymentMethods = [
  { id: 'upi', label: 'UPI', fields: ['upiId'] },
  { id: 'bank', label: 'Bank Transfer', fields: ['bankName', 'accountNumber', 'ifscCode'] },
  { id: 'card', label: 'Credit/Debit Card', fields: ['cardNumber', 'cardholderName', 'expiryDate', 'cvv'] },
  { id: 'qr', label: 'QR Code', fields: [] },
  { id: 'netbanking', label: 'Net Banking', fields: ['bankName', 'referenceNumber'] }
];

const fieldConfigs = {
  upiId: { label: 'UPI ID', type: 'text', placeholder: 'yourname@upi' },
  bankName: { label: 'Bank Name', type: 'text' },
  accountNumber: { label: 'Account Number', type: 'number' },
  ifscCode: { label: 'IFSC Code', type: 'text' },
  cardNumber: { label: 'Card Number', type: 'number' },
  cardholderName: { label: 'Cardholder Name', type: 'text' },
  expiryDate: { label: 'Expiry Date (MM/YY)', type: 'text', placeholder: 'MM/YY' },
  cvv: { label: 'CVV', type: 'number' },
  referenceNumber: { label: 'Transaction Reference', type: 'text' }
};

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
    referenceNumber: '',
    taxExemption: '',
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment details submitted successfully!');
  };

  const renderField = (fieldName) => {
    const config = fieldConfigs[fieldName];
    return (
      <motion.div 
        key={fieldName}
        className="mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <label className="block text-sm font-medium mb-1">{config.label}</label>
        <input
          type={config.type}
          name={fieldName}
          value={formData[fieldName]}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          placeholder={config.placeholder || ''}
          required
        />
      </motion.div>
    );
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.form
        className="bg-white p-6 rounded-xl shadow-sm w-full max-w-md"
        onSubmit={handleSubmit}
        initial={{ y: 20 }}
        animate={{ y: 0 }}
      >
        <motion.h1 
          className="text-2xl font-bold mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Payment Details
        </motion.h1>

        {/* Payment Method Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Payment Method</label>
          <div className="grid grid-cols-2 gap-2">
            {paymentMethods.map(method => (
              <motion.button
                key={method.id}
                type="button"
                className={`p-2 rounded-lg border text-sm ${
                  paymentMethod === method.id 
                    ? 'border-blue-500 bg-blue-50 text-blue-600' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => setPaymentMethod(method.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {method.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Dynamic Fields */}
        {paymentMethod && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {paymentMethod === 'qr' ? (
              <div className="mb-4 p-4 bg-gray-50 rounded-lg flex justify-center">
                <div className="text-gray-500 text-center">
                  <p className="mb-2">Scan QR Code to Pay</p>
                  <div className="w-32 h-32 bg-gray-200 flex items-center justify-center mx-auto">
                    [QR Code]
                  </div>
                </div>
              </div>
            ) : (
              paymentMethods.find(m => m.id === paymentMethod)?.fields.map(renderField)
            )}
          </motion.div>
        )}

        {/* Tax Exemption */}
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <label className="block text-sm font-medium mb-2">Tax Exemption Receipt?</label>
          <div className="flex gap-4">
            {['Yes', 'No'].map(option => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  name="taxExemption"
                  value={option}
                  checked={formData.taxExemption === option}
                  onChange={handleChange}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        </motion.div>

        {/* Consent */}
        <motion.div 
          className="mb-6 flex items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 mr-2"
            required
          />
          <label className="text-sm">
            I agree to the <Link to="/terms" className="text-blue-500 hover:underline">terms and conditions</Link>
          </label>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={!paymentMethod || !formData.consent}
        >
          <Link to={"/donation-payment"}>Submit Payment</Link>
        </motion.button>
      </motion.form>
    </motion.div>
  );
}