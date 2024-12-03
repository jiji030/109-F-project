import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { supabase } from "../supabaseClient"; // Import Supabase client

const Profile = ({ onClose }) => {
  const [userData, setUserData] = useState(null);

  // Fetch user profile data from Supabase
  useEffect(() => {
    const fetchUserProfile = async () => {
      const { data, error } = await supabase.auth.getUser(); // Get authenticated user

      if (error) {
        console.error("Error fetching user data: ", error);
      } else if (data?.user) {
        // Set user data, including extra info from user_metadata
        setUserData(data.user);
      }
    };

    fetchUserProfile();
  }, []); // Only fetch once when the component mounts

  if (!userData) {
    return <div>Loading...</div>; // Show loading while user data is being fetched
  }

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
        onClick={onClose} // Use the onClose prop to handle closing the modal
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200 focus:outline-none"
        aria-label="Close"
        >
        <X className="w-6 h-6" />
        </button>
            

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
            Profile Details
          </h2>
          <p className="text-customPurple dark:text-yellow-400 mt-2 text-sm sm:text-base">
            Your personal information
          </p>
        </motion.div>

        {/* Profile Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 sm:mt-6 space-y-4"
        >
          {/* Name */}
          <div className="flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium">
              Name
            </span>
            <span className="text-gray-900 dark:text-white font-medium">
              {userData.user_metadata?.full_name || "N/A"}
            </span>
          </div>

          {/* Email */}
          <div className="flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium">
              Email
            </span>
            <span className="text-gray-900 dark:text-white font-medium">
              {userData.email}
            </span>
          </div>

          {/* Region */}
          <div className="flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium">
              Region
            </span>
            <span className="text-gray-900 dark:text-white font-medium">
              {userData.user_metadata?.region || "N/A"}
            </span>
          </div>

          {/* Province */}
          <div className="flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium">
              Province
            </span>
            <span className="text-gray-900 dark:text-white font-medium">
              {userData.user_metadata?.province || "N/A"}
            </span>
          </div>

          {/* City */}
          <div className="flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium">
              City
            </span>
            <span className="text-gray-900 dark:text-white font-medium">
              {userData.user_metadata?.city_town || "N/A"}
            </span>
          </div>

          {/* Birthdate */}
          <div className="flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium">
              Birthdate
            </span>
            <span className="text-gray-900 dark:text-white font-medium">
              {userData.user_metadata?.birthdate || "N/A"}
            </span>
          </div>

          {/* Sex */}
          <div className="flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium">
              Sex
            </span>
            <span className="text-gray-900 dark:text-white font-medium">
              {userData.user_metadata?.sex || "N/A"}
            </span>
          </div>

          {/* Civil Status */}
          <div className="flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium">
              Civil Status
            </span>
            <span className="text-gray-900 dark:text-white font-medium">
              {userData.user_metadata?.civil_status || "N/A"}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Profile;
