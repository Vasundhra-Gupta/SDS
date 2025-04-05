import React, { useState } from "react";

const allStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const institutions = [
  { name: "Delhi Public School", type: "Private", state: "Delhi" },
  { name: "Kendriya Vidyalaya", type: "Government", state: "All India" },
  { name: "IIT Bombay", type: "Government", state: "Maharashtra" },
  { name: "St. Xavier's College", type: "Private", state: "West Bengal" },
  { name: "Christ University", type: "Private", state: "Karnataka" },
];

export default function StudentVerification() {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice Johnson", status: "Pending", email: "alice@student.com", state: "Maharashtra", institution: "IIT Bombay", type: "Government" },
    { id: 2, name: "Bob Williams", status: "Pending", email: "bob@student.com", state: "Delhi", institution: "Delhi Public School", type: "Private" }
  ]);

  const [filter, setFilter] = useState({ state: "", type: "" });
  const [rejectForm, setRejectForm] = useState(null);
  const [rejectionReason, setRejectionReason] = useState("");

  // Approve Student
  const verifyStudent = (id) => {
    setStudents(prev => prev.map(student =>
      student.id === id ? { ...student, status: "Approved" } : student
    ));
  };

  // Reject Student & Open Form
  const rejectStudent = (id) => {
    setRejectForm(students.find((student) => student.id === id));
    setRejectionReason("");
  };

  // Submit Rejection Reason
  const submitRejection = () => {
    if (!rejectForm) return;

    setStudents(prev => prev.map(student =>
      student.id === rejectForm.id
        ? { ...student, status: "Rejected", reason: rejectionReason }
        : student
    ));

    setRejectForm(null);
    setRejectionReason("");
  };

  // Filter Students
  const filteredStudents = students.filter(student =>
    (!filter.state || student.state === filter.state) &&
    (!filter.type || student.type === filter.type)
  );

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Student Verification</h2>

      {/* Filters */}
      <div className="flex space-x-4 mb-6">
        <select onChange={(e) => setFilter({ ...filter, state: e.target.value })} className="p-2 border rounded">
          <option value="">All States</option>
          {allStates.map((state) => <option key={state} value={state}>{state}</option>)}
        </select>

        <select onChange={(e) => setFilter({ ...filter, type: e.target.value })} className="p-2 border rounded">
          <option value="">All Types</option>
          <option value="Government">Government</option>
          <option value="Private">Private</option>
        </select>
      </div>

      {/* Pending Students */}
      <StudentSection title="Pending Students" students={filteredStudents.filter(s => s.status === "Pending")} onVerify={verifyStudent} onReject={rejectStudent} />

      {/* Approved Students */}
      <StudentSection title="Approved Students" students={filteredStudents.filter(s => s.status === "Approved")} />

      {/* Rejected Students (with reason) */}
      <StudentSection title="Rejected Students" students={filteredStudents.filter(s => s.status === "Rejected")} showReason />

      {/* Rejection Form Popup */}
      {rejectForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Enter Rejection Reason</h2>
            <textarea
              className="w-full p-2 border rounded mb-4"
              placeholder="Enter reason..."
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
            />
            <div className="flex justify-end space-x-2">
              <button onClick={() => setRejectForm(null)} className="px-3 py-1 bg-gray-300 text-black rounded hover:bg-gray-400">Cancel</button>
              <button onClick={submitRejection} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Student Section Component
const StudentSection = ({ title, students, onVerify, onReject, showReason }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mt-6">{title}</h2>
    <table className="w-full bg-white shadow-lg rounded-lg mt-4">
      <thead className="bg-blue-600 text-white">
        <tr>
          <th className="p-3">Name</th>
          <th className="p-3">Email</th>
          <th className="p-3">Institution</th>
          <th className="p-3">State</th>
          <th className="p-3">Type</th>
          {showReason && <th className="p-3">Rejection Reason</th>}
          {onVerify && <th className="p-3">Actions</th>}
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.id} className="border-b hover:bg-gray-100">
            <td className="p-3">{student.name}</td>
            <td className="p-3">{student.email}</td>
            <td className="p-3">{student.institution}</td>
            <td className="p-3">{student.state}</td>
            <td className="p-3">{student.type}</td>
            {showReason && <td className="p-3">{student.reason || "N/A"}</td>}
            {onVerify && (
              <td className="p-3 space-x-2">
                <button onClick={() => onVerify(student.id)} className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">✔ Approve</button>
                <button onClick={() => onReject(student.id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">❌ Reject</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
