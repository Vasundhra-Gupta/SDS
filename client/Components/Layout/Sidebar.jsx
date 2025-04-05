import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { X, User, LifeBuoy, Settings } from "lucide-react";

export default function Sidebar({ onClose }) {
    const exploreTabs = [
        { to: "/about", name: "About" },
        { to: "/resource", name: "Resources" },
        { to: "/dropout", name: "Dropout Guidance" },
    ];

    const serviceTabs = [
        { to: "/loans", name: "Loans" },
        { to: "/scholarships", name: "Scholarships" },
        { to: "/counsellor-home", name: "Counsellors" },
    ];

    const supportTabs = [
        { to: "/contact", name: "Contact" },
        { to: "/support", name: "Support" },
    ];

    return (
        <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 p-6 rounded-r-2xl flex flex-col justify-between"
        >
            {/* Header Section */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-blue-600">EduSupport</h2>
                    <button
                        className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
                        onClick={onClose}
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* User / Logo Area */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                        <User size={20} />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Welcome back!</p>
                        <p className="text-xs text-gray-500">Let’s help you succeed 📘</p>
                    </div>
                </div>

                {/* Navigation Sections */}
                <div className="space-y-6">
                    {/* Explore Section */}
                    <div>
                        <p className="text-xs text-gray-500 mb-2 uppercase">Explore</p>
                        <div className="space-y-2">
                            {exploreTabs.map((tab) => (
                                <Link
                                    key={tab.to}
                                    to={tab.to}
                                    className="block py-2 px-4 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-all font-medium"
                                    onClick={onClose}
                                >
                                    {tab.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services Section */}
                    <div>
                        <p className="text-xs text-gray-500 mb-2 uppercase">Services</p>
                        <div className="space-y-2">
                            {serviceTabs.map((tab) => (
                                <Link
                                    key={tab.to}
                                    to={tab.to}
                                    className="block py-2 px-4 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-all font-medium"
                                    onClick={onClose}
                                >
                                    {tab.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Support Section */}
                    <div>
                        <p className="text-xs text-gray-500 mb-2 uppercase">Support</p>
                        <div className="space-y-2">
                            {supportTabs.map((tab) => (
                                <Link
                                    key={tab.to}
                                    to={tab.to}
                                    className="block py-2 px-4 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-all font-medium"
                                    onClick={onClose}
                                >
                                    {tab.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="pt-6 border-t border-gray-200 space-y-2 text-sm text-gray-600">
                <Link
                    to="/help"
                    className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                    onClick={onClose}
                >
                    <LifeBuoy size={16} /> Help Center
                </Link>
                <Link
                    to="/settings"
                    className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                    onClick={onClose}
                >
                    <Settings size={16} /> Settings
                </Link>
            </div>
        </motion.div>
    );
}
