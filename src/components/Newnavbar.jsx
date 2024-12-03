import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react"; // Import Lucide User icon
import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import Profile from "./Profile"; // Import Profile component
import { supabase } from "../supabaseClient"; // Import Supabase client
import { title } from "framer-motion/client";

const NewNavbar = ({ onStatusClick, onNewsClick, onLogoutClick }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [showProfile, setShowProfile] = useState(false); // State to control Profile popup
  const [userData, setUserData] = useState(null); // State to hold user data

  const newNavLinks = [
    { id: "status", title: "Status", onClick: onStatusClick },
    { id: "news", title: "News", onClick: onNewsClick },
    { id: "logout", title: "Logout", onClick: onLogoutClick },
  ];

  // Fetch user profile data from Supabase
  useEffect(() => {
    const fetchUserProfile = async () => {
      const { data, error } = await supabase.auth.getUser(); // Get authenticated user
      if (error) {
        console.error("Error fetching user data:", error);
      } else if (data?.user) {
        setUserData(data.user); // Set the user data in state
      }
    };

    fetchUserProfile();
  }, []);

  // If the user is not logged in yet
  if (!userData) {
    return (
      <nav
        className={`${styles.paddingX} w-full flex-items-center py-5 fixed top-0 z-20 bg-primary`}
      >
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
            {/* User's Name and Profile Icon */}
            <li
              className="flex items-center gap-2 text-black hover:text-customPurple text-[18px] font-Montserrat cursor-pointer"
              onClick={() => setShowProfile(true)} // Trigger Profile popup
            >
              <User className="w-6 h-6" /> {/* Profile icon */}
              Hi, Loading...
            </li>

            {/* Navigation Links */}
            {newNavLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-black" : "text-black"
                } hover:text-customPurple text-[18px] font-Montserrat font-bold cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                  if (link.onClick) link.onClick();
                }}
              >
                <div>{link.title}</div>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
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
                {/* User's Name and Profile Icon for Mobile */}
                <li
                  className="flex items-center gap-2 text-black hover:text-customPurple text-[16px] font-poppins font-medium cursor-pointer"
                  onClick={() => {
                    setToggle(false);
                    setShowProfile(true);
                  }}
                >
                  <User className="w-5 h-5" /> {/* Profile icon */}
                  Hi, Loading...
                </li>

                {/* Navigation Links */}
                {newNavLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-black" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(false);
                      setActive(link.title);
                      if (link.onClick) link.onClick();
                    }}
                  >
                    <div>{link.title}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`${styles.paddingX} w-full flex-items-center py-5 fixed top-0 z-20 bg-primary`}
    >
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
          {/* User's Name and Profile Icon */}
          <li
            className="flex items-center gap-2 text-black hover:text-customPurple text-[18px] font-Montserrat cursor-pointer"
            onClick={() => setShowProfile(true)} // Trigger Profile popup
          >
            <User className="w-6 h-6" /> {/* Profile icon */}
            Hi, {userData.user_metadata?.full_name || "User"}
          </li>

          {/* Navigation Links */}
          {newNavLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-black" : "text-black"
              } hover:text-customPurple text-[18px] font-Montserrat font-bold cursor-pointer`}
              onClick={() => {
                setActive(link.title);
                if (link.onClick) link.onClick();
              }}
            >
              <div>{link.title}</div>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
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
              {/* User's Name and Profile Icon for Mobile */}
              <li
                className="flex items-center gap-2 text-black hover:text-customPurple text-[16px] font-poppins font-medium cursor-pointer"
                onClick={() => {
                  setToggle(false);
                  setShowProfile(true);
                }}
              >
                <User className="w-5 h-5" /> {/* Profile icon */}
                Hi, {userData.user_metadata?.full_name || "User"}
              </li>

              {/* Navigation Links */}
              {newNavLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-black" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                    if (link.onClick) link.onClick();
                  }}
                >
                  <div>{link.title}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Show Profile Popup */}
      {showProfile && <Profile onClose={() => setShowProfile(false)} />}
    </nav>
  );
};

export default NewNavbar;
