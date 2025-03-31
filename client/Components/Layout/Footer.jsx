import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  const tabs = [
    { to: "/", name: "Home" },
    { to: "/about", name: "About" },
    { to: "/faq", name: "FAQs" },
    { to: "/support", name: "Support" },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    }),
    hover: { scale: 1.05, color: "#ffffff" }
  };

  return (
    <motion.footer
      className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright Section */}
          <motion.p 
            className="text-sm order-2 md:order-1"
            custom={0}
            variants={itemVariants}
          >
            © {new Date().getFullYear()} Company, Inc. All rights reserved.
          </motion.p>

          {/* Logo */}
          <motion.div
            className="order-1 md:order-2"
            custom={1}
            variants={itemVariants}
          >
            <Link 
              to="/" 
              className="text-white text-2xl font-bold hover:text-gray-100 transition-colors"
            >
              <span className="sr-only">Home</span>
              EduSupport
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <motion.ul 
            className="flex flex-wrap justify-center gap-4 sm:gap-6 order-3"
            custom={2}
            variants={itemVariants}
          >
            {tabs.map((tab, index) => (
              <motion.li 
                key={tab.to}
                custom={index + 2}
                variants={itemVariants}
                whileHover="hover"
              >
                <Link
                  to={tab.to}
                  className="text-gray-300 hover:text-white transition-colors capitalize text-sm sm:text-base"
                >
                  {tab.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Additional Footer Content */}
        <motion.div 
          className="mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500"
          custom={tabs.length + 2}
          variants={itemVariants}
        >
          <p>By using our service, you agree to our Terms of Service and Privacy Policy</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}