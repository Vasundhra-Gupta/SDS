import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function DonationWelcomePage() {
    // Animation variants with delays
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    const reviews = [
        {
            type: "Students",
            reviews: [
                "Thanks to this support, I could finally afford essential course materials and focus on my studies.",
                "This initiative has completely transformed my education—I'm now more confident about my future.",
                "Without financial worries, I can now dedicate myself fully to my academics and dreams.",
            ],
        },
        {
            type: "OurPlatform",
            reviews: [
                "Supporting a student's education has been one of the most fulfilling experiences of my life.",
                "Seeing students achieve their goals because of my contribution keeps me motivated to donate.",
                "This platform ensures my donations make a real difference—transparent and impactful!",
            ],
        },
    ];

    return (
        <motion.div
            className="min-h-screen bg-gray-50 flex"
            initial="hidden"
            animate="show"
            variants={container}
        >
            {/* Left content section */}
            <div className="flex-1 p-6 sm:p-8 overflow-y-auto">
                {/* Header */}
                <motion.div className="flex justify-between items-center mb-12" variants={item}>
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                            SDS Foundation
                        </h1>
                        <p className="text-md sm:text-lg text-gray-600">
                            Empowering students, transforming lives through donations.
                        </p>
                    </div>
                    <Link to="/donation-input">
                        <motion.button
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md text-sm sm:text-base"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            Donate Now
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Process section */}
                <motion.div
                    className="bg-white w-full p-6 sm:p-8 rounded-xl shadow-sm mb-12"
                    variants={item}
                >
                    <motion.h2
                        className="text-2xl sm:text-3xl font-bold text-center mb-8"
                        variants={item}
                    >
                        How Your Donations Make a Difference
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: "📥",
                                title: "1. Donations",
                                desc: "We collect donations from generous donors",
                            },
                            {
                                icon: "📤",
                                title: "2. Allocation",
                                desc: "Funds allocated based on student needs",
                            },
                            {
                                icon: "🌱",
                                title: "3. Growth",
                                desc: "Students achieve academic success",
                            },
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-4"
                                variants={item}
                                custom={index}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex justify-center mb-4">
                                    <motion.div
                                        className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center text-3xl"
                                        whileHover={{ rotate: 5, scale: 1.1 }}
                                    >
                                        {step.icon}
                                    </motion.div>
                                </div>
                                <h3 className="font-semibold text-lg mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Reviews section */}
                <motion.div className="w-full" variants={item}>
                    <motion.h2
                        className="text-xl sm:text-2xl font-bold text-center mb-8"
                        variants={item}
                    >
                        What People Say
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {reviews.map((section, i) => (
                            <motion.div
                                key={i}
                                className="space-y-4"
                                variants={item}
                                custom={i + 3}
                            >
                                <h3 className="font-medium text-lg text-center">
                                    {section.type}
                                </h3>
                                {section.reviews.map((review, j) => (
                                    <motion.div
                                        key={j}
                                        className="bg-white p-4 rounded-lg shadow-sm"
                                        variants={item}
                                        custom={j + i + 4}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <p className="text-gray-700 italic">
                                            "{review}"
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Right vertical student section */}
            <motion.div 
                className="w-96 bg-white p-6 shadow-lg overflow-y-scroll h-screen hidden lg:block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <h2 className="text-2xl font-bold text-center mb-6 sticky top-0 bg-white py-4">
                    Meet Students You Can Support
                </h2>
                <div className="space-y-6">
                    {/* Example Student Card */}
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h3 className="text-lg font-bold mb-2">John Doe</h3>
                        <p className="text-sm text-gray-500">
                            B.Sc. in Physics, Final Year
                        </p>
                        <p className="text-gray-700 mt-2">
                            "Achieved 90% in his exams and is currently
                            working on a research project in quantum
                            mechanics."
                        </p>
                        <p className="text-gray-600 mt-2">
                            Needs funds to pay for tuition and living
                            expenses to complete his final year.
                        </p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4 w-full">
                            Donate to John
                        </button>
                    </div>
                    {/* Additional student cards */}
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h3 className="text-lg font-bold mb-2">
                            Alice Johnson
                        </h3>
                        <p className="text-sm text-gray-500">
                            B.A. in English Literature, Second Year
                        </p>
                        <p className="text-gray-700 mt-2">
                            "Awarded for excellence in creative writing and
                            actively participating in community service."
                        </p>
                        <p className="text-gray-600 mt-2">
                            Needs support to purchase educational materials
                            and cover housing costs.
                        </p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4 w-full">
                            Donate to Alice
                        </button>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h3 className="text-lg font-bold mb-2">
                            Raj Sharma
                        </h3>
                        <p className="text-sm text-gray-500">
                            Diploma in Computer Science, Final Year
                        </p>
                        <p className="text-gray-700 mt-2">
                            "Developed software projects that won regional
                            awards and earned academic honors."
                        </p>
                        <p className="text-gray-600 mt-2">
                            Needs funds to pay for final semester fees and
                            resources for his capstone project.
                        </p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4 w-full">
                            Donate to Raj
                        </button>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h3 className="text-lg font-bold mb-2">
                            Emily Clark
                        </h3>
                        <p className="text-sm text-gray-500">
                            M.Sc. in Biology, First Year
                        </p>
                        <p className="text-gray-700 mt-2">
                            "Published research papers in her undergraduate
                            studies and won scholarships for excellence."
                        </p>
                        <p className="text-gray-600 mt-2">
                            Needs funds to cover laboratory fees and living
                            expenses for her master's program.
                        </p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4 w-full">
                            Donate to Emily
                        </button>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h3 className="text-lg font-bold mb-2">
                            Soham Patel
                        </h3>
                        <p className="text-sm text-gray-500">
                            B.Tech. in Electrical Engineering, Third Year
                        </p>
                        <p className="text-gray-700 mt-2">
                            "Ranked top of his class and actively
                            contributes to his college's solar energy
                            initiative."
                        </p>
                        <p className="text-gray-600 mt-2">
                            Needs support to attend an upcoming national
                            conference and pay tuition fees.
                        </p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4 w-full">
                            Donate to Soham
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}