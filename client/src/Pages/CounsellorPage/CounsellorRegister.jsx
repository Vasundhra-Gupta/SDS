import React, { useState } from "react";
export default function CounsellorRegister() {
  const [formData, setFormData] = useState({
    name: "",
    expertise: "",
    email: "",
    meetId: "",
    profilePicture: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation example
    if (!formData.name || !formData.expertise || !formData.email || !formData.meetId) {
      alert("Please fill all the required fields!");
      return;
    }

    // For simplicity, display submitted data in the console
    console.log("Submitted Data:", formData);
    alert("Thank you for registering as a counselor!");

    // Reset form
    setFormData({
      name: "",
      expertise: "",
      email: "",
      meetId: "",
      profilePicture: null,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Register as a Counselor
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Expertise */}
          <div>
            <label
              htmlFor="expertise"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Field of Expertise
            </label>
            <input
              type="text"
              id="expertise"
              name="expertise"
              value={formData.expertise}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Career Guidance, Mental Health"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Google Meet ID */}
          <div>
            <label
              htmlFor="meetId"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Google Meet ID
            </label>
            <input
              type="text"
              id="meetId"
              name="meetId"
              value={formData.meetId}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., meet.google.com/abc-defg-hij"
              required
            />
          </div>

          {/* Profile Picture (Optional) */}
          <div>
            <label
              htmlFor="profilePicture"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Profile Picture (Optional)
            </label>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept="image/*"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register as Counselor
          </button>
        </form>
      </div>
    </div>
  );
}