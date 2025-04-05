import { LogOut } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function AdminHeader() {
    const isLoggedIn = true; // Replace with actual authentication check

    return (
        <header className="w-full bg-blue-700 text-white p-5 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Admin Panel</h2>

            {/* Navigation Links */}
            <nav className="space-x-4">
                <Link to="/admin/dashboard" className="hover:bg-blue-600 p-3 rounded">Dashboard</Link>
                <Link to="/admin/counselor" className="hover:bg-blue-600 p-3 rounded">Manage Counselors</Link>
                <Link to="/admin/student" className="hover:bg-blue-600 p-3 rounded">Student Verification</Link>
                <Link to="/admin/fund" className="hover:bg-blue-600 p-3 rounded">Fund Tracking</Link>
                <Link to="/admin/settings" className="hover:bg-blue-600 p-3 rounded">Settings</Link>
            </nav>

            {/* Conditional Login/Logout Button */}
            <div>
                {isLoggedIn ? (
                    <button className="bg-white text-blue-700 px-4 py-2 rounded font-semibold hover:bg-gray-200">
                        Logout
                    </button>
                ) : (
                    <button className="bg-white text-blue-700 px-4 py-2 rounded font-semibold hover:bg-gray-200">
                        Login
                    </button>
                )}
            </div>
        </header>
    );
}
