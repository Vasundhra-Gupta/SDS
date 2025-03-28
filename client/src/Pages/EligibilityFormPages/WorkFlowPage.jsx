import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function WorkFlowPage() {
    const steps = [
        {
            id: 1,
            title: "Personal Info",
            description: "Share your basic details",
            icon: "✍️",
            path: "/eligibility/personal"
        },
        {
            id: 2,
            title: "Verify ID",
            description: "Aadhaar verification",
            icon: "🆔",
            path: "/eligibility/verify"
        },
        {
            id: 3,
            title: "Upload Docs",
            description: "Academic documents",
            icon: "📚",
            path: "/eligibility/documents"
        },
        {
            id: 4,
            title: "Financial Check",
            description: "Economic assessment",
            icon: "💰",
            path: "/eligibility/financial"
        },
        {
            id: 5,
            title: "Bank Link",
            description: "Connect account",
            icon: "🏦",
            path: "/eligibility/bank"
        },
        {
            id: 6,
            title: "Success!",
            description: "Application complete",
            icon: "✅",
            path: "/eligibility/success"
        },
    ];

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const arrow = {
        hidden: { opacity: 0, x: -10 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } },
        hover: { scale: 1.1 }
    };

    return (
        <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div 
                    className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16 px-4 sm:px-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <motion.h1 
                            className="text-3xl sm:text-4xl font-bold text-blue-800 mb-2 sm:mb-4"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Breaking Financial Barriers Together
                        </motion.h1>
                        <motion.p 
                            className="text-lg sm:text-xl text-gray-600"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            6 simple steps to submit request successfully
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Link 
                            to="/eligibility/personal"
                            className="bg-green-500 text-white font-bold px-6 py-2 sm:px-8 sm:py-3 rounded-lg shadow-md text-lg block"
                        >
                            Start Application
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Steps Container */}
                <motion.div 
                    className="px-4 sm:px-6"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {steps.map((step, index) => (
                            <motion.div 
                                key={step.id} 
                                className="relative flex flex-col items-center"
                                variants={item}
                            >
                                {/* Arrow between steps */}
                                {index < steps.length - 1 && (
                                    <motion.div 
                                        className="hidden sm:block absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-0"
                                        variants={arrow}
                                        whileHover="hover"
                                    >
                                        <svg 
                                            className="w-8 h-8 text-blue-300" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M13 5l7 7-7 7M5 5l7 7-7 7" 
                                            />
                                        </svg>
                                    </motion.div>
                                )}

                                {/* Step Circle */}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link 
                                        to={step.path}
                                        className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-blue-50 border-4 border-blue-100 rounded-full flex flex-col items-center justify-center shadow-md hover:shadow-lg mb-4 z-10 transition-all duration-200"
                                    >
                                        <div className="text-2xl sm:text-3xl mb-2 text-blue-600">
                                            {step.icon}
                                        </div>
                                        <h3 className="font-bold text-lg sm:text-xl text-blue-800 text-center px-2">
                                            {step.title}
                                        </h3>
                                        <div className="absolute -bottom-4 bg-blue-600 text-white rounded-full px-3 py-1 text-xs sm:text-sm font-bold">
                                            Step {step.id}
                                        </div>
                                    </Link>
                                </motion.div>

                                {/* Description */}
                                <motion.p
                                    className="text-gray-700 text-center text-base sm:text-lg max-w-xs"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.1 + 0.5 }}
                                >
                                    {step.description}
                                </motion.p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}