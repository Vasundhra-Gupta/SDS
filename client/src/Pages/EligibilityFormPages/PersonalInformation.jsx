import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PersonalInformation() {

    // Step tracker state
    const steps = [
        "Personal Information",
        "Aadhaar Verification",
        "Educational Details",
        "Document Verification",
        "Bank Details",
    ];


    // Form refs
    const studentname = useRef();
    const dateOfBirth = useRef();
    const gender = useRef();
    const contactNo = useRef();
    const emailAddress = useRef();
    const AadharNumber = useRef();
    const ResidentAddress = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Form handling logic
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50  px-4"
        >
            <div className="max-w-4xl pb-12 mx-auto">
                {/* Progress Indicator */}
                <motion.div
                    className="flex justify-between items-center mb-12 relative"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                   
                </motion.div>

                {/* Form Container */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-white p-8 rounded-xl shadow-2xl"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-3xl font-bold text-blue-800 mb-2"
                    >
                        Personal Details
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-600 mb-8"
                    >
                        Please provide your personal information to get started
                    </motion.p>

                    <form onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <motion.div
                                variants={itemVariants}
                                className="mb-6"
                            >
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Student Name
                                </label>
                                <motion.input
                                    type="text"
                                    ref={studentname}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your name here"
                                    whileFocus={{ scale: 1.01 }}
                                    required
                                />
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="mb-6"
                            >
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Date of Birth
                                </label>
                                <motion.input
                                    type="date"
                                    ref={dateOfBirth}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    whileFocus={{ scale: 1.01 }}
                                    required
                                />
                            </motion.div>
                        </div>

                        <motion.div variants={itemVariants} className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Gender
                            </label>
                            <div className="flex space-x-4 mt-1">
                                {["Male", "Female", "Other"].map((option) => (
                                    <motion.label
                                        key={option}
                                        className="flex items-center space-x-2"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <input
                                            type="radio"
                                            name="gender"
                                            value={option}
                                            ref={gender}
                                            className="text-blue-600 focus:ring-blue-500"
                                            required
                                        />
                                        <span>{option}</span>
                                    </motion.label>
                                ))}
                            </div>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <motion.div
                                variants={itemVariants}
                                className="mb-6"
                            >
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Contact Number
                                </label>
                                <motion.input
                                    type="tel"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    pattern="[0-9]{10}"
                                    placeholder="Enter 10-digit number"
                                    ref={contactNo}
                                    required
                                    whileFocus={{ scale: 1.01 }}
                                />
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="mb-6"
                            >
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <motion.input
                                    type="email"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="example@example.com"
                                    ref={emailAddress}
                                    required
                                    whileFocus={{ scale: 1.01 }}
                                />
                            </motion.div>
                        </div>

                        <motion.div variants={itemVariants} className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Aadhar Number
                            </label>
                            <motion.input
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                pattern="[0-9]{12}"
                                placeholder="Enter 12-digit Aadhar Number"
                                ref={AadharNumber}
                                required
                                whileFocus={{ scale: 1.01 }}
                            />
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-8">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Residential Address
                            </label>
                            <motion.textarea
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                rows="4"
                                placeholder="Enter your full residential address"
                                ref={ResidentAddress}
                                required
                                whileFocus={{ scale: 1.01 }}
                            ></motion.textarea>
                        </motion.div>

                        <motion.div
                            className="flex justify-between"
                            variants={itemVariants}
                        >
                            {/* <motion.button
                                type="button"
                                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium shadow hover:bg-gray-300 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Back
                            </motion.button> */}
                            <motion.button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() =>
                                    setCompletedSteps([...completedSteps, 1])
                                }
                            >
                              <Link to={"/eligibility/aadhar"}>Save & Next</Link>
                                
                            </motion.button>
                        </motion.div>
                    </form>
                </motion.div>
            </div>
        </motion.div>
    );
}
