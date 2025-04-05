import React from "react";

export default function AdminSettings() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Settings</h2>

      {/* Live System Monitoring */}
      <section className="mb-6 bg-gray-200 p-4 rounded shadow-lg">
        <h3 className="text-xl font-semibold">System Monitoring</h3>
        <p className="mt-2 text-gray-600">Live system stats & server health.</p>
        <div className="flex space-x-4 mt-4">
          <div className="bg-green-400 text-white p-3 rounded">Users Online: 120</div>
          <div className="bg-red-400 text-white p-3 rounded">Errors Detected: 2</div>
        </div>
      </section>

      {/* Role Management */}
      <section className="mb-6 bg-gray-200 p-4 rounded shadow-lg">
        <h3 className="text-xl font-semibold">User & Role Management</h3>
        <button className="mt-2 bg-gray-500 text-white p-2 rounded">Manage Roles</button>
      </section>

      {/* Security Enhancements */}
      <section className="mb-6 bg-gray-200 p-4 rounded shadow-lg">
        <h3 className="text-xl font-semibold">Security & Privacy</h3>
        <button className="mt-2 bg-gray-500 text-white p-2 rounded">Enable 2FA</button>
      </section>

      {/* Theme Customization */}
      <section className="mb-6 bg-gray-200 p-4 rounded shadow-lg">
        <h3 className="text-xl font-semibold">Theme Personalization</h3>
        <button className="mt-2 bg-gray-500 text-white p-2 rounded">Switch Theme</button>
      </section>

      {/* Audit Logs */}
      <section className="mb-6 bg-gray-200 p-4 rounded shadow-lg">
        <h3 className="text-xl font-semibold">Audit Logs & History</h3>
        <button className="mt-2 bg-gray-500 text-white p-2 rounded">View Logs</button>
      </section>
    </div>
  );
}
