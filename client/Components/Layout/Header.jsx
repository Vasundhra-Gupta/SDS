import React, { useState } from "react";
import { Menu, X, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
        <header className="bg-white h-[70px] shadow-sm sticky top-0 z-50 text-lg px-4">
            <div className="mx-auto flex items-center justify-between p-4">
                {/* Mobile Menu Button */}
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="lg:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>

                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-blue-600">
                    EduConnect
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex space-x-1 mx-4">
                    {tabs.map((tab, index) => (
                        <motion.div
                            key={tab.to}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * index }}
                        >
                            <Link
                                to={tab.to}
                                className="px-4 py-2 text-gray-600 hover:text-blue-600 font-medium rounded-lg transition-colors relative group"
                            >
                                {tab.name}
                                <motion.span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "100%" }}
                                />
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                {/* Auth Buttons */}
                <div className="flex items-center space-x-2">
                    {isLoggedIn ? (
                        <>
                            <Link
                                className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-all"
                                to="/logout"
                            >
                                Logout
                            </Link>
                            <UserCircle size={32} className="text-gray-700" />
                        </>
                    ) : (
                        <>
                            <Link
                                className="px-4 py-2 text-gray-700 font-medium rounded-lg bg-gray-200 hover:bg-gray-100 transition-all"
                                to="/login"
                            >
                                Login
                            </Link>

                            <Link
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-sm"
                                to="/register"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-white text-center border-t"
                >
                    {tabs.map((tab) => (
                        <motion.div
                            key={tab.to}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link
                                to={tab.to}
                                className="block py-3 px-6 text-gray-700 hover:bg-gray-100 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {tab.name}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </header>
    );
}
