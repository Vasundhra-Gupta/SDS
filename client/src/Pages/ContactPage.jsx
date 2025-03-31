import React from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  // Framer Motion Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center">
      <motion.div
        className="w-full bg-white p-8 rounded-lg shadow-lg mx-auto"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.h1
          className="text-3xl font-bold text-gray-800 text-center mb-6"
          variants={fadeInUp}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-gray-600 text-center mb-10"
          variants={fadeInUp}
        >
          We're here to assist you. Feel free to reach out to us with any
          questions, concerns, or feedback.
        </motion.p>

        {/* Contact Information */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-12"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Email Section */}
          <motion.div className="flex items-start" variants={fadeInUp}>
            <div className="text-blue-500 text-4xl mr-4">📧</div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Email Us
              </h2>
              <p className="text-gray-600">
                Send us your questions or inquiries at:
              </p>
              <p className="text-blue-500 font-medium">info@EduSupport.org</p>
            </div>
          </motion.div>

          {/* Phone Section */}
          <motion.div className="flex items-start" variants={fadeInUp}>
            <div className="text-blue-500 text-4xl mr-4">📞</div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Call Us
              </h2>
              <p className="text-gray-600">Reach us directly at:</p>
              <p className="text-blue-500 font-medium">+91 12345 67890</p>
            </div>
          </motion.div>

          {/* Location Section */}
          <motion.div className="flex items-start" variants={fadeInUp}>
            <div className="text-blue-500 text-4xl mr-4">📍</div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Visit Us
              </h2>
              <p className="text-gray-600">Our office is located at:</p>
              <p className="text-blue-500 font-medium">
                123 EduSupport , Chandigarh, India
              </p>
            </div>
          </motion.div>

          {/* Social Media Section */}
          <motion.div className="flex items-start" variants={fadeInUp}>
            <div className="text-blue-500 text-4xl mr-4">🌐</div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Follow Us
              </h2>
              <p className="text-gray-600">
                Stay connected through our social media s:
              </p>
              <p className="text-blue-500 font-medium">
                Facebook | Twitter | Instagram
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="mt-10 px-12 border border-gray-300 rounded-lg shadow-md p-6 bg-gray-50"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Submit your query
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="w-56 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mx-auto block"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
