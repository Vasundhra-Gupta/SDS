import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage() {
    const features = [
        {
            title: "Secure Transactions",
            content: "Safe and transparent donation processing.",
            icon: "🔒",
        },
        {
            title: "AI-Powered Matching",
            content: "Smart recommendations for donors and students.",
            icon: "🤖",
        },
        {
            title: "Global Impact",
            content: "Helping students worldwide access education.",
            icon: "🌍",
        },
    ];

    // Floating education icons for animation
    const floatingIcons = ["📚", "🎓", "✏️", "🏫", "🧮", "📝", "🔬", "🎒"];

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-blue-50 to-indigo-50 px-6 md:px-12 lg:px-24">
            {/* Left Side - Main Content */}
            <div className="w-full md:w-1/2 py-12 md:py-24">
                <motion.h1 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold leading-tight text-gray-800"
                >
                    Empowering Education Through <span className="text-blue-600">Smart Donations</span>
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-6 text-lg text-gray-600"
                >
                    Connecting students in need with generous donors through AI-powered matching.
                    Make a difference in someone's educational journey today.
                </motion.p>

                {/* Action Buttons */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8 flex flex-col sm:flex-row gap-4"
                >
                    <Link
                        className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all text-center"
                        to={"/donation-welcome"}
                    >
                        Donate Now
                    </Link>
                    <Link
                        className="border border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-50 transition-all text-center"
                        to={"/request-workflow"}
                    >
                        Request Support
                    </Link>
                </motion.div>

                {/* Features Section */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                            className="bg-white p-4 rounded-lg shadow-md"
                            whileHover={{ y: -5 }}
                        >
                            <div className="text-2xl mb-2">{feature.icon}</div>
                            <h3 className="text-md font-bold text-gray-800">{feature.title}</h3>
                            <p className="mt-1 text-sm text-gray-600">{feature.content}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Right Side - Animated Elements */}
            <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px] hidden md:block">
                {/* Floating book animation */}
                <motion.div
                    className="absolute top-1/4 left-1/4 text-6xl"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    📚
                </motion.div>
                
                {/* Graduation cap animation */}
                <motion.div
                    className="absolute top-1/3 right-1/4 text-5xl"
                    animate={{
                        y: [0, -15, 0],
                        x: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                >
                    🎓
                </motion.div>
                
                {/* Pencil animation */}
                <motion.div
                    className="absolute bottom-1/3 left-1/3 text-4xl"
                    animate={{
                        y: [0, -10, 0],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                >
                    ✏️
                </motion.div>
                
                {/* Random floating icons */}
                {floatingIcons.map((icon, index) => (
                    <motion.div
                        key={index}
                        className={`absolute text-3xl`}
                        style={{
                            left: `${10 + Math.random() * 70}%`,
                            top: `${10 + Math.random() * 70}%`,
                        }}
                        animate={{
                            y: [0, -15 - Math.random() * 20, 0],
                            x: [0, (Math.random() - 0.5) * 30, 0],
                            rotate: [0, (Math.random() - 0.5) * 45, 0],
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2
                        }}
                    >
                        {icon}
                    </motion.div>
                ))}
                
                {/* Animated illustration background */}
                <motion.div 
                    className="absolute inset-0 flex items-center justify-center opacity-20"
                    animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 1, -1, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <path
                            fill="#3B82F6"
                            d="M45.2,-58.3C57.8,-48.3,66.5,-32.7,68.5,-16.4C70.5,-0.1,65.8,16.9,56.1,30.8C46.4,44.7,31.7,55.5,14.8,63.1C-2.1,70.7,-21.2,75.1,-36.3,67.1C-51.4,59.1,-62.5,38.7,-66.2,17.6C-69.9,-3.5,-66.2,-25.3,-54.5,-40.3C-42.8,-55.3,-23.1,-63.5,-3.9,-61.1C15.3,-58.7,30.6,-45.7,45.2,-58.3Z"
                            transform="translate(100 100)"
                        />
                    </svg>
                </motion.div>
            </div>
        </div>
    );
}