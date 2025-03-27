import React from 'react';

export default function DonationWelcomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Foundation Name */}
      <div className="bg-blue-500 text-white w-full text-center p-8">
        <h1 className="text-5xl font-bold">SDS Foundation</h1>
        <p className="text-lg mt-2">Empowering students, transforming lives through donations.</p>
      </div>

      {/* How Your Donations Make a Difference */}
      <div className="bg-white w-full p-6 rounded-lg shadow my-8">
        <h2 className="text-2xl font-bold text-center mb-4">How Your Donations Make a Difference</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="text-center">
            <div className="flex items-center justify-center w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4">
              <span className="text-5xl">📥</span>
            </div>
            <h3 className="font-semibold">Step 1: Donations</h3>
            <p className="text-sm">We collect donations from generous donors like you.</p>
          </div>
          {/* Step 2 */}
          <div className="text-center">
            <div className="flex items-center justify-center w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4">
              <span className="text-5xl">📤</span>
            </div>
            <h3 className="font-semibold">Step 2: Allocation</h3>
            <p className="text-sm">Funds are allocated to students based on their needs.</p>
          </div>
          {/* Step 3 */}
          <div className="text-center">
            <div className="flex items-center justify-center w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4">
              <span className="text-5xl">🌱</span>
            </div>
            <h3 className="font-semibold">Step 3: Growth</h3>
            <p className="text-sm">Students use the funds to succeed academically and personally.</p>
          </div>
        </div>
      </div>

      {/* Donate Now Button */}
      <div className="text-center my-8">
        <button className="bg-green-500 text-white px-8 py-3 rounded-lg shadow hover:bg-green-600">
          Donate Now
        </button>
        <p className="text-sm text-gray-500 mt-2">Your support helps students succeed!</p>
      </div>

      {/* Reviews Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        {/* Student Reviews */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-center">Student Reviews</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="text-gray-700 italic">
                "Thanks to SDS Foundation, I could buy the books I needed for my course. I'm truly grateful!"
              </p>
              <p className="text-gray-500 text-sm text-right">- John Doe</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="text-gray-700 italic">
                "The support I received helped me pay my tuition fees. Thank you for transforming my life!"
              </p>
              <p className="text-gray-500 text-sm text-right">- Alice Johnson</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="text-gray-700 italic">
                "The financial aid gave me the chance to focus entirely on my studies without stress."
              </p>
              <p className="text-gray-500 text-sm text-right">- Raj Sharma</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="text-gray-700 italic">
                "Thanks to the donations, I could pursue my dreams without worrying about money."
              </p>
              <p className="text-gray-500 text-sm text-right">- Emily Clark</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="text-gray-700 italic">
                "I’m incredibly thankful to SDS Foundation for giving me the tools to succeed!"
              </p>
              <p className="text-gray-500 text-sm text-right">- Soham Patel</p>
            </div>
          </div>
        </div>

        {/* Donor Reviews */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-center">Donor Reviews</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="text-gray-700 italic">
                "It feels amazing to know my contributions help students achieve their dreams."
              </p>
              <p className="text-gray-500 text-sm text-right">- Jane Smith</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="text-gray-700 italic">
                "SDS Foundation gave me an opportunity to positively impact someone’s life. Truly rewarding!"
              </p>
              <p className="text-gray-500 text-sm text-right">- Mike Lee</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="text-gray-700 italic">
                "I’m proud to support a foundation that focuses on education and growth."
              </p>
              <p className="text-gray-500 text-sm text-right">- Sarah Connor</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="text-gray-700 italic">
                "Knowing that my donation helped someone succeed feels truly fulfilling."
              </p>
              <p className="text-gray-500 text-sm text-right">- David Brown</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="text-gray-700 italic">
                "I will definitely keep contributing to SDS Foundation. It's a wonderful initiative!"
              </p>
              <p className="text-gray-500 text-sm text-right">- Priya Kapoor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
