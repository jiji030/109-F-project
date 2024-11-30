'use client';

import React, { useState } from 'react';
import Navbar from './NewNavbar';
import Status from './Status'; // Import Status component
import News from './News'; // Import News component
import ExploreResources from './ExploreResources'; // Import ExploreResources component
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation in v6

export default function NewPage() {
  const [showStatus, setShowStatus] = useState(false); // State for controlling the Status modal
  const [showNews, setShowNews] = useState(false); // State for controlling the News modal
  const [showResources, setShowResources] = useState(false); // State for controlling the ExploreResources modal
  const navigate = useNavigate(); // Initialize navigate function

  const handleStatusClick = () => {
    setShowStatus(true); // Show the Status modal
    setShowNews(false); // Hide the News modal (if open)
    setShowResources(false); // Hide the Explore Resources modal (if open)
  };

  const handleNewsClick = () => {
    setShowNews(true); // Show the News modal
    setShowStatus(false); // Hide the Status modal (if open)
    setShowResources(false); // Hide the Explore Resources modal (if open)
  };

  const handleResourcesClick = () => {
    setShowResources(true); // Show the Explore Resources modal
    setShowStatus(false); // Hide the Status modal (if open)
    setShowNews(false); // Hide the News modal (if open)
  };

  const handleCloseModals = () => {
    setShowStatus(false);
    setShowNews(false);
    setShowResources(false); // Close Explore Resources modal
  };

  const handleLogoutClick = () => {
    navigate('/'); // Navigate to the root URL (Hero page) on logout
    setShowStatus(false); // Close any open modals
    setShowNews(false); // Close any open modals
    setShowResources(false); // Close Explore Resources modal
  };

  return (
    <section className="relative w-full min-h-screen bg-tertiary overflow-hidden">
      <Navbar onStatusClick={handleStatusClick} onNewsClick={handleNewsClick} onLogoutClick={handleLogoutClick} /> {/* Pass click handlers */}

      {/* Moving Light Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Light Circles */}
        <div 
          className="absolute left-1/4 top-1/4 w-[300px] h-[300px] bg-white/20 rounded-full blur-3xl animate-move-light"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="absolute right-1/4 top-2/3 w-[250px] h-[250px] bg-yellow-400/10 rounded-full blur-2xl animate-move-light-reverse"
          style={{ animationDelay: '-3s' }}
        />
        {/* Add other decorative circles as required */}
      </div>

      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center">
        <div className="relative z-10 flex flex-col items-center px-6 md:px-12 text-center text-white max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-400 leading-tight mb-6 animate-fade-in-up">
            WELCOME!
          </h1>
          <div className="w-32 h-2 bg-yellow-400 mb-10 animate-fade-in-up animation-delay-200" />

          <p className="text-lg md:text-xl lg:texta-2xl mb-10 animate-fade-in-up animation-delay-400">
            We're here to provide you with the support, resources, and connections you need to live your best life.
            Explore helpful tools and feel free to reach out for any assistance. Your well-being is our priority!
          </p>

          <button 
            onClick={handleResourcesClick} // Trigger the Explore Resources modal
            className="px-10 py-4 bg-yellow-400 text-tertiary text-lg font-bold rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50 shadow-lg animate-fade-in-up animation-delay-600"
          >
            Explore Resources
          </button>
        </div>
      </div>

      {/* Conditional Rendering for Modals */}
      {showStatus && <Status onClose={handleCloseModals} />} {/* Render Status component */}
      {showNews && <News onClose={handleCloseModals} />} {/* Render News component */}
      {showResources && <ExploreResources onClose={handleCloseModals} />} {/* Render ExploreResources component */}

      {/* Footer Section
      <footer className="bg-primary py-4 mt-12">
        <div className="max-w-7xl mx-auto text-center text-black">
          <p className="text-sm">
            &copy; 2024 Your Organization Name. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="/privacy" className="text-black hover:text-yellow-400">Privacy Policy</a>
            <a href="/terms" className="text-black hover:text-yellow-400">Terms of Service</a>
            <a href="/contact" className="text-black hover:text-yellow-400">Contact Us</a>
          </div>
        </div>
      </footer> */}
    </section>
  );
}
