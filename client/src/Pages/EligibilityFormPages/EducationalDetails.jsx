import React, { useRef } from "react";

export default function EducationalDetails() {
  const institutename = useRef();
  const courseName = useRef();
  const year = useRef();
  const rollNo = useRef();
  const marks = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const institute = institutename.current.value;
    const course = courseName.current.value;
    const yearValue = year.current.value;
    const studentId = rollNo.current.value;
    const academicPerformance = marks.current.value;

    institutename.current.value = "";
    courseName.current.value = "";
    year.current.value = "";
    rollNo.current.value = "";
    marks.current.value = "";

    console.log("Submitted Data:", { institute, course, yearValue, studentId, academicPerformance });
    // Add logic for saving data here
  };

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-start justify-start">
      <div className="w-full h-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Educational Details</h1>
        <form onSubmit={handleSubmit}>
          {/* Institute Name */}
          <div className="mb-6">
            <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
              Institute Name
            </label>
            <input
              type="text"
              ref={institutename}
              id="Name"
              placeholder="Enter your school/college Name"
              className="w-2/3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Course Name */}
          <div className="mb-6">
            <label htmlFor="course" className="block text-sm font-medium text-gray-700">
              Course Name
            </label>
            <input
              type="text"
              ref={courseName}
              id="course"
              placeholder="Enter your course name"
              className="w-2/3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Year */}
          <div className="mb-6">
            <label htmlFor="year" className="block text-sm font-medium text-gray-700">
              Year
            </label>
            <input
              type="number"
              ref={year}
              id="year"
              placeholder="Enter year of study"
              className="w-2/3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Roll Number */}
          <div className="mb-6">
            <label htmlFor="rollNo" className="block text-sm font-medium text-gray-700">
              Roll Number
            </label>
            <input
              type="text"
              ref={rollNo}
              id="rollNo"
              placeholder="Enter your roll number"
              className="w-2/3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Academic Performance */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Academic Performance
            </label>
            <div className="flex items-center space-x-6">
              <div>
                <input
                  type="radio"
                  id="cgpa"
                  name="grade"
                  value="CGPA"
                  ref={marks}
                  className="focus:ring-2 focus:ring-blue-500"
                  required
                />
                <label htmlFor="cgpa" className="ml-2 text-gray-700">
                  CGPA
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="percent"
                  name="grade"
                  value="Percentage"
                  ref={marks}
                  className="focus:ring-2 focus:ring-blue-500"
                  required
                />
                <label htmlFor="percent" className="ml-2 text-gray-700">
                  Percentage
                </label>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ marginLeft: "auto" }}
            >
              Save & Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}