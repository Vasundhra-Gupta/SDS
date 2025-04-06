import React, { useState, useEffect } from 'react';

export default function ScholarshipFinder() {
  const [scholarships, setScholarships] = useState([]);
  const [filteredScholarships, setFilteredScholarships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [studentDetails, setStudentDetails] = useState({
    name: '',
    ageGroup: '',
    educationLevel: '',
    category: '',
    country: ''
  });

  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const mockScholarships = [
      {
        id: 1,
        name: "Global STEM Scholars Program",
        provider: "International Education",
        amount: "$10,000",
        deadline: "2023-11-15",
        ageGroup: "high-school",
        educationLevel: "undergraduate",
        category: "stem",
        country: "all",
        description: "For students pursuing STEM degrees with demonstrated financial need.",
        link: "#"
      },
      {
        id: 2,
        name: "Women in Technology Scholarship",
        provider: "TechFuture",
        amount: "$5,000",
        deadline: "2023-12-01",
        ageGroup: "all",
        educationLevel: "undergraduate",
        category: "technology",
        country: "usa",
        description: "Supporting female students in computer science and engineering programs.",
        link: "#"
      }
    ];

    setScholarships(mockScholarships);
    setIsLoading(false);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = () => {
    const filtered = scholarships.filter(scholarship => {
      return (
        (studentDetails.ageGroup === '' || scholarship.ageGroup === studentDetails.ageGroup) &&
        (studentDetails.educationLevel === '' || scholarship.educationLevel === studentDetails.educationLevel) &&
        (studentDetails.category === '' || scholarship.category === studentDetails.category) &&
        (studentDetails.country === '' || scholarship.country === studentDetails.country)
      );
    });
    setFilteredScholarships(filtered);
    setShowResults(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Student Details Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Enter Your Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <input type="text" name="name" placeholder="Your Name" value={studentDetails.name} onChange={handleInputChange} className="w-full rounded-md border-gray-300 shadow-sm py-2 px-3" />

          <select name="ageGroup" value={studentDetails.ageGroup} onChange={handleInputChange} className="w-full rounded-md border-gray-300 shadow-sm py-2">
            <option value="">Select Age Group</option>
            <option value="high-school">High School (14-18)</option>
            <option value="undergraduate">College (18-24)</option>
            <option value="adult">Adult Learners (25+)</option>
          </select>

          <select name="educationLevel" value={studentDetails.educationLevel} onChange={handleInputChange} className="w-full rounded-md border-gray-300 shadow-sm py-2">
            <option value="">Select Education Level</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="graduate">Graduate</option>
            <option value="vocational">Vocational</option>
          </select>

          <select name="category" value={studentDetails.category} onChange={handleInputChange} className="w-full rounded-md border-gray-300 shadow-sm py-2">
            <option value="">Select Category</option>
            <option value="stem">STEM</option>
            <option value="technology">Technology</option>
            <option value="general">General</option>
          </select>

          <select name="country" value={studentDetails.country} onChange={handleInputChange} className="w-full rounded-md border-gray-300 shadow-sm py-2">
            <option value="">Select Country</option>
            <option value="usa">United States</option>
            <option value="usa">India</option>
            <option value="all">All Countries</option>
          </select>
        </div>
        <button onClick={handleSearch} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700">
          Search Scholarships with AI
        </button>
      </div>

      {/* Scholarship Results */}
      {showResults && (
        <>
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-3">Find Scholarships for You</h1>
            <p className="text-lg text-gray-600">Discover scholarships tailored to your profile.</p>
          </div>

          {filteredScholarships.length > 0 ? (
            <div className="space-y-6">
              {filteredScholarships.map(scholarship => (
                <div key={scholarship.id} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-800">{scholarship.name}</h3>
                  <p className="text-indigo-600 font-medium">{scholarship.provider}</p>
                  <p className="text-gray-600">{scholarship.description}</p>
                  <a href={scholarship.link} className="text-indigo-500 font-semibold mt-2 block">View Details</a>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-700">No scholarships match your details</h3>
              <p className="mt-2 text-gray-500">Try different criteria.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}