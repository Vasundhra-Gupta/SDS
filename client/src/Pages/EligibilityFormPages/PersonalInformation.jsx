import React, { useRef } from 'react';
import {useNavigate} from 'react-router-dom';
export default function PersonalDetails() {
  const navigate =useNavigate();
  
  const studentname = useRef();
  const dateOfBirth = useRef();
  const gender = useRef();
  const contactNo = useRef();
  const emailAddress = useRef();
  const AadharNumber = useRef();
  const ResidentAddress = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const Name = studentname.current.value;
    const DOB = dateOfBirth.current.value;
    const gen = gender.current.value;
    const Contact = contactNo.current.value;
    const email = emailAddress.current.value;
    const aadhar = AadharNumber.current.value;
    const homeAddress = ResidentAddress.current.value;

    studentname.current.value = "";
    dateOfBirth.current.value = "";
    gender.current.value = "";
    contactNo.current.value = "";
    emailAddress.current.value = "";
    AadharNumber.current.value = "";
    ResidentAddress.current.value = "";

   
    
  
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-gray-100 shadow-lg rounded-lg">
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">Personal Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Student Name</label>
            <input
              type="text"
              ref={studentname}
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Enter your name here"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Date of Birth</label>
            <input
              type="date"
              ref={dateOfBirth}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Gender</label>
            <div className="flex space-x-4 mt-1">
              <label className="flex items-center space-x-2">
                <input type="radio" name="gender" value="Male" ref={gender} required />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="gender" value="Female" ref={gender} required />
                <span>Female</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="gender" value="Other" ref={gender} required />
                <span>Other</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Contact Number</label>
            <input
              type="tel"
              className="w-full mt-1 p-2 border rounded-md"
              pattern="[0-9]{10}"
              placeholder="Enter 10-digit number"
              ref={contactNo}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="example@example.com"
              ref={emailAddress}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Aadhar Number</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border rounded-md"
              pattern="[0-9]{12}"
              placeholder="Enter 12-digit Aadhar Number"
              ref={AadharNumber}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Residential Address</label>
            <textarea
              className="w-full mt-1 p-2 border rounded-md"
              rows="4"
              placeholder="Enter your full residential address"
              ref={ResidentAddress}
              required
            ></textarea>
          </div>

          <div className= "bg-blue-500 flex justify-between">
            <button type="button" className="bg-blue-500 text-black px-4 py-2 rounded-md" >Back</button>
            <button type="submit" className="bg-blue-500 text-black px-4 py-2 rounded-md" onClick={() => navigate('/educational-details')}>Save & Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};
