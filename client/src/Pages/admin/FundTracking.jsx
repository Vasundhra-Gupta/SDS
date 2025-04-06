import React, { useState } from "react";

export default function FundTrackingHybrid() {
    const [students, setStudents] = useState([
        { id: 1, name: "Alice Johnson", rank: 1, needLevel: "High", donationAmount: 10000, status: "Pending" },
        { id: 2, name: "Bob Williams", rank: 2, needLevel: "Mid", donationAmount: 5000, status: "Pending" },
        { id: 3, name: "Charlie Brown", rank: 3, needLevel: "Low", donationAmount: 3000, status: "Pending" },
    ]);

    const [generalFundBalance, setGeneralFundBalance] = useState(500000);
    const [adminIDInput, setAdminIDInput] = useState("");
    const [showAdminInput, setShowAdminInput] = useState(false);
    const [distributionMessage, setDistributionMessage] = useState("");
    const [lastFundDate, setLastFundDate] = useState(null);

    const dummyAdminID = "Admin123";

    // Handle general fund distribution
    const handleFundDistribution = () => {
        if (adminIDInput === dummyAdminID) {
            const highNeed = 0.4 * generalFundBalance;
            const midNeed = 0.3 * generalFundBalance;
            const lowNeed = 0.2 * generalFundBalance;
            const emergencyReserve = 0.1 * generalFundBalance;

            setDistributionMessage(`✅ Funds Distributed!
                - High Need: $${highNeed.toLocaleString()}
                - Mid Need: $${midNeed.toLocaleString()}
                - Low Need: $${lowNeed.toLocaleString()}
                - Emergency Reserve: $${emergencyReserve.toLocaleString()}
            `);

            setGeneralFundBalance(emergencyReserve);
            setShowAdminInput(false);
            setLastFundDate(new Date()); // Save today's date
        } else {
            setDistributionMessage("❌ Invalid Admin ID! Action canceled.");
        }
    };

    // Function to calculate next fund distribution and days left
    const getNextFundDetails = () => {
        if (!lastFundDate) return { nextFundDate: "N/A", daysLeft: "N/A" };

        const nextFundDate = new Date(lastFundDate);
        nextFundDate.setMonth(nextFundDate.getMonth() + 4);

        const today = new Date();
        const daysLeft = Math.max(Math.ceil((nextFundDate - today) / (1000 * 60 * 60 * 24)), 0);

        return { nextFundDate: nextFundDate.toDateString(), daysLeft };
    };

    const { nextFundDate, daysLeft } = getNextFundDetails();

    // Handle individual fund approval
    const approveTransaction = (id) => {
        setStudents(students.map(student =>
            student.id === id ? { ...student, status: "Approved" } : student
        ));
    };

    // Generate a receipt for approved students
    const printReceipt = (student) => {
        const receiptDetails = `
        📄 Receipt for Donation Transfer:
        --------------------------------------
        Student Name: ${student.name}
        Rank: ${student.rank}
        Need Level: ${student.needLevel}
        Donation Amount: $${student.donationAmount.toLocaleString()}
        Status: ${student.status}
        --------------------------------------
        Thank you for your generosity!
        `;
        alert(receiptDetails);
    };

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Hybrid Fund Tracking</h2>

            {/* General Fund Section */}
            <div className="bg-white p-6 shadow-md rounded-lg mb-6">
                <h3 className="text-lg font-bold text-gray-700">General Fund Balance</h3>
                <p className="text-3xl font-bold text-green-600">${generalFundBalance.toLocaleString()}</p>
                <button
                    onClick={() => setShowAdminInput(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-600 mt-4">
                    Distribute General Funds
                </button>
            </div>

            {/* Admin ID Input Field */}
            {showAdminInput && (
                <div className="bg-white p-4 shadow-md rounded-lg mb-6">
                    <h3 className="text-lg font-bold text-gray-700">Enter Admin ID to Proceed</h3>
                    <input
                        type="text"
                        placeholder="Enter Admin ID"
                        value={adminIDInput}
                        onChange={(e) => setAdminIDInput(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg w-full mt-2"
                    />
                    <button
                        onClick={handleFundDistribution}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mt-4">
                        Confirm & Distribute
                    </button>
                </div>
            )}

            {/* Last Fund & Next Fund Details */}
            {lastFundDate && (
                <div className="bg-gray-100 p-4 shadow-md rounded-lg mb-6">
                    <h3 className="text-lg font-bold text-gray-700">Fund Distribution Status</h3>
                    <p>🗓 Last Fund Distributed: <strong>{lastFundDate.toDateString()}</strong></p>
                    <p>⏳ Next Fund Distribution: <strong>{nextFundDate}</strong></p>
                    <p>⌛ Days Left: <strong>{daysLeft} days</strong></p>
                </div>
            )}

            {/* Distribution Message */}
            {distributionMessage && (
                <div className="bg-yellow-200 p-4 rounded-lg shadow-md">
                    <p>{distributionMessage}</p>
                </div>
            )}

            {/* Individual Fund Transactions */}
            <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-lg font-bold text-gray-700 mb-4">Individual Fund Transactions</h3>
                <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="p-3">Name</th>
                            <th className="p-3">Rank</th>
                            <th className="p-3">Need Level</th>
                            <th className="p-3">Donation Amount</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.id} className="border-b hover:bg-gray-100">
                                <td className="p-3">{student.name}</td>
                                <td className="p-3">{student.rank}</td>
                                <td className="p-3">{student.needLevel}</td>
                                <td className="p-3">${student.donationAmount.toLocaleString()}</td>
                                <td className={`p-3 ${student.status === "Approved" ? "text-green-600" : "text-yellow-600"}`}>
                                    {student.status}
                                </td>
                                <td className="p-3 space-x-2">
                                    {student.status === "Pending" && (
                                        <button onClick={() => approveTransaction(student.id)} className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-600">
                                            Approve Transaction
                                        </button>
                                    )}
                                    {student.status === "Approved" && (
                                        <button onClick={() => printReceipt(student)} className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                                            Print e-Receipt
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
