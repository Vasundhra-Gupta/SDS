import { motion } from "framer-motion";
import { Link} from "react-router-dom"

export default function WorkFlowPage() {
    const steps = [
        {
            id: 1,
            title: "Personal Info",
            description: "Share your basic details",
            icon: "✍️",
        },
        {
            id: 2,
            title: "Verify ID",
            description: "Aadhaar verification",
            icon: "🆔",
        },
        {
            id: 3,
            title: "Upload Docs",
            description: "Academic documents",
            icon: "📚",
        },
        {
            id: 4,
            title: "Financial Check",
            description: "Economic assessment",
            icon: "💰",
        },
        {
            id: 5,
            title: "Bank Link",
            description: "Connect account",
            icon: "🏦",
        },
        {
            id: 6,
            title: "Success!",
            description: "Application complete",
            icon: "✅",
        },
    ];

    return (
        <div className="min-h-screen bg-white py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center px-11 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center md:text-left "
                    >
                        <h1 className="text-4xl font-bold text-blue-800  mb-4">
                            Breaking Financial Barriers Together
                        </h1>
                        <p className="text-xl text-gray-600 mx-auto">
                            6 simple steps to overcome financial barriers
                        </p>
                    </motion.div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-green-500 text-white font-bold mt-10 px-8 py-3 rounded-xl shadow-md text-lg"
                    >
                      <Link to={"/eligibility/personal"}>Start Application</Link>
                      
                    </motion.button>
                </div>

                {/* Steps Container */}
                <div className="flex flex-col items-center px-11">
                    {/* Top Row */}
                    <div className="flex flex-col md:flex-row justify-center items-start mb-8 w-full">
                        {steps.slice(0, 3).map((step, index) => (
                            <div
                                key={step.id}
                                className="flex flex-col items-center w-full md:w-1/3 px-4 mb-12 md:mb-0"
                            >
                                {/* Step Circle */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 10,
                                        delay: index * 0.2,
                                    }}
                                    className="relative w-44 h-44 bg-blue-50 border-4 border-blue-100 rounded-full flex flex-col items-center justify-center shadow-lg mb-4 z-10"
                                >
                                    <div className="text-3xl mb-2 text-blue-600">
                                        {step.icon}
                                    </div>
                                    <h3 className="font-bold text-xl text-blue-800 text-center px-4">
                                        {step.title}
                                    </h3>
                                    <div className="absolute -bottom-5 bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-bold">
                                        Step {step.id}
                                    </div>
                                </motion.div>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.2 + 0.3 }}
                                    className="text-gray-700 text-lg text-center max-w-xs"
                                >
                                    {step.description}
                                </motion.p>

                                {/* Connecting lines */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 1 }}
                                    className="hidden md:block absolute h-1 bg-blue-200 top-[43%] left-64 right-64 -translate-y-1/2 -z-0 rounded-full"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Bottom Row */}
                    <div className="flex flex-col md:flex-row justify-center items-start w-full">
                        {steps.slice(3, 6).map((step, index) => (
                            <div
                                key={step.id}
                                className="flex flex-col items-center w-full md:w-1/3 px-4"
                            >
                                {/* Step Circle */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 10,
                                        delay: index * 0.2 + 0.6,
                                    }}
                                    className="relative w-44 h-44 bg-blue-50 border-4 border-blue-100 rounded-full flex flex-col items-center justify-center shadow-lg mb-4 z-10"
                                >
                                    <div className="text-3xl mb-2 text-blue-600">
                                        {step.icon}
                                    </div>
                                    <h3 className="font-bold text-xl text-blue-800 text-center px-4">
                                        {step.title}
                                    </h3>
                                    <div className="absolute -bottom-5 bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-bold">
                                        Step {step.id}
                                    </div>
                                </motion.div>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.2 + 0.9 }}
                                    className="text-gray-700 text-center text-lg max-w-xs"
                                >
                                    {step.description}
                                </motion.p>

                                {/* Connecting Lines */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 1 }}
                                    className="hidden md:block absolute h-1 bg-blue-200 top-[73%] left-64 right-64 -translate-y-1/2 -z-0 rounded-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
