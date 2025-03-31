import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  // Animation Variants
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header Section */}
      <motion.div
        className="bg-blue-500 w-full py-12 flex flex-col items-center"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl font-bold text-white">About Us</h1>
        <p className="mt-4 text-white text-center max-w-3xl">
          Empowering students and transforming lives through education and financial support. Discover who we are, what we stand for, and why we're dedicated to making a difference.
        </p>
      </motion.div>

      {/* Mission and Vision Section */}
      <motion.div
        className="max-w-5xl w-full mt-12 px-8"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="bg-white p-6 rounded-lg shadow-lg" variants={fadeInUp}>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At EduSupport , our mission is to support students facing financial hardships by providing educational resources and funding. We believe education is a powerful tool for change and are committed to fostering opportunities for growth.
          </p>
        </motion.div>
        <motion.div className="bg-white p-6 rounded-lg shadow-lg mt-8" variants={fadeInUp}>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-700">
            Our vision is a world where every student, regardless of their socioeconomic background, has the chance to pursue their dreams and achieve success through education.
          </p>
        </motion.div>
      </motion.div>

      {/* Story Section */}
      <motion.div
        className="max-w-5xl w-full mt-12 px-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-700">
            Founded in 2025, EduSupport  was born out of a belief that access to education should never be restricted by financial limitations. Over the years, we've supported countless students in achieving their academic goals, empowering communities and building brighter futures.
          </p>
          <p className="text-gray-700 mt-4">
            What started as a small initiative has grown into a network of donors, mentors, and visionaries who share the passion for creating equitable educational opportunities for all.
          </p>
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        className="max-w-5xl w-full mt-12 px-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li><strong>Integrity:</strong> We uphold transparency and accountability in everything we do.</li>
            <li><strong>Empathy:</strong> We strive to understand and address the unique challenges students face.</li>
            <li><strong>Excellence:</strong> We aim to provide outstanding support and resources to our beneficiaries.</li>
          </ul>
        </div>
      </motion.div>

      {/* Call-to-Action Section */}
      <motion.div
        className="bg-blue-500 w-full py-12 flex flex-col items-center mt-12"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
        <p className="text-white text-center max-w-3xl">
          Whether you're a student, donor, or volunteer, there's a place for you at EduSupport . Together, we can make a difference.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 px-8 py-3 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
}
