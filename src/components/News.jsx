import React from 'react';
import { X } from 'lucide-react';

const News = ({ onClose }) => {
  const newsArticles = [
    {
      title: "2024 Social Security Cost-of-Living Adjustment",
      content: "The Social Security Administration announced a 3.2% cost-of-living adjustment (COLA) for 2024. This increase will help beneficiaries keep up with inflation.",
      date: "2024-01-01",
      url: "https://www.ssa.gov/news/press/releases/2023/#10-2023-2",
    },
    {
      title: "Medicare Changes for 2024",
      content: "Medicare has announced several changes for 2024, including adjustments to premiums and deductibles. Stay informed about how these changes might affect your healthcare coverage.",
      date: "2024-01-15",
      url: "https://www.medicare.gov/blog/2024-medicare-costs",
    },
    {
      title: "New Tax Benefits for Seniors in 2024",
      content: "The IRS has introduced new tax benefits for seniors in 2024. Learn about increased standard deductions and other tax advantages for older Americans.",
      date: "2024-02-01",
      url: "https://www.irs.gov/individuals/seniors-retirees",
    },
    {
      title: "2024 Update on Senior Nutrition Programs",
      content: "The Administration for Community Living has expanded its senior nutrition programs for 2024. Find out about new meal delivery services and community dining options in your area.",
      date: "2024-02-15",
      url: "https://acl.gov/programs/health-wellness/nutrition-services",
    },
    {
      title: "Senior Technology Education Initiatives for 2024",
      content: "New nationwide initiatives are launching to help seniors bridge the digital divide. Learn about free classes and resources to improve your technology skills.",
      date: "2024-03-01",
      url: "https://oats.org/",
    },
  ];
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30 backdrop-blur-sm">
      <div className="bg-tertiary p-4 sm:p-6 rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-8 text-white text-2xl focus:outline-none"
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
              <div className="mt-2 flex justify-between items-center">
                <span className="text-gray-400 text-xs">{article.date}</span>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Link to the news page */}
        <div className="mt-4 text-center">
          <a
            href="https://www.ncsc.gov.ph/news"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 text-sm"
          >
            More News and Updates
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;

