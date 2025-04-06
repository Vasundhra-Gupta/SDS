import React, { useState, useEffect } from "react";
import { Bar, Doughnut, Pie, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function PublicDonationReport() {
    const [donors, setDonors] = useState([]);

    // Mock Indian Actor and Politician Donor Data with AI-Generated Images
    useEffect(() => {
        setDonors([
            { id: 1, name: "Amitabh Bachchan", amount: 1000000, location: "Mumbai", message: "Supporting education for all!", image: "https://api.multiavatar.com/AmitabhBachchan.png" },
            { id: 2, name: "Hema Malini", amount: 800000, location: "Mathura", message: "Empowering women and children!", image: "https://api.multiavatar.com/HemaMalini.png" },
            { id: 3, name: "Rajinikanth", amount: 1200000, location: "Chennai", message: "Bringing hope to underprivileged families!", image: "https://api.multiavatar.com/Rajinikanth.png" },
            { id: 4, name: "Smriti Irani", amount: 700000, location: "Amethi", message: "Ensuring healthcare for rural areas!", image: "https://api.multiavatar.com/SmritiIrani.png" },
            { id: 5, name: "Shatrughan Sinha", amount: 900000, location: "Patna", message: "Providing shelter to those in need!", image: "https://api.multiavatar.com/ShatrughanSinha.png" },
            { id: 6, name: "Priyanka Chopra", amount: 1100000, location: "Mumbai", message: "Promoting skill development programs!", image: "https://api.multiavatar.com/PriyankaChopra.png" },
        ]);
    }, []);

    // Total donation amount
    const totalDonations = donors.reduce((sum, donor) => sum + donor.amount, 0);

    // Chart Data
    const donationChartData = {
        labels: donors.map(d => d.name),
        datasets: [{
            label: "Donation Amount (₹)",
            data: donors.map(d => d.amount),
            backgroundColor: ["#60A5FA", "#22C55E", "#FBBF24", "#E11D48", "#9333EA", "#EF4444"]
        }]
    };

    const donationTrendsData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "Monthly Donations (₹)",
            data: [500000, 800000, 1200000, 700000, 900000, 1100000],
            borderColor: "#E11D48",
            backgroundColor: "rgba(225, 29, 72, 0.5)",
            tension: 0.3
        }]
    };

    const donationCategoryData = {
        labels: ["Education", "Healthcare", "Shelter", "Skill Development"],
        datasets: [{
            data: [40, 30, 20, 10],
            backgroundColor: ["#60A5FA", "#22C55E", "#FBBF24", "#E11D48"]
        }]
    };

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            {/* Appreciation Banner */}
            <div className="bg-green-600 text-white p-4 text-center rounded-lg mb-6 shadow-md">
                <h2 className="text-2xl font-bold">Your Contributions Make a Huge Difference! ❤️</h2>
                <p className="mt-2 text-lg">Because of your generosity, countless lives are improving every day. We are truly grateful!</p>
            </div>

            <h2 className="text-3xl font-bold text-blue-600 mb-6">Public Donation Report</h2>

            {/* Total Donations Section */}
            <div className="bg-white p-6 shadow-md rounded-lg mb-6">
                <h3 className="text-lg font-bold text-gray-700">Total Donations Collected</h3>
                <p className="text-3xl font-bold text-green-600">₹{totalDonations.toLocaleString()}</p>
            </div>

            {/* Donor Appreciation Cards */}
            <div className="grid grid-cols-3 gap-6 mb-8">
                {donors.map(donor => (
                    <DonorCard key={donor.id} donor={donor} />
                ))}
            </div>

            {/* Graphs Section */}
            <div className="grid grid-cols-2 gap-6">
                <ChartCard title="Donation Breakdown">
                    <Doughnut data={donationChartData} width={200} height={200} />
                </ChartCard>

                <ChartCard title="Donation Trends Over Months">
                    <Line data={donationTrendsData} width={200} height={200} />
                </ChartCard>

                <ChartCard title="Donations by Category">
                    <Pie data={donationCategoryData} width={200} height={200} />
                </ChartCard>
            </div>

            {/* Final Appreciation Message */}
            <div className="bg-yellow-100 p-4 mt-6 rounded-lg text-center shadow-md">
                <h2 className="text-xl font-bold text-gray-700">Your Support Helps Thousands!</h2>
                <p className="text-gray-600 mt-2">Through your valuable donations, education, food, and healthcare reach those who need it most. We deeply appreciate your kindness! 🚀</p>
            </div>
        </div>
    );
}

/** Reusable Chart Card Component */
const ChartCard = ({ title, children }) => (
    <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
        <h3 className="text-lg font-bold text-gray-700 mb-2">{title}</h3>
        {children}
    </div>
);

/** Enhanced Donor Card Component */
const DonorCard = ({ donor }) => (
    <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center text-center hover:shadow-xl transition duration-300">
        <img src={donor.image} alt={donor.name} className="w-20 h-20 rounded-full mb-2 shadow-sm" />
        <h3 className="text-lg font-bold text-gray-700">{donor.name}</h3>
        <p className="text-blue-600 font-semibold">₹{donor.amount.toLocaleString()}</p>
        <p className="text-gray-600">{donor.location}</p>
        <p className="text-gray-500 italic mt-2">"{donor.message}"</p>
    </div>
);
