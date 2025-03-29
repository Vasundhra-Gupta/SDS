import React from "react";

export default function DonationSuggest() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* Title and Introduction */}
            <h1 className="text-3xl font-bold text-center mb-6">
                Support Students, Transform Lives
            </h1>
            <p className="text-center text-lg mb-8">
                Choose how you want to donate: Sponsor an individual student or
                contribute to our general fund.
            </p>

            {/* Two Donation Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Individual Donation Card */}
                <div className="bg-white p-6 rounded-lg shadow text-center">
                    <h2 className="text-xl font-bold mb-4">
                        Donate to an Individual
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Select a student to directly support and make a
                        meaningful impact.
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                        View Students
                    </button>
                </div>

                {/* General Fund Card */}
                <div className="bg-white p-6 rounded-lg shadow text-center">
                    <h2 className="text-xl font-bold mb-4">
                        Donate to the General Fund
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Your contribution helps our entire community thrive.
                    </p>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                        Donate Now
                    </button>
                </div>
            </div>

            {/* Student Profiles Section */}
            
        </div>
    );
}
