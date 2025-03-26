import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    const handleRequestSupport = () => {
        navigate("/request-support");
    };

    return (
        <div className="px-4 py-12 text-center">
            <h1 className="text-5xl font-bold text-gray-900">
                Empowering Education Through Smart Donations
            </h1>
            <div className="max-w-lg mx-auto mt-6">
                <p className="text-lg text-gray-600 mb-8">
                    Connecting students in need with generous donors through
                    AI-powered matching. Make a difference in someone's
                    educational journey today.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700">
                        Donate Now
                    </button>
                    <button
                        className="border border-gray-400 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-100"
                        onClick={handleRequestSupport}
                    >
                        Request Support
                    </button>
                </div>
            </div>
        </div>
    );
}
