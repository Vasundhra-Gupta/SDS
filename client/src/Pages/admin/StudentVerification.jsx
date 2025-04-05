import React, { useState } from "react";

export default function StudentVerification() {
    const [students, setStudents] = useState([
        { id: 1, name: "Alice Johnson", status: "Pending", email: "alice@student.com" },
        { id: 2, name: "Bob Williams", status: "Pending", email: "bob@student.com" }
    ]);

    const updateStatus = (id, status) => {
        setStudents(students.map(student => student.id === id ? { ...student, status } : student));
    };

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Student Verification</h2>

            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                    <tr>
                        <th className="p-3">Student Name</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id} className="border-b hover:bg-gray-100">
                            <td className="p-3">{student.name}</td>
                            <td className="p-3">{student.email}</td>
                            <td className={`p-3 ${
                                student.status === "Verified" ? "text-green-600" :
                                student.status === "Rejected" ? "text-red-600" :
                                "text-yellow-600"
                            }`}>
                                {student.status}
                            </td>
                            <td className="p-3 space-x-2">
                                <button onClick={() => updateStatus(student.id, "Verified")} className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                                    ✔ Approve
                                </button>
                                <button onClick={() => updateStatus(student.id, "Rejected")} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                                    ❌ Reject
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}