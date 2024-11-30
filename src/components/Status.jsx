import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { X, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const BeneficiaryStatus = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30 backdrop-blur-sm overflow-hidden px-4 sm:px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-tertiary p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-md relative overflow-hidden z-40"
      >
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-customPurple to-customNeon"></div>

        {/* Close Button */}
        <button
          onClick={() => window.location.reload()}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200 focus:outline-none"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <motion.div variants={textVariant()} className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">Beneficiary Status</h2>
          <p className="text-customPurple dark:text-yellow-400 mt-2 text-sm sm:text-base">Your Current Status</p>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-lg leading-relaxed text-center"
        >
          Welcome to your personalized status page! Here, you can track your progress and see important updates.
        </motion.p>

        {/* Current Status Section */}
        <motion.div 
          variants={fadeIn("up", "", 0.2, 1)}
          className="mt-6 sm:mt-8 bg-gray-100 dark:bg-black-200 p-4 sm:p-6 rounded-xl shadow-inner"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2 sm:mb-3 flex items-center">
            <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-green-500 mr-2" />
            Current Status
          </h3>
          <p className="text-base sm:text-lg text-green-600 dark:text-green-400 font-medium">Active</p>
        </motion.div>

        {/* Recent Activities Section */}
        <motion.div variants={fadeIn("up", "", 0.3, 1)} className="mt-6 sm:mt-8">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4 flex items-center">
            <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-customPurple mr-2" />
            Recent Activities
          </h3>
          <ul className="space-y-2 sm:space-y-3">
            {[
              "Completed enrollment",
              "Participated in health check-up",
              "Received benefit updates"
            ].map((activity, index) => (
              <li key={index} className="flex items-start">
                <AlertCircle className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  {activity}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BeneficiaryStatus;
