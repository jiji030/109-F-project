import React from 'react';
import { X } from 'lucide-react';

const News = ({ onClose }) => {
  const newsArticles = [
    {
      title: "20% Discount on Essential Goods",
      content:
        "Senior citizens are entitled to a 20% discount and VAT exemption on medicines, groceries, and other essential goods. Avail these benefits at participating establishments nationwide.",
    },
    {
      title: "Free Medical Check-Ups",
      content:
        "Government health centers and selected private clinics offer free annual medical check-ups for senior citizens. This includes basic lab tests, consultations, and health monitoring.",
    },
    {
      title: "Free Public Transportation",
      content:
        "Senior citizens can enjoy free rides on public buses, trains, and selected jeepneys by presenting their Senior Citizen ID. Some local government units also provide additional transportation perks.",
    },
    {
      title: "Discounted Utility Bills",
      content:
        "Eligible seniors can apply for a 5% discount on water and electricity bills. This benefit is subject to certain consumption limits and requires proof of eligibility.",
    },
    {
      title: "Priority Lanes and Services",
      content:
        "Priority lanes for seniors are available in banks, malls, government offices, and hospitals to provide fast and convenient service.",
    },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30 backdrop-blur-sm">
      <div className="bg-tertiary p-4 sm:p-6 rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors duration-200 focus:outline-none"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">Latest News!</h2>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[70vh] space-y-4 pr-2">
          {newsArticles.map((article, index) => (
            <div key={index} className="p-3 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-yellow-400">{article.title}</h3>
              <p className="mt-1 text-gray-300 text-sm">{article.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
