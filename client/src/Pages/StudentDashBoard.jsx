import React from 'react'

export default function StudentDashboard() {
  // Dummy data
  const studentname = "John Doe";
  const studentcollege = "Springfield University";
  const studentnotifications = [
    {
      title: "New Assignment Added",
      details: "Your professor has uploaded a new assignment for Math 101.",
      timestamp: "10 minutes ago",
    },
    {
      title: "Library Overdue Notice",
      details: "You have overdue books. Please return them to the library.",
      timestamp: "1 day ago",
    },
  ];
  const studentdonations = [
    {
      donorName: "Jane Smith",
      amount: 500,
    },
    {
      donorName: "Anonymous",
      amount: 1000,
    },
  ];
  const studentbadges = [
    {
      title: "Top Scorer",
      description: "Awarded for achieving the highest marks in Math 101.",
    },
    {
      title: "Volunteer of the Month",
      description: "Recognized for your exceptional contribution to community service.",
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      {/* Welcome Message */}
      <div className="bg-blue-500 text-white p-4 rounded-lg mb-4">
        <h1 className="text-3xl font-bold">Welcome back, {studentname}!</h1>
        <p>College: {studentcollege}</p>
      </div>

      {/* Notifications */}
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h2 className="text-xl font-bold mb-2">Your Notifications</h2>
        <ul>
          {studentnotifications.map((notif, index) => (
            <li key={index} className="p-2 border-b last:border-b-0">
              <h3 className="font-semibold">{notif.title}</h3>
              <p>{notif.details}</p>
              <span className="text-gray-500 text-sm">{notif.timestamp}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Donations Received */}
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h2 className="text-xl font-bold mb-2">Donations You've Received</h2>
        <ul>
          {studentdonations.map((donation, index) => (
            <li key={index} className="p-2 border-b last:border-b-0">
              From: <span className="font-semibold">{donation.donorName}</span>: ₹{donation.amount}
            </li>
          ))}
        </ul>
      </div>

      {/* Badges */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2">Your Achievements</h2>
        <div className="flex space-x-4">
          {studentbadges.map((badge, index) => (
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