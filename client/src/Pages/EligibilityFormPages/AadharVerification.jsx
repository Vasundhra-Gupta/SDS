import React, { useState } from "react";
import { motion } from "framer-motion";
import { icons } from "../../assets/icons";
import { Link } from "react-router-dom";

export default function AadharVerification() {
    const [aadhaarNumber, setAadhaarNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);
    const [isVerified, setIsVerified] = useState(false);

    const validateAadhaarNumber = (number) => {
        const regex = /^[0-9]{12}$/;
        return regex.test(number);
    };

    const handleSendOtp = () => {
        if (validateAadhaarNumber(aadhaarNumber)) {
            setError("");
            setIsVerifying(true);

            // Simulate API call delay
            setTimeout(() => {
                setOtpSent(true);
                setIsVerifying(false);
                console.log("OTP Sent to Aadhaar Number:", aadhaarNumber);
            }, 1500);
        } else {
            setError("Please enter a valid 12-digit Aadhaar number");
        }
    };

    const handleVerifyOtp = () => {
        if (otp.length === 6) {
            setIsVerifying(true);

            // Simulate verification delay
            setTimeout(() => {
                setIsVerified(true);
                setIsVerifying(false);
                console.log("Aadhaar verified successfully!");
            }, 1500);
        } else {
            setError("Please enter a valid 6-digit OTP");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative max-w-md mt-[5%] mb-12 mx-auto p-8 bg-white rounded-xl shadow-lg"
        >
            <motion.h2
                className="text-2xl font-bold text-gray-800 mb-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
            >
                Aadhaar Verification
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <label
                    htmlFor="aadhaarNumber"
                    className="block text-sm font-medium text-gray-700 mb-2"
                >
                    Enter 12-digit Aadhaar Number
                </label>
                <motion.input
                    type="text"
                    id="aadhaarNumber"
                    value={aadhaarNumber}
                    onChange={(e) => {
                        setAadhaarNumber(
                            e.target.value.replace(/\D/g, "").slice(0, 12)
                        );
                        setError("");
                    }}
                    maxLength={12}
                    placeholder="XXXX XXXX XXXX"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    disabled={otpSent}
                    whileFocus={{ scale: 1.01 }}
                />
            </motion.div>

            {error && (
                <motion.p
                    className="text-red-500 text-sm mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {error}
                </motion.p>
            )}

            {!otpSent ? (
                <motion.button
                    onClick={handleSendOtp}
                    disabled={isVerifying}
                    className={`mt-6 w-full py-3 rounded-lg font-semibold ${
                        isVerifying
                            ? "bg-blue-400"
                            : "bg-blue-600 hover:bg-blue-700"
                    } text-white shadow-md`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    {isVerifying ? (
                        <span className="flex items-center justify-center">
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
                            Sending OTP...
                        </span>
                    ) : (
                        "Send OTP"
                    )}
                </motion.button>
            ) : (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="mt-6"
                >
                    {!isVerified ? (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <label
                                    htmlFor="otp"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Enter 6-digit OTP
                                </label>
                                <motion.input
                                    type="text"
                                    id="otp"
                                    value={otp}
                                    onChange={(e) => {
                                        setOtp(
                                            e.target.value
                                                .replace(/\D/g, "")
                                                .slice(0, 6)
                                        );
                                        setError("");
                                    }}
                                    maxLength={6}
                                    placeholder="XXXXXX"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    whileFocus={{ scale: 1.01 }}
                                />
                            </motion.div>

                            <motion.button
                                onClick={handleVerifyOtp}
                                disabled={isVerifying}
                                className={`mt-4 w-full py-3 rounded-lg font-semibold ${
                                    isVerifying
                                        ? "bg-green-400"
                                        : "bg-green-600 hover:bg-green-700"
                                } text-white shadow-md`}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                {isVerifying ? (
                                    <span className="flex items-center justify-center">
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
                                        Verifying...
                                    </span>
                                ) : (
                                    "Verify OTP"
                                )}
                            </motion.button>
                        </>
                    ) : (
                        <motion.div
                            className="p-4 mt-4 bg-green-50 border border-green-200 rounded-lg text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="flex items-center justify-center text-green-600">
                                <svg
                                    className="w-6 h-6 mr-2"
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
                                <span className="font-medium">
                                    Aadhaar verified successfully!
                                </span>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            )}
            <div className="flex justify-between gap-4 mt-8">
                <Link to="/eligibility/personal">
                    <motion.button
                        type="button"
                        className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Back
                    </motion.button>
                </Link>

                <Link to="/eligibility/education">
                    <motion.button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                            setCompletedSteps([...completedSteps, 1])
                        }
                    >
                        Save & Next
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
}
