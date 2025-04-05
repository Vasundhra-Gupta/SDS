import React from "react";

export default function AdminDashboard() {
    return (
        <div className="min-h-screen p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Admin Dashboard</h2>

            <div className="grid grid-cols-4 gap-6">
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <h3 className="text-lg font-bold text-gray-700">Total Counselors</h3>
                    <p className="text-3xl font-bold text-blue-600">15</p>
                </div>
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <h3 className="text-lg font-bold text-gray-700">Total Students</h3>
                    <p className="text-3xl font-bold text-blue-600">230</p>
                </div>
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <h3 className="text-lg font-bold text-gray-700">Pending Verifications</h3>
                    <p className="text-3xl font-bold text-yellow-600">42</p>
                </div>
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <h3 className="text-lg font-bold text-gray-700">Fund Balance</h3>
                    <p className="text-3xl font-bold text-green-600">$124,500</p>
                </div>
            </div>
        </div>
    );
}