import React, { useState } from "react";

export default function CounsellorManagement() {
    const [counsellors, setCounsellors] = useState([]);
    const [formData, setFormData] = useState({ name: "", expertise: "", institution: "", type: "Government", status: "Pending", reason: "" });

    const [webinarData, setWebinarData] = useState({ counsellorId: "", webinarTopic: "", date: "", time: "" });

    // Handle Counsellor Form Changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Webinar Form Changes
    const handleWebinarChange = (e) => {
        setWebinarData({ ...webinarData, [e.target.name]: e.target.value });
    };

    // Add Counsellor
    const addCounsellor = () => {
        if (!formData.name || !formData.expertise || !formData.institution) {
            alert("Please fill all required fields!");
            return;
        }
        setCounsellors([...counsellors, { ...formData, id: Date.now() }]);
        setFormData({ name: "", expertise: "", institution: "", type: "Government", status: "Pending", reason: "" });
    };

    // Approve Counsellor
    const approveCounsellor = (id) => {
        setCounsellors(prev => prev.map(c =>
            c.id === id ? { ...c, status: "Approved", reason: "" } : c
        ));
    };

    // Reject Counsellor
    const rejectCounsellor = (id) => {
        const reason = prompt("Enter rejection reason:");
        if (!reason) return;
        setCounsellors(prev => prev.map(c =>
            c.id === id ? { ...c, status: "Rejected", reason } : c
        ));
    };

    // Assign Webinar
    const assignWebinar = () => {
        if (!webinarData.counsellorId || !webinarData.webinarTopic || !webinarData.date || !webinarData.time) {
            alert("Please fill all webinar details!");
            return;
        }
        setCounsellors(prev => prev.map(c =>
            c.id === parseInt(webinarData.counsellorId) ? { ...c, webinarTopic: webinarData.webinarTopic, date: webinarData.date, time: webinarData.time } : c
        ));
        setWebinarData({ counsellorId: "", webinarTopic: "", date: "", time: "" });
    };

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Counsellor Management</h2>

            {/* Counsellor Registration */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">Register Counsellor</h3>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-2 mb-2 border rounded" />
                <input type="text" name="expertise" placeholder="Expertise (Career, Motivation, etc.)" value={formData.expertise} onChange={handleChange} className="w-full p-2 mb-2 border rounded" />
                <input type="text" name="institution" placeholder="Institution" value={formData.institution} onChange={handleChange} className="w-full p-2 mb-2 border rounded" />
                <select name="type" value={formData.type} onChange={handleChange} className="w-full p-2 mb-2 border rounded">
                    <option value="Government">Government</option>
                    <option value="Private">Private</option>
                </select>
                <button onClick={addCounsellor} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Register Counsellor</button>
            </div>

            {/* Webinar Assignment */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">Assign Webinar</h3>
                <select name="counsellorId" value={webinarData.counsellorId} onChange={handleWebinarChange} className="w-full p-2 mb-2 border rounded">
                    <option value="">Select Approved Counsellor</option>
                    {counsellors.filter(c => c.status === "Approved").map(c => (
                        <option key={c.id} value={c.id}>{c.name} - {c.expertise}</option>
                    ))}
                </select>
                <input type="text" name="webinarTopic" placeholder="Webinar Topic" value={webinarData.webinarTopic} onChange={handleWebinarChange} className="w-full p-2 mb-2 border rounded" />
                <input type="date" name="date" value={webinarData.date} onChange={handleWebinarChange} className="w-full p-2 mb-2 border rounded" />
                <input type="time" name="time" value={webinarData.time} onChange={handleWebinarChange} className="w-full p-4 mb-4 border rounded" />
                <button onClick={assignWebinar} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Assign Webinar</button>
            </div>

            {/* Counsellor Lists */}
            <CounsellorSection title="Pending Counsellors" counsellors={counsellors.filter(c => c.status === "Pending")} onApprove={approveCounsellor} onReject={rejectCounsellor} />
            <CounsellorSection title="Approved Counsellors & Assigned Webinars" counsellors={counsellors.filter(c => c.status === "Approved")} showWebinarDetails />
            <CounsellorSection title="Rejected Counsellors" counsellors={counsellors.filter(c => c.status === "Rejected")} showReason />
        </div>
    );
}

// Counsellor Section Component
const CounsellorSection = ({ title, counsellors, onApprove, onReject, showReason, showWebinarDetails }) => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold mt-6">{title}</h2>
        <table className="w-full bg-white shadow-lg rounded-lg mt-4">
            <thead className="bg-blue-600 text-white">
                <tr>
                    <th className="p-3">Name</th>
                    <th className="p-3">Expertise</th>
                    <th className="p-3">Institution</th>
                    <th className="p-3">Type</th>
                    {showWebinarDetails && <><th className="p-3">Webinar Topic</th><th className="p-3">Date</th><th className="p-3">Time</th></>}
                    {showReason && <th className="p-3">Rejection Reason</th>}
                    {onApprove && <th className="p-3">Actions</th>}
                </tr>
            </thead>
            <tbody>
                {counsellors.map(counsellor => (
                    <tr key={counsellor.id} className="border-b hover:bg-gray-100">
                        <td className="p-3">{counsellor.name}</td>
                        <td className="p-3">{counsellor.expertise}</td>
                        <td className="p-3">{counsellor.institution}</td>
                        <td className="p-3">{counsellor.type}</td>
                        {showWebinarDetails && <><td className="p-3">{counsellor.webinarTopic || "Not Assigned"}</td><td className="p-3">{counsellor.date || "-"}</td><td className="p-3">{counsellor.time || "-"}</td></>}
                        {showReason && <td className="p-3">{counsellor.reason || "N/A"}</td>}
                        {onApprove && <td className="p-3"><button onClick={() => onApprove(counsellor.id)} className="bg-green-500 text-white rounded px-3 py-1">✔ Approve</button><button onClick={() => onReject(counsellor.id)} className="bg-red-500 text-white rounded px-3 py-1">❌ Reject</button></td>}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
