import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "How does EduSupport help students in need?",
        answer: "EduSupport connects students with donors who can fund their education, ensuring financial stability through AI-powered matching.",
    },
    {
        question: "Is my donation secure?",
        answer: "Yes! We use encrypted transactions via Google Pay to ensure safe and transparent donations.",
    },
    {
        question: "Can I request support as a student?",
        answer: "Yes, students can submit their academic and financial details to be matched with potential donors.",
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full flex items-center justify-center p-8">
            <div className=" w-full bg-[#fafafa] shadow-lg rounded-lg p-8">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b pb-4">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left flex justify-between items-center py-3 text-[24px] text-gray-700"
                            >
                                {faq.question}
                                <span className="text-blue-500 text-[35px]">{openIndex === index ? "−" : "+"}</span>
                            </button>

                            {openIndex === index && (
                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    transition={{ duration: 0.3 }}
                                    className="text-gray-600 text-lg"
                                >
                                    {faq.answer}
                                </motion.p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
