import React, { useState } from "react";
import Navbar from "./Newnavbar";
import Status from "./Status";
import News from "./News";
import ExploreResources from "./ExploreResources";
import { FisherMan } from "./canvas";
import { useNavigate } from "react-router-dom";

export default function NewPage() {
  const [showStatus, setShowStatus] = useState(false);
  const [showNews, setShowNews] = useState(false);
  const navigate = useNavigate();

  // Handle click events for modals
  const handleStatusClick = () => {
    setShowStatus(true);
    setShowNews(false);
  };

  const handleNewsClick = () => {
    setShowNews(true);
    setShowStatus(false);
  };

  const handleCloseModals = () => {
    setShowStatus(false);
    setShowNews(false);
  };

  const handleLogoutClick = () => {
    navigate("/");
    setShowStatus(false);
    setShowNews(false);
  };

  return (
    <section className="relative w-full min-h-screen bg-tertiary overflow-hidden">
      {/* Navbar with click handlers */}
      <Navbar
        onStatusClick={handleStatusClick}
        onNewsClick={handleNewsClick}
        onLogoutClick={handleLogoutClick}
      />

      {/* Light Circles for Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-1/4 top-1/4 w-[300px] h-[300px] bg-white/20 rounded-full blur-3xl animate-move-light"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute right-1/4 top-2/3 w-[250px] h-[250px] bg-yellow-400/10 rounded-full blur-2xl animate-move-light-reverse"
          style={{ animationDelay: "-3s" }}
        />
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
              We're here to provide you with the support, resources, and connections you need to live your best life.
              Explore helpful tools and feel free to reach out for any assistance. Your well-being is our priority!
            </p>
          </div>
          {/* Right Side - FisherMan 3D Canvas */}
          <FisherMan />
        </div>
      </div>

      {/* Location Section for Senior Citizen Building */}
      <div className="py-16 bg-secondary text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Senior Citizen Building Location</h2>
        <p className="text-xl mb-4">
          The Senior Citizen Building of Butuan City is located at the heart of Butuan City, Agusan Del Norte. It is a
          place dedicated to senior citizens, offering various services, support, and community activities for elderly
          citizens in the region.
        </p>
        <p className="text-lg mb-4">
          Address: OSCA, XG2H+5PM, Butuan City, Agusan Del Norte
        </p>
        {/* Link to Get Directions */}
        <a
          href="https://www.google.com/maps/dir//OSCA,+XG2H+5PM,+Butuan+City,+Agusan+Del+Norte"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:text-yellow-300 mt-4 inline-block"
        >
          Get Directions
        </a>
      </div>

      {/* Conditional Rendering for Modals */}
      {showStatus && <Status onClose={handleCloseModals} />}
      {showNews && <News onClose={handleCloseModals} />}

      {/* Explore Resources Section */}
      <ExploreResources />

      {/* Footer Section */}
      <footer className="bg-tertiary text-gray-300 py-8 mt-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <p className="mb-4">© 2024 Senior Bridge. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://drive.google.com/file/d/1MkrMx5uHVx2DNJPqfGsF3pPRRxDJ7Gh7/view?usp=sharing"
              className="text-yellow-400 hover:text-yellow-300"
              target="_blank"
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
