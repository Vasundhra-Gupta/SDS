import React, { useState } from "react";

export default function Header() {
  const steps = [
    "Personal Information",
    "Aadhaar Verification",
    "Educational Details",
    "Document Verification",
    "Bank Details",
  ];

  const [completedSteps, setCompletedSteps] = useState([]);

  const markAsComplete = (stepIndex) => {
    if (!completedSteps.includes(stepIndex)) {
      setCompletedSteps([...completedSteps, stepIndex]);
    }
  };

  return (
    <div className="flex items-center justify-around mx-4 my-6">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          {/* Step Circle */}
          <div
            onClick={() => markAsComplete(index)}
            className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer ${
              completedSteps.includes(index) ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            {completedSteps.includes(index) ? "✔️" : index + 1}
          </div>

          {/* Step Label */}
          <div className="text-center mt-2">
            <p className="text-sm font-medium">{step}</p>
          </div>

          {/* Connecting Line */}
          {index < steps.length - 1 && (
            <div
              className={`h-1 w-12 ${
                completedSteps.includes(index + 1) ? "bg-green-500" : "bg-gray-300"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}