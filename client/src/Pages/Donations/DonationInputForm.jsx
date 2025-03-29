import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function SimpleDonationForm() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);

  const presetAmounts = [500, 1000, 2000, 5000];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount('');
  };

  const handleCustomAmount = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setCustomAmount(value);
    setIsCustom(true);
    setSelectedAmount(null);
  };

  const getSelectedAmount = () => {
    return isCustom ? customAmount : selectedAmount;
  };

  const isAmountSelected = getSelectedAmount() && getSelectedAmount() > 0;

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="bg-white p-6 sm:p-8 rounded-xl shadow-sm w-full max-w-md"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Make a Donation
        </h1>

        <div className="space-y-6">
          {/* Preset Amounts */}
          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-3">Select Amount (₹)</h2>
            <div className="grid grid-cols-2 gap-3">
              {presetAmounts.map((amount) => (
                <motion.button
                  key={amount}
                  type="button"
                  className={`p-3 rounded-lg border-2 text-lg font-medium transition-colors ${
                    selectedAmount === amount && !isCustom
                      ? 'border-blue-500 bg-blue-50 text-blue-600'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                  onClick={() => handleAmountSelect(amount)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ₹{amount.toLocaleString()}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Custom Amount */}
          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-3">Or enter custom amount</h2>
            <motion.div 
              className={`relative border-2 rounded-lg overflow-hidden ${
                isCustom ? 'border-blue-500' : 'border-gray-200'
              }`}
              whileHover={{ borderColor: isCustom ? '#3b82f6' : '#9ca3af' }}
            >
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
              <input
                type="text"
                value={customAmount}
                onChange={handleCustomAmount}
                placeholder="Enter amount"
                className="w-full pl-8 p-3 outline-none"
              />
            </motion.div>
          </div>

          {/* Next Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              to="/donation-bankdetail" 
              state={{ amount: getSelectedAmount() }}
              className={`block text-center py-3 px-6 rounded-lg font-medium ${
                isAmountSelected
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isAmountSelected ? (
                <motion.span
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Save & Continue to Payment
                </motion.span>
              ) : (
                'Select an amount to continue'
              )}
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}