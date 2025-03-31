import React, { useState, useEffect } from 'react';

export default function ScholarshipFinder () {
  const [filters, setFilters] = useState({
    ageGroup: 'all',
    educationLevel: 'all',
    category: 'all',
    country: 'all',
    deadline: 'all'
  });

  const [scholarships, setScholarships] = useState([]);
  const [filteredScholarships, setFilteredScholarships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data - in a real app, you would fetch this from an API
  useEffect(() => {
    const mockScholarships = [
      {
        id: 1,
        name: "Global STEM Scholars Program",
        provider: "International Education ",
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
        provider: "TechFuture ",
        amount: "$5,000",
        deadline: "2023-12-01",
        ageGroup: "all",
        educationLevel: "undergraduate",
        category: "technology",
        country: "usa",
        description: "Supporting female students in computer science and engineering programs.",
        link: "#"
      },
      {
        id: 3,
        name: "First-Generation College Student Grant",
        provider: "National Education Association",
        amount: "$2,500",
        deadline: "2024-01-10",
        ageGroup: "all",
        educationLevel: "undergraduate",
        category: "general",
        country: "usa",
        description: "For students who are the first in their family to attend college.",
        link: "#"
      },
      {
        id: 4,
        name: "Young Innovators Award",
        provider: "Global Youth ",
        amount: "$7,500",
        deadline: "2023-10-30",
        ageGroup: "middle-school",
        educationLevel: "high-school",
        category: "innovation",
        country: "all",
        description: "For students aged 12-18 with innovative project ideas.",
        link: "#"
      },
      {
        id: 5,
        name: "Graduate Research Fellowship",
        provider: "National Science ",
        amount: "$34,000",
        deadline: "2023-11-20",
        ageGroup: "adult",
        educationLevel: "graduate",
        category: "research",
        country: "usa",
        description: "Support for graduate students in NSF-supported STEM disciplines.",
        link: "#"
      },
      {
        id: 6,
        name: "International Student Excellence Scholarship",
        provider: "Global University Network",
        amount: "50% tuition",
        deadline: "2024-02-15",
        ageGroup: "all",
        educationLevel: "undergraduate",
        category: "general",
        country: "international",
        description: "Merit-based scholarship for outstanding international students.",
        link: "#"
      }
    ];

    setScholarships(mockScholarships);
    setFilteredScholarships(mockScholarships);
    setIsLoading(false);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    const filtered = scholarships.filter(scholarship => {
      return (
        (filters.ageGroup === 'all' || scholarship.ageGroup === filters.ageGroup) &&
        (filters.educationLevel === 'all' || scholarship.educationLevel === filters.educationLevel) &&
        (filters.category === 'all' || scholarship.category === filters.category) &&
        (filters.country === 'all' || scholarship.country === filters.country) &&
        (filters.deadline === 'all' || 
          (filters.deadline === 'soon' && new Date(scholarship.deadline) < new Date(Date.now() + 30*24*60*60*1000)) ||
          (filters.deadline === 'later' && new Date(scholarship.deadline) >= new Date(Date.now() + 30*24*60*60*1000))
        )
      );
    });
    setFilteredScholarships(filtered);
  }, [filters, scholarships]);

  const getDeadlineStatus = (date) => {
    const deadline = new Date(date);
    const today = new Date();
    const diffTime = deadline - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'expired';
    if (diffDays <= 30) return 'soon';
    return 'later';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-3">Find Scholarships for you</h1>
        <p className="text-lg text-gray-600">Discover current scholarships for students of all ages and education levels</p>
      </div>

      {/* Filters Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter Scholarships</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <label htmlFor="ageGroup" className="block text-sm font-medium text-gray-700 mb-1">Age Group</label>
            <select
              id="ageGroup"
              name="ageGroup"
              value={filters.ageGroup}
              onChange={handleFilterChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2"
            >
              <option value="all">All Ages</option>
              <option value="middle-school">Middle School (11-14)</option>
              <option value="high-school">High School (14-18)</option>
              <option value="undergraduate">College (18-24)</option>
              <option value="adult">Adult Learners (25+)</option>
            </select>
          </div>

          <div>
            <label htmlFor="educationLevel" className="block text-sm font-medium text-gray-700 mb-1">Education Level</label>
            <select
              id="educationLevel"
              name="educationLevel"
              value={filters.educationLevel}
              onChange={handleFilterChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2"
            >
              <option value="all">All Levels</option>
              <option value="middle-school">Middle School</option>
              <option value="high-school">High School</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="graduate">Graduate</option>
              <option value="vocational">Vocational</option>
            </select>
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              id="category"
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2"
            >
              <option value="all">All Categories</option>
              <option value="stem">STEM</option>
              <option value="technology">Technology</option>
              <option value="arts">Arts</option>
              <option value="humanities">Humanities</option>
              <option value="sports">Sports</option>
              <option value="general">General</option>
            </select>
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <select
              id="country"
              name="country"
              value={filters.country}
              onChange={handleFilterChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2"
            >
              <option value="all">All Countries</option>
              <option value="usa">United States</option>
              <option value="canada">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="international">International</option>
            </select>
          </div>

          <div>
            <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
            <select
              id="deadline"
              name="deadline"
              value={filters.deadline}
              onChange={handleFilterChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2"
            >
              <option value="all">All Deadlines</option>
              <option value="soon">Within 30 Days</option>
              <option value="later">After 30 Days</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {isLoading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
          <p className="mt-2 text-gray-600">Loading scholarships...</p>
        </div>
      ) : filteredScholarships.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-700">No scholarships match your filters</h3>
          <p className="mt-2 text-gray-500">Try adjusting your search criteria</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">
              {filteredScholarships.length} {filteredScholarships.length === 1 ? 'Scholarship' : 'Scholarships'} Found
            </h2>
            <div className="text-sm text-gray-500">
              Sorted by: <span className="font-medium">Deadline (Soonest)</span>
            </div>
          </div>

          {filteredScholarships
            .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
            .map(scholarship => (
              <div key={scholarship.id} className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-indigo-500 hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{scholarship.name}</h3>
                      <p className="text-indigo-600 font-medium mb-2">{scholarship.provider}</p>
                      <p className="text-gray-600 mb-4">{scholarship.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                          {scholarship.amount} Award
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {scholarship.educationLevel.replace('-', ' ').toUpperCase()}
                        </span>
                        {scholarship.country !== 'all' && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {scholarship.country.toUpperCase()}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="md:text-right mt-4 md:mt-0 md:ml-4">
                      <div className={`text-lg font-semibold ${
                        getDeadlineStatus(scholarship.deadline) === 'soon' ? 'text-red-600' : 'text-gray-700'
                      }`}>
                        Deadline: {new Date(scholarship.deadline).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        {getDeadlineStatus(scholarship.deadline) === 'soon' ? 
                          'Apply soon!' : 
                          getDeadlineStatus(scholarship.deadline) === 'expired' ?
                          'Expired' : 'Open for applications'}
                      </div>
                      <a
                        href={scholarship.link}
                        className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Newsletter Signup */}
      <div className="mt-12 bg-indigo-50 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold text-indigo-800 mb-2">Get New Scholarship Alerts</h3>
        <p className="text-gray-600 mb-4">Sign up to receive updates when new scholarships are added</p>
        <div className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          <button
            type="button"
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

