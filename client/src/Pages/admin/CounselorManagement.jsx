import React, { useState } from "react";

export default function CounselorManagement() {
    const [counselors, setCounselors] = useState([
        { id: 1, name: "Dr. John Doe", email: "john@school.com", assignedStudents: 30 },
        { id: 2, name: "Ms. Jane Smith", email: "jane@school.com", assignedStudents: 25 }
    ]);

    const [newCounselor, setNewCounselor] = useState({ name: "", email: "" });

    const addCounselor = () => {
        setCounselors([...counselors, { ...newCounselor, id: Date.now(), assignedStudents: 0 }]);
        setNewCounselor({ name: "", email: "" });
    };

    const deleteCounselor = (id) => {
        setCounselors(counselors.filter(c => c.id !== id));
    };

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Manage Counselors</h2>

            {/* Add New Counselor */}
            <div className="flex space-x-4 mb-6">
                <input
                    type="text"
                    placeholder="Counselor Name"
                    className="p-3 border rounded-lg"
                    value={newCounselor.name}
                    onChange={(e) => setNewCounselor({ ...newCounselor, name: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Counselor Email"
                    className="p-3 border rounded-lg"
                    value={newCounselor.email}
                    onChange={(e) => setNewCounselor({ ...newCounselor, email: e.target.value })}
                />
                <button onClick={addCounselor} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    Add Counselor
                </button>
            </div>

            {/* Counselors Table */}
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                    <tr>
                        <th className="p-3">Counselor Name</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Assigned Students</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {counselors.map(counselor => (
                        <tr key={counselor.id} className="border-b hover:bg-gray-100">
                            <td className="p-3">{counselor.name}</td>
                            <td className="p-3">{counselor.email}</td>
                            <td className="p-3">{counselor.assignedStudents}</td>
                            <td className="p-3">
                                <button onClick={() => deleteCounselor(counselor.id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                                    ❌ Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}