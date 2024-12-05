import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { supabase } from "../supabaseClient"; // Import Supabase client

const Profile = ({ onClose, setUserData }) => {
  const [userData, setLocalUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    region: "",
    province: "",
    city_town: "",
    birthdate: "",
    sex: "",
    civilstatus: "",
  });

  // Fetch user profile data from Supabase on component mount
  useEffect(() => {
    const fetchUserProfile = async () => {
      const { data, error } = await supabase.auth.getSession(); // Get session to identify the logged-in user
      if (error || !data?.session?.user) {
        console.error("Error fetching user session: ", error);
        return;
      }

      // Fetch the user's metadata from the 'users' table
      const { data: userMetadata, error: metadataError } = await supabase
        .from("users")
        .select("full_name, region, province, city_town, birthdate, sex, civilstatus")
        .eq("id", data.session.user.id)
        .single();

      if (metadataError) {
        console.error("Error fetching user metadata: ", metadataError);
      } else {
        setLocalUserData(data.session.user); // Save session user data if necessary
        setFormData({
          full_name: userMetadata?.full_name || "",
          region: userMetadata?.region || "",
          province: userMetadata?.province || "",
          city_town: userMetadata?.city_town || "",
          birthdate: userMetadata?.birthdate || "",
          sex: userMetadata?.sex || "",
          civilstatus: userMetadata?.civilstatus || "",
        });
      }
    };
    fetchUserProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveChanges = async () => {
    const { error } = await supabase
      .from("users")
      .update({
        full_name: formData.full_name,
        region: formData.region,
        province: formData.province,
        city_town: formData.city_town,
        birthdate: formData.birthdate,
        sex: formData.sex,
        civilstatus: formData.civilstatus,
      })
      .eq("id", userData.id);

    if (error) {
      console.error("Error updating user data:", error.message);
    } else {
      setIsEditing(false);
      // Update the user data in the parent component (NewNavbar)
      setUserData({
        ...userData,
        user_metadata: {
          ...userData.user_metadata,
          full_name: formData.full_name,
        }
      });
      console.log("User data updated successfully");
    }
  };

  const handleDeleteAccount = async () => {
    const isConfirmed = window.confirm("Are you sure you want to permanently delete your account? This action cannot be undone.");
  
    if (isConfirmed) {
      try {
        // Step 1: Delete the user's profile data from the 'users' table
        const { error: deleteProfileError } = await supabase
          .from("users")
          .delete()
          .eq("id", userData.id);
  
        if (deleteProfileError) {
          console.error("Error deleting user profile:", deleteProfileError.message);
          alert("Failed to delete your profile data. Please try again.");
          return;
        }
  
        // Step 2: Delete the user's authentication account
        // Ensure that you're calling deleteUser() on the currently authenticated user
        const { error: deleteAccountError } = await supabase.auth.deleteUser(userData.id);
  
        if (deleteAccountError) {
          console.error("Error deleting user account:", deleteAccountError.message);
          alert("Failed to delete your authentication account. Please try again.");
          return;
        }

        // Successful account deletion
        alert("Successfully deleted your account.");
        window.location.href = '/'; // Redirect after deletion

      } catch (error) {
        console.error("Unexpected error:", error);
        alert("Successfully deleted.");
        window.location.href = '/'; // Redirect to Hero.jsx or any other page you want
      }
    } else {
      console.log("User canceled the deletion.");
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
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
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-customPurple to-customNeon"></div>

        <button
          onClick={onClose}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 sm:mt-6 space-y-4"
        >
          {Object.keys(formData).map((key) => (
            <div className="flex justify-between items-center" key={key}>
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </span>
              {isEditing ? (
                <input
                  type="text"
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="text-gray-900 dark:text-white font-medium bg-transparent border-b-2 border-gray-300 focus:outline-none"
                />
              ) : (
                <span className="text-gray-900 dark:text-white font-medium">
                  {formData[key] || "N/A"}
                </span>
              )}
            </div>
          ))}

          <div className="flex justify-between items-center mt-6 sm:mt-8">
            {isEditing ? (
              <>
                <button
                  onClick={handleSaveChanges}
                  className="bg-customPurple text-white py-2 px-4 rounded-lg font-semibold"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg font-semibold"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-customPurple text-white py-2 px-4 rounded-lg font-semibold"
                >
                  Edit Profile
                </button>
                <button
                  onClick={handleDeleteAccount}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg font-semibold"
                >
                  Delete Account
                </button>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Profile;
