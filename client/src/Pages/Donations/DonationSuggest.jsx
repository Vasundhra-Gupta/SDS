import React from 'react'

export default function DonationSuggest() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Title and Introduction */}
      <h1 className="text-3xl font-bold text-center mb-6">Support Students, Transform Lives</h1>
      <p className="text-center text-lg mb-8">
        Choose how you want to donate: Sponsor an individual student or contribute to our general fund.
      </p>

      {/* Two Donation Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Individual Donation Card */}
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-xl font-bold mb-4">Donate to an Individual</h2>
          <p className="text-gray-700 mb-4">
            Select a student to directly support and make a meaningful impact.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            View Students
          </button>
        </div>

        {/* General Fund Card */}
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-xl font-bold mb-4">Donate to the General Fund</h2>
          <p className="text-gray-700 mb-4">
            Your contribution helps our entire community thrive.
          </p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            Donate Now
          </button>
        </div>
      </div>

      {/* Student Profiles Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-center mb-6">Meet Students You Can Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Example Student Card */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">John Doe</h3>
            <p className="text-sm text-gray-500">B.Sc. in Physics, Final Year</p>
            <p className="text-gray-700 mt-2">
              "Achieved 90% in his exams and is currently working on a research project in quantum mechanics."
            </p>
            <p className="text-gray-600 mt-2">
              Needs funds to pay for tuition and living expenses to complete his final year.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4">
              Donate to John
            </button>
          </div>
          {/* Add additional student cards below */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">Alice Johnson</h3>
            <p className="text-sm text-gray-500">B.A. in English Literature, Second Year</p>
            <p className="text-gray-700 mt-2">
              "Awarded for excellence in creative writing and actively participating in community service."
            </p>
            <p className="text-gray-600 mt-2">
              Needs support to purchase educational materials and cover housing costs.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4">
              Donate to Alice
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">Raj Sharma</h3>
            <p className="text-sm text-gray-500">Diploma in Computer Science, Final Year</p>
            <p className="text-gray-700 mt-2">
              "Developed software projects that won regional awards and earned academic honors."
            </p>
            <p className="text-gray-600 mt-2">
              Needs funds to pay for final semester fees and resources for his capstone project.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4">
              Donate to Raj
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">Emily Clark</h3>
            <p className="text-sm text-gray-500">M.Sc. in Biology, First Year</p>
            <p className="text-gray-700 mt-2">
              "Published research papers in her undergraduate studies and won scholarships for excellence."
            </p>
            <p className="text-gray-600 mt-2">
              Needs funds to cover laboratory fees and living expenses for her master's program.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4">
              Donate to Emily
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">Soham Patel</h3>
            <p className="text-sm text-gray-500">B.Tech. in Electrical Engineering, Third Year</p>
            <p className="text-gray-700 mt-2">
              "Ranked top of his class and actively contributes to his college’s solar energy initiative."
            </p>
            <p className="text-gray-600 mt-2">
              Needs support to attend an upcoming national conference and pay tuition fees.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4">
              Donate to Soham
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
