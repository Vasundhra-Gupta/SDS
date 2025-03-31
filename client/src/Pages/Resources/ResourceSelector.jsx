import React, { useState } from 'react';

const ResourceSelector = () => {
  const [institution, setInstitution] = useState('');
  const [classOrBranch, setClassOrBranch] = useState('');
  const [streamOrSemester, setStreamOrSemester] = useState('');
  const [resources] = useState([
    { id: 1, type: 'School', class: '12', stream: 'PCM', title: 'Electrostatics Cheat Sheet', link: '/electrostatics.pdf' },
    { id: 2, type: 'School', class: '11', stream: 'PCB', title: 'Plant Physiology Guide', link: '/plant_physiology.pdf' },
    { id: 3, type: 'College', branch: 'ECE', semester: '4', title: 'Signals and Systems Overview', link: '/signals_systems.pdf' },
  ]);
  const [feedback, setFeedback] = useState('');
  const [showResources, setShowResources] = useState(false);

  const handleSubmit = () => {
    setShowResources(true);
  };

  const handleFeedbackSubmit = () => {
    alert('Thanks for your feedback! You’re helping us grow!');
    setFeedback('');
  };

  const filteredResources = resources.filter((resource) => {
    return (
      resource.type === institution &&
      (resource.class === classOrBranch || resource.branch === classOrBranch) &&
      (resource.stream === streamOrSemester || resource.semester === streamOrSemester)
    );
  });

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="text-center bg-blue-500 text-white py-4 rounded-lg mb-6">
        <h1 className="text-3xl font-bold">Explore Your Learning Resources!</h1>
        <p className="text-lg">Find what you need to succeed!</p>
      </header>

      {/* Filters Section */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Filters</h2>
        <label className="block mb-4">
          <span className="text-gray-700">Institution:</span>
          <select
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            className="block w-full mt-1 border-gray-300 rounded-lg shadow-sm"
          >
            <option value="">Select</option>
            <option value="School">School</option>
            <option value="College">College</option>
          </select>
        </label>

        {institution === 'School' && (
          <>
            <label className="block mb-4">
              <span className="text-gray-700">Class:</span>
              <select
                value={classOrBranch}
                onChange={(e) => setClassOrBranch(e.target.value)}
                className="block w-full mt-1 border-gray-300 rounded-lg shadow-sm"
              >
                <option value="">Select</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
              </select>
            </label>
            {(classOrBranch === '11' || classOrBranch === '12') && (
              <label className="block mb-4">
                <span className="text-gray-700">Stream:</span>
                <select
                  value={streamOrSemester}
                  onChange={(e) => setStreamOrSemester(e.target.value)}
                  className="block w-full mt-1 border-gray-300 rounded-lg shadow-sm"
                >
                  <option value="">Select</option>
                  <option value="PCM">PCM</option>
                  <option value="PCB">PCB</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Arts">Arts</option>
                </select>
              </label>
            )}
          </>
        )}

        {institution === 'College' && (
          <>
            <label className="block mb-4">
              <span className="text-gray-700">Branch:</span>
              <select
                value={classOrBranch}
                onChange={(e) => setClassOrBranch(e.target.value)}
                className="block w-full mt-1 border-gray-300 rounded-lg shadow-sm"
              >
                <option value="">Select</option>
                <option value="CSE">Computer Science</option>
                <option value="IT">Information Technology</option>
                <option value="ECE">Electronics and Communication</option>
                <option value="EEE">Electrical and Electronics</option>
                <option value="ME">Mechanical Engineering</option>
                <option value="Biotech">Biotechnology</option>
              </select>
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Semester:</span>
              <select
                value={streamOrSemester}
                onChange={(e) => setStreamOrSemester(e.target.value)}
                className="block w-full mt-1 border-gray-300 rounded-lg shadow-sm"
              >
                <option value="">Select</option>
                {[...Array(8)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    Semester {i + 1}
                  </option>
                ))}
              </select>
            </label>
          </>
        )}
        <button
          onClick={handleSubmit}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Get Resources
        </button>
      </div>

      {/* Resources Section */}
      {showResources && (
        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Resources</h2>
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredResources.map((resource) => (
                <div
                  className="p-4 border border-gray-300 rounded-lg bg-white shadow-md"
                  key={resource.id}
                >
                  <h3 className="text-lg font-bold text-blue-700">{resource.title}</h3>
                  <button
                    onClick={() => window.open(resource.link, '_blank')}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Access Resource
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-700">
              Sorry, we don’t have resources for this selection right now. We’re working on it! 📚
            </p>
          )}
        </div>
      )}

      {/* Feedback Section */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Help Us Improve</h2>
        <textarea
          placeholder="Let us know how we can help you learn better!"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="block w-full mt-1 border-gray-300 rounded-lg shadow-sm"
        ></textarea>
        <button
          onClick={handleFeedbackSubmit}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default ResourceSelector;
