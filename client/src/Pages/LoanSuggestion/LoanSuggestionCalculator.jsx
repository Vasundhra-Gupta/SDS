import React, { useState } from 'react';

export default function LoanSuggestionCalculator  (){
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
    
    // Parse input values
    const income = parseFloat(formData.annualIncome) || 0;
    const tuition = parseFloat(formData.tuitionCost) || 0;
    const fees = parseFloat(formData.otherFees) || 0;
    const living = parseFloat(formData.livingCosts) || 0;
    const creditScore = parseInt(formData.creditScore) || 650;
    const term = parseInt(formData.loanTerm);

    // Calculate total need
    const totalNeed = tuition + fees + living;

    // Calculate federal loan eligibility (simplified)
    let federalAmount = 0;
    if (income < 30000) {
      federalAmount = Math.min(totalNeed, 7500);
    } else if (income < 60000) {
      federalAmount = Math.min(totalNeed, 5500);
    } else {
      federalAmount = Math.min(totalNeed, 3500);
    }

    // Calculate private loan amount
    const privateAmount = Math.max(0, totalNeed - federalAmount);

    // Calculate interest rates
    const federalRate = income < 50000 ? 3.73 : 4.99;
    let privateRate = 5.5 + (750 - Math.min(750, creditScore)) * 0.02;

    // Calculate monthly payments
    const calculateMonthlyPayment = (amount, rate, years) => {
      if (amount <= 0) return 0;
      const monthlyRate = rate / 100 / 12;
      const payments = years * 12;
      return amount * monthlyRate * Math.pow(1 + monthlyRate, payments) / 
             (Math.pow(1 + monthlyRate, payments) - 1);
    };

    const federalPayment = calculateMonthlyPayment(federalAmount, federalRate, term);
    const privatePayment = calculateMonthlyPayment(privateAmount, privateRate, term);

    // Calculate affordability
    const totalAnnualPayment = (federalPayment + privatePayment) * 12;
    const affordabilityPercent = income > 0 ? (totalAnnualPayment / income) * 100 : 0;

    // Determine grants
    const grants = [];
    if (income < 40000) grants.push('Pell Grant (up to Rs6,895)');
    if (income < 60000) grants.push('State Education Grant');
    if (income < 80000) grants.push('Institutional Need-Based Grants');

    setResults({
      federal: {
        amount: federalAmount,
        rate: federalRate,
        payment: federalPayment
      },
      private: {
        amount: privateAmount,
        rate: privateRate,
        payment: privatePayment
      },
      grants,
      affordability: affordabilityPercent
    });

    setShowResults(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">Student Loan Suggestion Calculator</h2>
      
      <form onSubmit={calculateLoans} className="space-y-4">
        <div>
          <label htmlFor="annualIncome" className="block text-sm font-medium text-gray-700">
            Household Annual Income
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">Rs</span>
            </div>
            <input
              type="number"
              name="annualIncome"
              id="annualIncome"
              value={formData.annualIncome}
              onChange={handleChange}
              className="block w-full pl-7 pr-12 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="45,000"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="tuitionCost" className="block text-sm font-medium text-gray-700">
            Annual Tuition Cost
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">Rs</span>
            </div>
            <input
              type="number"
              name="tuitionCost"
              id="tuitionCost"
              value={formData.tuitionCost}
              onChange={handleChange}
              className="block w-full pl-7 pr-12 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="15,000"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="otherFees" className="block text-sm font-medium text-gray-700">
            Other Annual Fees
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">Rs</span>
            </div>
            <input
              type="number"
              name="otherFees"
              id="otherFees"
              value={formData.otherFees}
              onChange={handleChange}
              className="block w-full pl-7 pr-12 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="2,000"
            />
          </div>
        </div>

        <div>
          <label htmlFor="livingCosts" className="block text-sm font-medium text-gray-700">
            Estimated Living Costs
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">Rs</span>
            </div>
            <input
              type="number"
              name="livingCosts"
              id="livingCosts"
              value={formData.livingCosts}
              onChange={handleChange}
              className="block w-full pl-7 pr-12 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="8,000"
            />
          </div>
        </div>

        <div>
          <label htmlFor="creditScore" className="block text-sm font-medium text-gray-700">
            Credit Score (optional)
          </label>
          <input
            type="number"
            name="creditScore"
            id="creditScore"
            min="300"
            max="850"
            value={formData.creditScore}
            onChange={handleChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="300-850"
          />
        </div>

        <div>
          <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700">
            Preferred Loan Term
          </label>
          <select
            name="loanTerm"
            id="loanTerm"
            value={formData.loanTerm}
            onChange={handleChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="5">5 years</option>
            <option value="10">10 years</option>
            <option value="15">15 years</option>
            <option value="20">20 years</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Calculate Loan Options
        </button>
      </form>

      {showResults && results && (
        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-semibold text-gray-800">Recommended Loan Options</h3>
          
          <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
            <h4 className="text-lg font-medium text-blue-800">Federal Student Loans</h4>
            <div className="mt-2 space-y-1 text-sm text-gray-700">
              <p>Estimated Eligibility: <span className="font-semibold">Rs{results.federal.amount.toFixed(2)}</span></p>
              <p>Interest Rate: <span className="font-semibold">{results.federal.rate.toFixed(2)}%</span></p>
              <p>Estimated Monthly Payment: <span className="font-semibold">Rs{results.federal.payment.toFixed(2)}</span></p>
            </div>
          </div>

          <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded-lg">
            <h4 className="text-lg font-medium text-purple-800">Private Student Loans</h4>
            <div className="mt-2 space-y-1 text-sm text-gray-700">
              <p>Recommended Amount: <span className="font-semibold">Rs{results.private.amount.toFixed(2)}</span></p>
              <p>Estimated Interest Rate: <span className="font-semibold">{results.private.rate.toFixed(2)}%</span></p>
              <p>Estimated Monthly Payment: <span className="font-semibold">Rs{results.private.payment.toFixed(2)}</span></p>
            </div>
          </div>

          {results.grants.length > 0 && (
            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
              <h4 className="text-lg font-medium text-green-800">Grants & Scholarships</h4>
              <p className="mt-2 text-sm text-gray-700">Based on your income, you may qualify for:</p>
              <ul className="mt-1 text-sm text-gray-700 list-disc list-inside space-y-1">
                {results.grants.map((grant, index) => (
                  <li key={index}>{grant}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="text-lg font-medium text-gray-800">Affordability Rating</h4>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3 mb-2">
              <div 
                className="bg-indigo-600 h-2.5 rounded-full" 
                style={{ width: `Rs{Math.min(100, results.affordability)}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-700">
              Based on your income, the recommended loans are{' '}
              <span className="font-semibold text-indigo-600">
                {results.affordability.toFixed(1)}%
              </span>{' '}
              of your annual income.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

