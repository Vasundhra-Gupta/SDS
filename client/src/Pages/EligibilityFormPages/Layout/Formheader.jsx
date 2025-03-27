import React, { useState } from "react";

export default function() {
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
    <div className="flex justify-around text-center m-4">
      {steps.map((step, index) => (
        <div key={index} style={{ textAlign: "center" }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: completedSteps.includes(index) ? "green" : "#ccc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
            onClick={() => markAsComplete(index)}
          >
            {completedSteps.includes(index) ? "✔️" : index + 1}
          </div>
          <p>{step}</p>
        </div>
      ))}
    </div>
  );
};
