import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoanSuggestionCalculator() {
  const [formData, setFormData] = useState({
    annualIncome: '',
    tuitionCost: '',
    otherFees: '',
    livingCosts: '',
    creditScore: '',
    loanTerm: '10'
  });

  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateLoans = (e) => {
    e.preventDefault();
    const income = parseFloat(formData.annualIncome) || 0;
    const tuition = parseFloat(formData.tuitionCost) || 0;
    const fees = parseFloat(formData.otherFees) || 0;
    const living = parseFloat(formData.livingCosts) || 0;
    const creditScore = parseInt(formData.creditScore) || 650;
    const term = parseInt(formData.loanTerm);

    const totalNeed = tuition + fees + living;

    let federalAmount = 0;
    if (income < 30000) federalAmount = Math.min(totalNeed, 7500);
    else if (income < 60000) federalAmount = Math.min(totalNeed, 5500);
    else federalAmount = Math.min(totalNeed, 3500);

    const privateAmount = Math.max(0, totalNeed - federalAmount);

    const federalRate = income < 50000 ? 3.73 : 4.99;
    let privateRate = 5.5 + (750 - Math.min(750, creditScore)) * 0.02;

    const calculateMonthlyPayment = (amount, rate, years) => {
      if (amount <= 0) return 0;
      const monthlyRate = rate / 100 / 12;
      const payments = years * 12;
      return amount * monthlyRate * Math.pow(1 + monthlyRate, payments) /
        (Math.pow(1 + monthlyRate, payments) - 1);
    };

    const federalPayment = calculateMonthlyPayment(federalAmount, federalRate, term);
    const privatePayment = calculateMonthlyPayment(privateAmount, privateRate, term);
    const totalAnnualPayment = (federalPayment + privatePayment) * 12;
    const affordabilityPercent = income > 0 ? (totalAnnualPayment / income) * 100 : 0;

    const grants = [];
    if (income < 40000) grants.push('Pell Grant (up to ₹6,895)');
    if (income < 60000) grants.push('State Education Grant');
    if (income < 80000) grants.push('Institutional Need-Based Grants');

    setResults({
      federal: { amount: federalAmount, rate: federalRate, payment: federalPayment },
      private: { amount: privateAmount, rate: privateRate, payment: privatePayment },
      grants,
      affordability: affordabilityPercent
    });

    setShowResults(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-2xl"
    >
      <h2 className="text-3xl font-extrabold text-indigo-700 mb-6 text-center">📊 Indian Education Loan Planner</h2>

      <form onSubmit={calculateLoans} className="space-y-4">
        {['annualIncome', 'tuitionCost', 'otherFees', 'livingCosts', 'creditScore'].map(field => (
          <motion.input
            key={field}
            type="number"
            name={field}
            placeholder={field
              .replace(/([A-Z])/g, ' $1')
              .replace(/^./, str => str.toUpperCase()) + ' (₹)'
            }
            value={formData[field]}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        ))}

        <select
          name="loanTerm"
          value={formData.loanTerm}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="5">5 Years</option>
          <option value="10">10 Years</option>
          <option value="15">15 Years</option>
        </select>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Calculate Loan Options
        </motion.button>
      </form>

      <AnimatePresence>
        {showResults && results && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 space-y-6"
          >
            <h3 className="text-xl font-bold text-gray-800">🎯 Your Loan Summary</h3>
            <div className="space-y-2 text-gray-700 text-base">
              <p><strong>Federal Loan:</strong> ₹{results.federal.amount.toLocaleString()} at {results.federal.rate}% – Monthly: ₹{results.federal.payment.toFixed(2)}</p>
              <p><strong>Private Loan:</strong> ₹{results.private.amount.toLocaleString()} at {results.private.rate.toFixed(2)}% – Monthly: ₹{results.private.payment.toFixed(2)}</p>
              <p><strong>Affordability:</strong> {results.affordability.toFixed(2)}% of your income</p>
              <p><strong>Eligible Grants:</strong> {results.grants.length ? results.grants.join(', ') : 'None'}</p>
            </div>

            <div className="mt-8 space-y-4">
              <h4 className="text-lg font-semibold text-indigo-600">🏦 Suggested Indian Education Loan Options</h4>
              {loanData.map((loan, i) => (
                <LoanCard key={i} {...loan} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const loanData = [
  {
    name: "Vidya Lakshmi Portal",
    description: "Apply to multiple Indian banks for student loans with one application.",
    link: "https://www.vidyalakshmi.co.in/",
    color: "blue"
  },
  {
    name: "SBI Student Loan",
    description: "Loans up to ₹1.5 Cr with flexible repayment & no margin up to ₹7.5L.",
    link: "https://sbi.co.in/web/personal-banking/loans/education-loans",
    color: "green"
  },
  {
    name: "PNB Udaan / Saraswati",
    description: "For Indian & overseas education with attractive interest rates.",
    link: "https://www.pnbindia.in/education-loan.html",
    color: "purple"
  },
  {
    name: "Canara Vidya Loan",
    description: "For Indian students in technical/professional courses.",
    link: "https://canarabank.com/User_page.aspx?othlink=155",
    color: "yellow"
  },
  {
    name: "Axis Bank Education Loan",
    description: "Quick processing & tax benefits under 80E for Indian students.",
    link: "https://www.axisbank.com/retail/loans/education-loan/features-benefits",
    color: "red"
  }
];

function LoanCard({ name, description, link, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`p-4 bg-${color}-50 border-l-4 border-${color}-500 rounded-xl shadow`}
    >
      <h5 className="text-lg font-semibold">{name}</h5>
      <p className="text-sm text-gray-700 mt-1">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-indigo-600 mt-2 hover:underline font-medium text-sm"
      >
        Visit Official Site →
      </a>
    </motion.div>
  );
}
