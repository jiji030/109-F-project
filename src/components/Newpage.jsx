import React, { useState } from "react";
import Navbar from "./Newnavbar";
import Status from "./Status"; // Import Status component
import News from "./News"; // Import News component
import ExploreResources from "./ExploreResources"; // Import ExploreResources component
import { FisherMan } from "./canvas";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation in v6

export default function NewPage() {
  const [showStatus, setShowStatus] = useState(false); // State for controlling the Status modal
  const [showNews, setShowNews] = useState(false); // State for controlling the News modal
  const navigate = useNavigate(); // Initialize navigate function

  const handleStatusClick = () => {
    setShowStatus(true); // Show the Status modal
    setShowNews(false); // Hide the News modal (if open)
  };

  const handleNewsClick = () => {
    setShowNews(true); // Show the News modal
    setShowStatus(false); // Hide the Status modal (if open)
  };

  const handleCloseModals = () => {
    setShowStatus(false);
    setShowNews(false);
  };

  const handleLogoutClick = () => {
    navigate("/"); // Navigate to the root URL (Hero page) on logout
    setShowStatus(false); // Close any open modals
    setShowNews(false); // Close any open modals
  };

  return (
    <section className="relative w-full min-h-screen bg-tertiary overflow-hidden">
      <Navbar
        onStatusClick={handleStatusClick}
        onNewsClick={handleNewsClick}
        onLogoutClick={handleLogoutClick}
      />{" "}
      {/* Pass click handlers */}
      {/* Moving Light Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Original Light Circles */}
        <div
          className="absolute left-1/4 top-1/4 w-[300px] h-[300px] bg-white/20 rounded-full blur-3xl animate-move-light"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute right-1/4 top-2/3 w-[250px] h-[250px] bg-yellow-400/10 rounded-full blur-2xl animate-move-light-reverse"
          style={{ animationDelay: "-3s" }}
        />
        {/* Additional Light Circles */}
        <div
          className="absolute right-1/5 top-1/5 w-[275px] h-[275px] bg-yellow-400/10 rounded-full blur-2xl animate-move-light-reverse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute left-1/6 top-2/3 w-[300px] h-[300px] bg-white/20 rounded-full blur-3xl animate-move-light"
          style={{ animationDelay: "-1s" }}
        />
        <div
          className="absolute right-1/6 top-1/6 w-[250px] h-[250px] bg-yellow-400/10 rounded-full blur-2xl animate-move-light-reverse"
          style={{ animationDelay: "-2s" }}
        />
        {/* New Circles at the Top */}
        <div
          className="absolute right-1/3 top-[5%] w-[250px] h-[250px] bg-yellow-400/10 rounded-full blur-2xl animate-move-light-reverse"
          style={{ animationDelay: "-2s" }}
        />
        <div
          className="absolute left-[15%] top-[8%] w-[275px] h-[275px] bg-white/20 rounded-full blur-3xl animate-move-light"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute right-[20%] top-[12%] w-[300px] h-[300px] bg-yellow-400/10 rounded-full blur-2xl animate-move-light-reverse"
          style={{ animationDelay: "-1s" }}
        />
      </div>
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12 text-center text-white max-w-7xl mx-auto">
          {/* Left Side - Welcome Text */}
          <div className="relative z-10 flex flex-col items-start text-left text-white max-w-4xl mx-auto md:w-1/2 mt-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-400 leading-tight mb-6 animate-fade-in-up">
              WELCOME!
            </h1>
            <div className="w-32 h-2 bg-yellow-400 mb-10 animate-fade-in-up animation-delay-200" />
            <p className="text-lg md:text-xl lg:text-2xl mb-10 animate-fade-in-up animation-delay-400">
              We're here to provide you with the support, resources, and
              connections you need to live your best life. Explore helpful tools
              and feel free to reach out for any assistance. Your well-being is
              our priority!
            </p>
          </div>
          {/* Right Side - FisherMan 3D Canvas */}
          <FisherMan /> {/* 3D Canvas */}
        </div>
      </div>
      {/* Conditional Rendering for Modals */}
      {showStatus && <Status onClose={handleCloseModals} />}{" "}
      {/* Pass onClose prop to Status */}
      {showNews && <News onClose={handleCloseModals} />}{" "}
      {/* Pass onClose prop to News */}
      {/* Explore Resources Section */}
      <ExploreResources /> {/* Rendering the ExploreResources component here */}
      <footer className="bg-tertiary text-gray-300 py-8 mt-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <p className="mb-4">© 2024 Senior Bridge. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://drive.google.com/file/d/1MkrMx5uHVx2DNJPqfGsF3pPRRxDJ7Gh7/view?usp=sharing"
              className="text-yellow-400 hover:text-yellow-300"
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer"
            >
              About Us
            </a>
            <a
              href="https://drive.google.com/file/d/1T5FQ9nxRbAzZQy3uGBOSu1ZJ77WLKjDO/view?usp=sharing"
              className="text-yellow-400 hover:text-yellow-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
            <a
              href="https://drive.google.com/file/d/10qWKRPZmI-zOu5W4RU34u7WILqgyAII_/view?usp=sharing"
              className="text-yellow-400 hover:text-yellow-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
