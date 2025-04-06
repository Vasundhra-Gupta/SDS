import React, { useState, useEffect } from "react";

export default function Header({ currentPage, isSubmitted }) {
  const steps = [
    "Personal Information",
    "Aadhaar Verification",
    "Educational Details",
    "Document Verification",
    "Bank Details",
  ];

  const [completedSteps, setCompletedSteps] = useState([]);
  const [blinkingStep, setBlinkingStep] = useState(null);

  useEffect(() => {
    if (isSubmitted) {
      // Automatically mark the current step as complete and move to the next step
      if (!completedSteps.includes(currentPage - 1)) {
        setCompletedSteps([...completedSteps, currentPage - 1]);
      }
      setBlinkingStep(currentPage); // Trigger blinking for the next step
      const timer = setTimeout(() => setBlinkingStep(null), 1000); // Stop blinking after 1 second
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, currentPage]);

  return (
    <div className="flex items-center justify-between px-12 mx-4 my-6">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* Step Circle */}
          <div className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center cursor-default ${
                completedSteps.includes(index)
                  ? "bg-green-500"
                  : index === blinkingStep
                  ? "bg-green-300 animate-ping"
                  : "bg-gray-300"
              }`}
            >
              {completedSteps.includes(index) ? "✔️" : index + 1}
            </div>

            {/* Connecting Arrow */}
            {index < steps.length - 1 && (
              <div className="flex items-center mx-2">
                <svg
                  className={`w-6 h-6 ${
                    completedSteps.includes(index + 1)
                      ? "text-green-500"
                      : "text-gray-300"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            )}
          </div>

          {/* Step Label - Positioned Below */}
          <p
            className={`text-sm font-medium mt-2 text-center ${
              index === currentPage - 1 ? "text-blue-500" : ""
            }`}
          >
            {step}
          </p>
        </div>
      ))}
    </div>
  );
}