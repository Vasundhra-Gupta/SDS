import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function DocumentVerification() {
    const [documents, setDocuments] = useState({
        scholarReport: null,
        admissionLetter: null,
        marksheet: null,
        incomeCertificate: null,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setDocuments({ ...documents, [name]: files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validate all documents are uploaded
        if (Object.values(documents).some((doc) => !doc)) {
            alert("Please upload all required documents.");
            setIsSubmitting(false);
            return;
        }

        // Simulate API call
        setTimeout(() => {
            console.log("Documents Uploaded:", documents);
            setIsSubmitting(false);
            setSubmitSuccess(true);
        }, 1500);
    };

    const inputFields = [
        {
            type: "file",
            id: "scholarReport",
            name: "scholarReport",
            label: "Verified Scholar Report",
            required: true,
        },
        {
            type: "file",
            id: "admissionLetter",
            name: "admissionLetter",
            required: true,
            label: "Institution Admission Letter / Fee Structure",
        },
        {
            type: "file",
            id: "marksheet",
            name: "marksheet",
            required: true,
            label: "Previous Year's Marksheet",
        },
        {
            type: "file",
            id: "incomeCertificate",
            name: "incomeCertificate",
            required: true,
            label: "Income Certificate",
        },
    ];

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
                damping: 10,
            },
        },
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen  from-blue-50 to-indigo-50 py-12 px-4"
        >
            <motion.div
                className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden pb-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Header */}
                <motion.div
                    className=" p-6 mr-2 text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-3xl font-bold text-blue-800 my-3"
                    >
                        Document Uploads
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-600 "
                    >
                        Please upload your Documents positively
                    </motion.p>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    className="px-8 py-3 space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {inputFields.map((field, index) => (
                        <motion.div
                            key={field.id}
                            variants={itemVariants}
                            className="space-y-2"
                        >
                            <label
                                htmlFor={field.name}
                                className="block text-sm font-medium text-gray-700"
                            >
                                {field.label}
                            </label>
                            <motion.div
                                className="border-2 border-dashed border-gray-300 rounded-lg p-4"
                                whileHover={{ borderColor: "#3b82f6" }}
                            >
                                <input
                                    type={field.type}
                                    id={field.id}
                                    name={field.name}
                                    onChange={handleFileChange}
                                    className="w-full"
                                    required={field.required}
                                />
                                {documents[field.name] && (
                                    <p className="text-sm text-green2">
                                        {documents[field.name].name}
                                    </p>
                                )}
                            </motion.div>
                        </motion.div>
                    ))}

                    {/* Navigation Buttons */}
                    <motion.div
                        className="flex justify-between pt-6 border-t border-gray-200"
                        variants={itemVariants}
                    >
                        <Link to="/eligibility/education">
                            <motion.button
                                type="button"
                                className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Back
                            </motion.button>
                        </Link>

                        <div className="flex items-center gap-4">
                            {submitSuccess && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-green-600 flex items-center"
                                >
                                    <svg
                                        className="w-5 h-5 mr-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    Documents uploaded!
                                </motion.div>
                            )}

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-6 py-3 rounded-lg font-medium text-white ${
                                    isSubmitting
                                        ? "bg-blue-400"
                                        : "bg-blue-600 hover:bg-blue-700"
                                } shadow-md transition-colors`}
                                whileHover={
                                    !isSubmitting ? { scale: 1.05 } : {}
                                }
                                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center">
                                        <svg
                                            className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
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
                                        Uploading...
                                    </span>
                                ) : (
                                    <Link to={"/eligibility/bank"}>
                                        Save and Next
                                    </Link>
                                )}
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.form>
            </motion.div>
        </motion.div>
    );
}
