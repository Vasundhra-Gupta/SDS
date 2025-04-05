import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-blue-700 text-white p-5">
                <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
                <nav className="space-y-4">
                    <Link to="/admin/dashboard" className="block hover:bg-blue-600 p-3 rounded">
                        Dashboard
                    </Link>
                    <Link to="/admin/counselors" className="block hover:bg-blue-600 p-3 rounded">
                        Manage Counselors
                    </Link>
                    <Link to="/admin/students" className="block hover:bg-blue-600 p-3 rounded">
                        Student Verification
                    </Link>
                    <Link to="/admin/funds" className="block hover:bg-blue-600 p-3 rounded">
                        Fund Tracking
                    </Link>
                    <Link to="/admin/settings" className="block hover:bg-blue-600 p-3 rounded">
                        Settings
                    </Link>
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-6">
                <Outlet /> {/* Displays child components */}
            </main>
        </div>
    );
}