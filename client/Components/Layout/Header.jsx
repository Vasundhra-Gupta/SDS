import React, { useState } from "react";
import { Menu, X, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const isLoggedIn = false; // Change based on authentication state

    const tabs = [
        { to: "/", name: "Home" },
        { to: "/about", name: "About" },
        { to: "/contact", name: "Contact" },
        { to: "/support", name: "Support" },
    ];

    return (
        <header className="bg-[#005f99] shadow-lg ">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Mobile Menu Button (Left-most in Mobile View) */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>

                {/* Logo (Centered in Mobile, Left in Desktop) */}
                <h1 className="text-3xl font-extrabold text-white md:ml-4">
                    SDS
                </h1>

                {/* Navigation Links (Centered in Desktop) */}
                <nav className="hidden md:flex space-x-8 mx-auto">
                    {tabs.map((tab) => (
                        <Link
                            key={tab.to}
                            to={tab.to}
                            className="text-lg font-medium text-white hover:text-gray-300 transition duration-300"
                        >
                            {tab.name}
                        </Link>
                    ))}
                </nav>

                {/* Right Side - Login/Signup & Avatar (ALWAYS VISIBLE) */}
                <div className="flex items-center space-x-4">
                    {isLoggedIn ? (
                        <>
                            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                                Logout
                            </button>
                            <UserCircle size={36} className="text-white" />
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="px-4 py-2 bg-gray-200 text-blue-600 rounded-lg hover:bg-gray-300 transition"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {/* Mobile Menu (Dropdown) */}
            {isOpen && (
                <div className="md:hidden bg-[#007acc] text-center py-3 flex flex-col space-y-2">
                    {tabs.map((tab) => (
                        <Link
                            key={tab.to}
                            to={tab.to}
                            className="block py-3 text-lg text-white hover:bg-blue-800 transition duration-300"
                        >
                            {tab.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
