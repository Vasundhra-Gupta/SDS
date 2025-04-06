import React from "react";
import { FaUserTie, FaUsers, FaClipboardList, FaDollarSign } from "react-icons/fa"; // Font Awesome Icons

export default function AdminDashboard() {
    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Admin Dashboard</h2>

            <div className="grid grid-cols-4 gap-6">
                {/** Stat Cards */}
                <StatCard title="Total Counselors" value="15" icon={<FaUserTie />} color="text-blue-600" />
                <StatCard title="Total Students Applied" value="230" icon={<FaUsers />} color="text-blue-600" />
                <StatCard title="Pending Verifications" value="42" icon={<FaClipboardList />} color="text-yellow-600" />
                <StatCard title="Fund Balance" value="$124,500" icon={<FaDollarSign />} color="text-green-600" />
            </div>
        </div>
    );
}

/** Reusable Stat Card Component */
const StatCard = ({ title, value, icon, color }) => (
    <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition duration-300">
        <div className={`text-4xl ${color} mb-2`}>{icon}</div>
        <h3 className="text-lg font-bold text-gray-700">{title}</h3>
        <p className={`text-3xl font-bold ${color}`}>{value}</p>
    </div>
);
