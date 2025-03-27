import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f4f4]  text-[#333]] px-6">
      
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-extrabold leading-tight animate-fade-in">
          Empowering Education Through Smart Donations
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Connecting students in need with generous donors through AI-powered matching.
          Make a difference in someone's educational journey today.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-all"
            onClick={() => navigate('/donor')}
          >
            Donate Now
          </button>
          <button
            className="border border-white px-6 py-3 rounded-lg shadow-lg hover:bg-white hover:text-blue-600 transition-all"
            onClick={() => navigate('/student-registration')}
          >
            Request Support
          </button>
        </div>
      </div>

      {/* Decorative Section */}
      <div className="mt-10 flex justify-center">
        <img
          src="https://source.unsplash.com/800x400/?education,students"
          alt="Education Support"
          className="rounded-xl shadow-lg w-full max-w-3xl"
        />
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-white text-blue-600 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold">AI-Powered Matching</h3>
          <p className="mt-2 text-gray-600">Smart recommendations for donors and students.</p>
        </div>
        <div className="bg-white text-blue-600 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold">Secure Transactions</h3>
          <p className="mt-2 text-gray-600">Safe and transparent donation processing.</p>
        </div>
        <div className="bg-white text-blue-600 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold">Global Impact</h3>
          <p className="mt-2 text-gray-600">Helping students worldwide access education.</p>
        </div>
      </div>
      
    </div>
  );
}
