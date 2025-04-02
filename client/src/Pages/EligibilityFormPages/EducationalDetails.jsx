import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { icons } from "../../assets/icons";

export default function EducationalDetails() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const institutename = useRef();
    const courseName = useRef();
    const year = useRef();
    const rollNo = useRef();
    const marks = useRef();
    const [selectedGradeType, setSelectedGradeType] = useState(""); // Initialize state


    const handleSubmit = (event) => {
        // event.preventDefault();
        // setIsSubmitting(true);
        // const institute = institutename.current.value;
        // const course = courseName.current.value;
        // const yearValue = year.current.value;
        // const studentId = rollNo.current.value;
        // const academicPerformance = marks.current.value;
        // Simulate API call
        // setTimeout(() => {
        //     console.log("Submitted Data:", {
        //         institute,
        //         course,
        //         yearValue,
        //         studentId,
        //         academicPerformance,
        //     });
        //     setIsSubmitting(false);
        //     setSubmitSuccess(true);
        //     // Reset form after submission
        //     institutename.current.value = "";
        //     courseName.current.value = "";
        //     year.current.value = "";
        //     rollNo.current.value = "";
        //     marks.current.value = "";
        //     // Navigate after 2 seconds
        //     setTimeout(() => navigate("/next-step"), 2000);
        // }, 1500);
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
            className=" min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 px-4"
        >
            <div className="relative max-w-4xl pb-12 mx-auto">
                
                {/* Progress Indicator */}
              
                    <motion.div
                        className="flex justify-between items-center mb-12 relative"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    ></motion.div>
            

                <motion.div
                    className="max-w-4xl mb-4  mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                >
                    {/* Form Header */}
                    <motion.div
                        className=" p-6 mr-2 text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <motion.h1
                            variants={itemVariants}
                            className="text-3xl font-bold text-blue-800 my-3"
                        >
                            Educational Details
                        </motion.h1>
                        <motion.p
                            variants={itemVariants}
                            className="text-gray-600 "
                        >
                            Please provide your Educational details
                        </motion.p>
                    </motion.div>

                    <motion.form
                        onSubmit={handleSubmit}
                        className="px-8 py-3 space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Institute Name */}
                        <motion.div variants={itemVariants}>
                            <label
                                htmlFor="Name"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Institute Name
                            </label>
                            <motion.input
                                type="text"
                                ref={institutename}
                                id="Name"
                                placeholder="Enter your school/college name"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                                whileFocus={{ scale: 1.01 }}
                            />
                        </motion.div>

                        {/* Course Name */}
                        <motion.div variants={itemVariants}>
                            <label
                                htmlFor="course"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Course Name
                            </label>
                            <motion.input
                                type="text"
                                ref={courseName}
                                id="course"
                                placeholder="Enter your course name"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                                whileFocus={{ scale: 1.01 }}
                            />
                        </motion.div>

                        {/* Year */}
                        <motion.div variants={itemVariants}>
                            <label
                                htmlFor="year"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Year of Study
                            </label>
                            <motion.select
                                ref={year}
                                id="year"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                                whileFocus={{ scale: 1.01 }}
                            >
                                <option value="">Select year</option>
                                <option value="1">First Year</option>
                                <option value="2">Second Year</option>
                                <option value="3">Third Year</option>
                                <option value="4">Fourth Year</option>
                                <option value="5">Fifth Year</option>
                            </motion.select>
                        </motion.div>

                        {/* Roll Number */}
                        <motion.div variants={itemVariants}>
                            <label
                                htmlFor="rollNo"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Roll Number
                            </label>
                            <motion.input
                                type="text"
                                ref={rollNo}
                                id="rollNo"
                                placeholder="Enter your roll number"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                                whileFocus={{ scale: 1.01 }}
                            />
                        </motion.div>

                        {/* Academic Performance */}
                        <motion.div variants={itemVariants}>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Academic Performance
                            </label>
                            <div className="flex space-x-6">
                                {["CGPA", "Percentage"].map((type) => (
                                    <motion.label
                                        key={type}
                                        className="flex items-center space-x-2"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <input
                                            type="radio"
                                            id={type.toLowerCase()}
                                            name="gradeType"
                                            value={type}
                                            onChange={(e) => setSelectedGradeType(e.target.value)}
                                            className="text-blue-600 focus:ring-blue-500"
                                            required
                                        />
                                        <span>{type}</span>
                                    </motion.label>
                                ))}
                            </div>

                            {/* Conditional Inputs */}
                            {selectedGradeType === "CGPA" && (
                                <motion.input
                                    type="number"
                                    step="0.1"
                                    min="0"
                                    max="10"
                                    ref={marks}
                                    placeholder="Enter your CGPA"
                                    className="w-full p-3 mt-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                    whileFocus={{ scale: 1.01 }}
                                />
                            )}
                            {selectedGradeType === "Percentage" && (
                                <motion.input
                                    type="number"
                                    step="0.1"
                                    min="0"
                                    max="100"
                                    ref={marks}
                                    placeholder="Enter your percentage"
                                    className="w-full p-3 mt-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                    whileFocus={{ scale: 1.01 }}
                                />
                            )}
                        </motion.div>


                        {/* Buttons */}
                        <motion.div
                            className="flex justify-between pt-6 border-t border-gray-200"
                            variants={itemVariants}
                        >
                            <motion.button
                                type="button"
                                onClick={() => navigate(-1)}
                                className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                               <Link to={"/eligibility/aadhar"}>Back</Link>
                            </motion.button>

                            <div className="flex items-center space-x-4">
                                {submitSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-green-600 flex items-center"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                        Saved successfully!
                                    </motion.div>
                                )}

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`px-6 py-3 rounded-lg font-semibold text-white shadow-md ${
                                        isSubmitting
                                            ? "bg-blue-400"
                                            : "bg-blue-600 hover:bg-blue-700"
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center">
                                            <svg
                                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Saving...
                                        </span>
                                    ) : (
                                        <Link to={"/eligibility/documents"}>Save & Next</Link>
                                    )}
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.form>
                </motion.div>
            </div>
        </motion.div>
    );
}
