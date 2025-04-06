import { LogOut } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function AdminHeader() {
    
    return (
        <header className="w-full bg-gray-100 text-gray-900 p-5 flex justify-between items-center shadow-md">
            <h2 className="text-2xl font-bold">Admin Panel</h2>

            {/* Navigation Links */}
            <nav className="space-x-4">
                <Link to="/admin/" className="hover:bg-gray-200 p-3 rounded transition">Dashboard</Link>
                <Link to="/admin/counselor" className="hover:bg-gray-200 p-3 rounded transition">Manage Counselors</Link>
                <Link to="/admin/student" className="hover:bg-gray-200 p-3 rounded transition">Student Verification</Link>
                <Link to="/admin/fund" className="hover:bg-gray-200 p-3 rounded transition">Fund Tracking</Link>
                <Link to="/admin/settings" className="hover:bg-gray-200 p-3 rounded transition">Settings</Link>
            </nav>

            
        </header>
    );
}
