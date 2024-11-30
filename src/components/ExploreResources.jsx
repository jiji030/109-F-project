'use client';

import React from 'react';

const ExploreResources = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30 backdrop-blur-sm overflow-hidden">
      <div className="bg-tertiary p-6 sm:p-10 rounded-2xl shadow-2xl w-full max-w-3xl relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200 focus:outline-none"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-3xl font-bold text-white mb-4">Explore Resources, Tailored for you!</h2>
        <p className="text-lg text-gray-300 mb-6">
          Discover the valuable resources and government programs available to senior citizens in the Philippines:
        </p>

        {/* Scrollable Content Container */}
        <div className="max-h-[400px] overflow-y-auto">
          {/* Resource List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Resource 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Senior Citizens Act"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary">Senior Citizens Act (RA 9994)</h3>
                <p className="text-gray-600">The Senior Citizens Act grants various benefits including discounts and exemptions for healthcare, medicines, and transportation.</p>
                <a
                  href="https://www.officialgazette.gov.ph/2010/11/15/republic-act-no-9994/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 mt-2 inline-block"
                >
                  Learn More About RA 9994
                </a>
              </div>
            </div>

            {/* Resource 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x200"
                alt="PhilHealth Benefits"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary">PhilHealth for Senior Citizens</h3>
                <p className="text-gray-600">PhilHealth provides senior citizens with healthcare insurance coverage, including free consultations, hospitalization, and discounts on medical services.</p>
                <a
                  href="https://www.philhealth.gov.ph/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 mt-2 inline-block"
                >
                  Visit PhilHealth Website
                </a>
              </div>
            </div>

            {/* Resource 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Senior Citizens' Discounts"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary">Senior Citizens' Discount</h3>
                <p className="text-gray-600">Senior citizens are entitled to discounts on food, medicine, and transportation, ensuring affordability for their basic needs.</p>
                <a
                  href="https://www.seniorcitizens.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 mt-2 inline-block"
                >
                  Learn More About Senior Citizens' Discounts
                </a>
              </div>
            </div>

            {/* Resource 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Social Security Services"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary">Social Security System (SSS)</h3>
                <p className="text-gray-600">SSS provides pensions and benefits for seniors who have contributed to the system during their working years.</p>
                <a
                  href="https://www.sss.gov.ph/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 mt-2 inline-block"
                >
                  Visit SSS Website
                </a>
              </div>
            </div>

            {/* Resource 5 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x200"
                alt="DSWD Senior Citizen Program"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary">DSWD Senior Citizen Program</h3>
                <p className="text-gray-600">The Department of Social Welfare and Development (DSWD) offers financial assistance, social services, and other programs to senior citizens.</p>
                <a
                  href="https://www.dswd.gov.ph/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 mt-2 inline-block"
                >
                  Visit DSWD Website
                </a>
              </div>
            </div>

            {/* Resource 6 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x200"
                alt="National Commission of Senior Citizens"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary">National Commission of Senior Citizens (NCSC)</h3>
                <p className="text-gray-600">The NCSC focuses on improving the quality of life for senior citizens through policy advocacy, services, and national programs.</p>
                <a
                  href="https://www.ncsc.gov.ph/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 mt-2 inline-block"
                >
                  Visit NCSC Website
                </a>
              </div>
            </div>

            {/* Resource 7 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Home Care Services"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary">Home Care Services</h3>
                <p className="text-gray-600">Find home care services that provide assistance with daily activities, allowing seniors to remain in their homes longer.</p>
                <a
                  href="https://www.homecareservices.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 mt-2 inline-block"
                >
                  Learn More About Home Care Services
                </a>
              </div>
            </div>

            {/* Resource 8 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Philippine Red Cross"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary">Philippine Red Cross - Senior Services</h3>
                <p className="text-gray-600">The Philippine Red Cross provides health services, welfare assistance, and disaster relief to senior citizens.</p>
                <a
                  href="https://www.redcross.org.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 mt-2 inline-block"
                >
                  Visit Philippine Red Cross Website
                </a>
              </div>
            </div>

            {/* Resource 9 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Senior Centers in the Philippines"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary">Senior Citizen Centers</h3>
                <p className="text-gray-600">Find local senior citizen centers where seniors can join activities, access programs, and socialize.</p>
                <a
                  href="https://www.dilg.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 mt-2 inline-block"
                >
                  Learn More About Senior Centers
                </a>
              </div>
            </div>

            {/* Resource 10 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x200"
                alt="AgingCare Philippines"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary">AgingCare Philippines</h3>
                <p className="text-gray-600">AgingCare provides helpful resources, expert advice, and caregiving tips for families taking care of elderly loved ones.</p>
                <a
                  href="https://www.agingcare.com.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 mt-2 inline-block"
                >
                  Visit AgingCare Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreResources;
