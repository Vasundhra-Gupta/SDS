import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BankDetails() {
    const [formData, setFormData] = useState({
        familyIncome: "",
        incomeProof: null,
        reasonForAssistance: "",
        requiredAmount: "",
        accountHolderName: "",
        accountNumber: "",
        ifscCode: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            console.log("Submitted Financial Information:", formData);
            setIsSubmitting(false);
            setSubmitSuccess(true);
        }, 1500);
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
            className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4"
        >
            <motion.div
                className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden pb-8"
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
                        Financial Details
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-600 "
                    >
                        Please provide your Financial details for assistance
                    </motion.p>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    className="px-8 py-3 space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Annual Family Income */}
                    <motion.div variants={itemVariants}>
                        <label
                            htmlFor="familyIncome"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Annual Family Income (₹)
                        </label>
                        <motion.input
                            type="text"
                            id="familyIncome"
                            name="familyIncome"
                            value={formData.familyIncome}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter annual family income"
                            required
                            whileFocus={{ scale: 1.01 }}
                        />
                    </motion.div>

                    {/* Income Proof */}
                    <motion.div variants={itemVariants}>
                        <label
                            htmlFor="incomeProof"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Income Proof (Salary Slip/Income Certificate/Ration
                            Card)
                        </label>
                        <motion.div
                            className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center"
                            whileHover={{ borderColor: "#3b82f6" }}
                        >
                            <input
                                type="file"
                                id="incomeProof"
                                name="incomeProof"
                                onChange={handleFileChange}
                                className="hidden"
                                required
                            />
                            <label
                                htmlFor="incomeProof"
                                className="cursor-pointer"
                            >
                                {formData.incomeProof ? (
                                    <p className="text-green-600">
                                        {formData.incomeProof.name}
                                    </p>
                                ) : (
                                    <>
                                        <p className="text-gray-500">
                                            Click to upload or drag and drop
                                        </p>
                                        <p className="text-xs text-gray-400 mt-1">
                                            PDF, JPG, or PNG (Max 5MB)
                                        </p>
                                    </>
                                )}
                            </label>
                        </motion.div>
                    </motion.div>

                    {/* Reason for Assistance */}
                    <motion.div variants={itemVariants}>
                        <label
                            htmlFor="reasonForAssistance"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Reason for Assistance
                        </label>
                        <motion.select
                            id="reasonForAssistance"
                            name="reasonForAssistance"
                            value={formData.reasonForAssistance}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                            whileFocus={{ scale: 1.01 }}
                        >
                            <option value="" disabled>
                                Select reason
                            </option>
                            <option value="Tuition Fees">Tuition Fees</option>
                            <option value="Books">Books</option>
                            <option value="Accommodation">Accommodation</option>
                            <option value="Others">Others</option>
                        </motion.select>
                    </motion.div>

                    {/* Required Amount */}
                    <motion.div variants={itemVariants}>
                        <label
                            htmlFor="requiredAmount"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Required Amount (₹)
                        </label>
                        <motion.input
                            type="text"
                            id="requiredAmount"
                            name="requiredAmount"
                            value={formData.requiredAmount}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter required amount"
                            required
                            whileFocus={{ scale: 1.01 }}
                        />
                    </motion.div>

                    {/* Bank Account Details Section */}
                    <motion.div
                        className="pt-6 border-t border-gray-200"
                        variants={itemVariants}
                    >
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                            Bank Account Details
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            <motion.div variants={itemVariants}>
                                <label
                                    htmlFor="accountHolderName"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Account Holder Name
                                </label>
                                <motion.input
                                    type="text"
                                    id="accountHolderName"
                                    name="accountHolderName"
                                    value={formData.accountHolderName}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="As per bank records"
                                    required
                                    whileFocus={{ scale: 1.01 }}
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label
                                    htmlFor="accountNumber"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Account Number
                                </label>
                                <motion.input
                                    type="text"
                                    id="accountNumber"
                                    name="accountNumber"
                                    value={formData.accountNumber}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter account number"
                                    required
                                    whileFocus={{ scale: 1.01 }}
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label
                                    htmlFor="ifscCode"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    IFSC Code
                                </label>
                                <motion.input
                                    type="text"
                                    id="ifscCode"
                                    name="ifscCode"
                                    value={formData.ifscCode}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter IFSC code"
                                    required
                                    whileFocus={{ scale: 1.01 }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Form Actions */}
                    <motion.div
                        className="flex justify-between pt-6 border-t border-gray-200"
                        variants={itemVariants}
                    >
                        <Link to="/eligibility/documents">
                            <motion.button
                                type="button"
                                className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Back
                            </motion.button>
                        </Link>

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
                                    Submitted successfully!
                                </motion.div>
                            )}

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-6 py-3 rounded-lg font-semibold text-white shadow-md ${
                                    isSubmitting
                                        ? "bg-blue-400"
                                        : "bg-blue-600 hover:bg-blue-700"
                                } transition-colors`}
                                whileHover={
                                    !isSubmitting ? { scale: 1.05 } : {}
                                }
                                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
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
                                        Submitting...
                                    </span>
                                ) : (
                                    <Link to={"/request-success"}>Submit Application</Link>
                                )}
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.form>
            </motion.div>
        </motion.div>
    );
}
