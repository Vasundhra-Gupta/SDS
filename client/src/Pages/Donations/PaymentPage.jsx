import { useState } from "react";
import { Link } from "react-router-dom";

export default function PaymentPage() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(
            "I just donated to help students via EduSupport ! Join me in making a change!"
        );
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative overflow-hidden">
            {/* Confetti Effect */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="w-3 h-3 rounded-full absolute"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"][
                                Math.floor(Math.random() * 4)
                            ],
                            animation: `fall-${i} 4s linear infinite`,
                        }}
                    ></div>
                ))}
            </div>

            {/* Main Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96 relative animate-fadeIn">
                <h1 className="text-3xl font-bold text-green-600 animate-bounce">
                    🎉 Thank You!
                </h1>

                <p className="text-gray-700 mt-4">
                    Your generosity is making a difference!  
                    We truly appreciate your support ❤️
                </p>

                {/* Return to Home Button */}
                <div className="mt-6">
                    <Link to="/">
                        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md">
                            Return to Home
                        </button>
                    </Link>
                </div>

                {/* Share Button */}
                <div className="mt-4">
                    <p className="text-gray-600 text-sm mb-2">Share your kindness 💖</p>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        onClick={handleCopy}
                    >
                        📢 {copied ? "Copied!" : "Copy Message"}
                    </button>
                </div>
            </div>

            {/* Tailwind Confetti Animation */}
            <style>
                {`
                    @keyframes fall-0 { from { transform: translateY(-100vh); } to { transform: translateY(100vh); } }
                    @keyframes fall-1 { from { transform: translateY(-100vh); } to { transform: translateY(100vh); } }
                    @keyframes fall-2 { from { transform: translateY(-100vh); } to { transform: translateY(100vh); } }
                    @keyframes fall-3 { from { transform: translateY(-100vh); } to { transform: translateY(100vh); } }
                    @keyframes fall-4 { from { transform: translateY(-100vh); } to { transform: translateY(100vh); } }
                    @keyframes fall-5 { from { transform: translateY(-100vh); } to { transform: translateY(100vh); } }
                    @keyframes fall-6 { from { transform: translateY(-100vh); } to { transform: translateY(100vh); } }
                    @keyframes fall-7 { from { transform: translateY(-100vh); } to { transform: translateY(100vh); } }
                    @keyframes fall-8 { from { transform: translateY(-100vh); } to { transform: translateY(100vh); } }
                    @keyframes fall-9 { from { transform: translateY(-100vh); } to { transform: translateY(100vh); } }
                    @keyframes fall-10 { from { transform: translateY(-100vh); } to { transform: translateY(100vh); } }
                    @keyframes fall-11 { from { transform: translateY(-100vh); } to { transform: translateY(100vh); } }
                    @keyframes fall-12 { from { transform: translateY(-100vh); } to { transform: translateY(100vh); } }
                    @keyframes fall-13 { from { transform: translateY(-100vh); } to { transform: translateY(100vh); } }
                    @keyframes fall-14 { from { transform: translateY(-100vh); } to { transform: translateY(100vh); } }
                    @keyframes fall-15 { from { transform: translateY(-100vh); } to { transform: translateY(100vh); } }
                    @keyframes fall-16 { from { transform: translateY(-100vh); } to { transform: translateY(100vh); } }
                    @keyframes fall-17 { from { transform: translateY(-100vh); } to { transform: translateY(100vh); } }
                    @keyframes fall-18 { from { transform: translateY(-100vh); } to { transform: translateY(100vh); } }
                    @keyframes fall-19 { from { transform: translateY(-100vh); } to { transform: translateY(100vh); } }

                    .animate-fadeIn {
                        animation: fadeIn 0.8s ease-out;
                    }

                    @keyframes fadeIn {
                        from { opacity: 0; transform: scale(0.9); }
                        to { opacity: 1; transform: scale(1); }
                    }
                `}
            </style>
        </div>
    );
}
