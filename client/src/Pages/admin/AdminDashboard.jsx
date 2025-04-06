import React from "react";
import { FaUserTie, FaUsers, FaClipboardList, FaDollarSign } from "react-icons/fa";
import { Bar, Doughnut, Line, Radar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function AdminDashboard() {
    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Admin Dashboard</h2>

            {/* Stat Cards */}
            <div className="grid grid-cols-4 gap-6">
                <StatCard title="Total Counselors" value="15" icon={<FaUserTie />} color="text-blue-600" />
                <StatCard title="Total Students Applied" value="230" icon={<FaUsers />} color="text-blue-600" />
                <StatCard title="Pending Verifications" value="42" icon={<FaClipboardList />} color="text-yellow-600" />
                <StatCard title="Fund Balance" value="$124,500" icon={<FaDollarSign />} color="text-green-600" />
            </div>

            {/* Charts Section - Balanced Grid */}
            <div className="grid grid-cols-2 gap-10 mt-8">
                <ChartCard title="Fund Distribution Overview">
                    <Doughnut data={fundChartData} width={200} height={200} />
                </ChartCard>

                <ChartCard title="Student Applications Trend">
                    <Bar data={studentChartData} width={200} height={200} />
                </ChartCard>

                <ChartCard title="Verification Progress">
                    <Line data={verificationChartData} width={200} height={200} />
                </ChartCard>

                <ChartCard title="Application Distribution">
                    <Radar data={applicationChartData} width={200} height={200} />
                </ChartCard>
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

/** Reusable Chart Card Component */
const ChartCard = ({ title, children }) => (
    <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
        <h3 className="text-lg font-bold text-gray-700 mb-2">{title}</h3>
        {children}
    </div>
);

/** Updated Chart Data */
const fundChartData = {
    labels: ["High Need", "Mid Need", "Low Need", "Emergency Reserve"],
    datasets: [{
        data: [40, 30, 20, 10],
        backgroundColor: ["#1D4ED8", "#FBBF24", "#22C55E", "#E11D48"]
    }]
};

const studentChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
        label: "Student Applications",
        data: [20, 35, 50, 80, 100, 120],
        backgroundColor: "#60A5FA"
    }]
};

const verificationChartData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [{
        label: "Verification Progress",
        data: [10, 25, 40, 50],
        borderColor: "#FBBF24",
        backgroundColor: "rgba(251, 191, 36, 0.5)"
    }]
};

const applicationChartData = {
    labels: ["Engineering", "Medical", "Arts", "Commerce", "Science"],
    datasets: [{
        label: "Applications by Category",
        data: [50, 40, 30, 60, 70],
        borderColor: "#22C55E",
        backgroundColor: "rgba(34, 197, 94, 0.5)"
    }]
};
