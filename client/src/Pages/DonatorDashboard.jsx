import React from 'react'

export default function DonatorDashboard() {
  // Dummy data
  const donorName = "Jane Smith";
  const totalDonated = 1500;
  const donationsMade = [
    {
      studentName: "John Doe",
      amount: 500,
      purpose: "Tuition Assistance",
      date: "March 1, 2025",
    },
    {
      studentName: "Alice Johnson",
      amount: 1000,
      purpose: "Book Supplies",
      date: "February 20, 2025",
    },
  ];
  const donorbadges = [
    {
      title: "Generous Contributor",
      description: "Awarded for supporting multiple students in need.",
    },
    {
      title: "Gold Donor",
      description: "Awarded for surpassing ₹1000 in total donations.",
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      {/* Welcome Message */}
      <div className="bg-green-500 text-white p-4 rounded-lg mb-4">
        <h1 className="text-3xl font-bold">Welcome back, {donorName}!</h1>
        <p>Total Donated: ₹{totalDonated}</p>
      </div>

      {/* Donations Made */}
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h2 className="text-xl font-bold mb-2">Your Donations</h2>
        <ul>
          {donationsMade.map((donation, index) => (
            <li key={index} className="p-2 border-b last:border-b-0">
              <p>
                To: <span className="font-semibold">{donation.studentName}</span>
              </p>
              <p>Amount: ₹{donation.amount}</p>
              <p>Purpose: {donation.purpose}</p>
              <span className="text-gray-500 text-sm">Date: {donation.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Badges */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2">Your Achievements</h2>
        <div className="flex space-x-4">
          {donorbadges.map((badge, index) => (
            <div
              key={index}
              className="p-4 bg-gray-200 rounded text-center shadow hover:bg-gray-300"
            >
              <p className="font-bold">{badge.title}</p>
              <p className="text-sm">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}