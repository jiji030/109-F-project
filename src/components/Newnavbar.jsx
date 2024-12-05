import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "lucide-react"; // Import Lucide User icon
import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import Profile from "./Profile"; // Import Profile component
import { supabase } from "../supabaseClient"; // Import Supabase client

const NewNavbar = ({ onStatusClick, onNewsClick }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [showProfile, setShowProfile] = useState(false); // State to control Profile popup
  const [userData, setUserData] = useState(null); // State to hold user data
  const [userFullName, setUserFullName] = useState(""); // State to hold the full name

  const navigate = useNavigate(); // To handle navigation

  // Fetch user profile data from Supabase
  useEffect(() => {
    const fetchUserProfile = async () => {
      const { data, error } = await supabase.auth.getSession(); // Get authenticated user
      if (error) {
        console.error("Error fetching user data:", error);
      } else if (data?.session?.user) {
        setUserData(data.session.user); // Set the user data in state

        // Fetch the user's full name from the users table
        const { data: userMetadata, error: metadataError } = await supabase
          .from("users")
          .select("full_name")
          .eq("id", data.session.user.id)
          .single();

        if (metadataError) {
          console.error("Error fetching user metadata:", metadataError);
        } else {
          setUserFullName(userMetadata?.full_name || "User");
        }
      }
    };

    fetchUserProfile();
  }, []);

  // Handle Logout
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Logout Error: ", error);
      } else {
        console.log("Logged out successfully");
        // Redirect to the login page
        window.location.replace("/"); // This replaces the current page with the home page
      }
    } catch (error) {
      console.error("Logout failed:", error.message);
      alert(`Logout failed: ${error.message}`);
    }
  };

  // If the user is not logged in yet
  if (!userData) {
    return (
      <nav className={`${styles.paddingX} w-full flex-items-center py-5 fixed top-0 z-20 bg-primary`}>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-black text-[18px] font-Montserrat font-bold cursor-pointer flex">
              Senior Bridge
            </p>
          </Link>

          <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
            <li
              className="flex items-center gap-2 text-black hover:text-customPurple text-[18px] font-Montserrat cursor-pointer"
              onClick={() => setShowProfile(true)}
            >
              <User className="w-6 h-6" />
              Loading...
            </li>

            <li
              className="text-black hover:text-customPurple text-[18px] font-Montserrat font-bold cursor-pointer"
              onClick={onStatusClick}
            >
              Status
            </li>
            <li
              className="text-black hover:text-customPurple text-[18px] font-Montserrat font-bold cursor-pointer"
              onClick={onNewsClick}
            >
              News
            </li>
            <li
              className="text-black hover:text-customPurple text-[18px] font-Montserrat font-bold cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </li>
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                <li
                  className="flex items-center gap-2 text-black hover:text-customPurple text-[16px] font-poppins font-medium cursor-pointer"
                  onClick={() => {
                    setToggle(false);
                    setShowProfile(true);
                  }}
                >
                  <User className="w-5 h-5" />
                  Loading...
                </li>

                <li
                  className="font-poppins font-medium cursor-pointer text-[16px]"
                  onClick={onStatusClick}
                >
                  Status
                </li>
                <li
                  className="font-poppins font-medium cursor-pointer text-[16px]"
                  onClick={onNewsClick}
                >
                  News
                </li>
                <li
                  className="font-poppins font-medium cursor-pointer text-[16px]"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={`${styles.paddingX} w-full flex-items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-black text-[18px] font-Montserrat font-bold cursor-pointer flex">
            Senior Bridge
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          <li
            className="flex items-center gap-2 text-black hover:text-customPurple text-[18px] font-Montserrat cursor-pointer"
            onClick={() => setShowProfile(true)}
          >
            <User className="w-6 h-6" />
            {userFullName || "User"}
          </li>

          <li
            className={`${
              active === "Status" ? "text-black" : "text-black"
            } hover:text-customPurple text-[18px] font-Montserrat font-bold cursor-pointer`}
            onClick={onStatusClick}
          >
            Status
          </li>
          <li
            className={`${
              active === "News" ? "text-black" : "text-black"
            } hover:text-customPurple text-[18px] font-Montserrat font-bold cursor-pointer`}
            onClick={onNewsClick}
          >
            News
          </li>
          <li
            className={`${
              active === "Logout" ? "text-black" : "text-black"
            } hover:text-customPurple text-[18px] font-Montserrat font-bold cursor-pointer`}
            onClick={handleLogout}
          >
            Logout
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              <li
                className="flex items-center gap-2 text-black hover:text-customPurple text-[16px] font-poppins font-medium cursor-pointer"
                onClick={() => {
                  setToggle(false);
                  setShowProfile(true);
                }}
              >
                <User className="w-5 h-5" />
                {userFullName || "User"}
              </li>

              <li
                className="font-poppins font-medium cursor-pointer text-[16px]"
                onClick={onStatusClick}
              >
                Status
              </li>
              <li
                className="font-poppins font-medium cursor-pointer text-[16px]"
                onClick={onNewsClick}
              >
                News
              </li>
              <li
                className="font-poppins font-medium cursor-pointer text-[16px]"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>

      {showProfile && (
        <Profile
          onClose={() => setShowProfile(false)}
          setUserData={(data) => {
            setUserData(data);
            setUserFullName(data?.full_name || "User"); 
            window.location.reload(); 
          }}
        />
      )}
    </nav>
  );
};

export default NewNavbar;
